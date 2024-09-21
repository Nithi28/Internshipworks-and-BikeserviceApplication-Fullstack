const Booking = require('../models/booking');
const Register = require('../models/register');
const nodemailer = require('nodemailer');
async function sendCompletionEmail(email) {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vidhyanithi18@gmail.com',
                pass: 'kfco goqu nvmm eifs'
            }
        });

        let mailOptions = {
            from: '"My Bikes" <vidhyanithi18@gmail.com>',
            to: email, 
            subject: 'Service Completed - Collect Your Bike',
            text: 'Dear Customer,\n\nYour service is complete. You can now collect your bike from My Bikes.\n\nThank you for choosing us!\n\nBest regards,\nMy Bikes',
            html: '<p>Dear Customer,</p><p>Your service is complete. You can now collect your bike from <strong>My Bikes</strong>.</p><p>Thank you for choosing us!</p><p>Best regards,<br>My Bikes</p>'
        };

        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.update = async (req, res) => {
    try {
        const updates = req.body.updates;
        for (let update of updates) {
            await Booking.updateOne({ _id: update.id }, { $set: { status: update.status } });
            const change = await Booking.findOne({ _id: update.id });
            const havetoupdate = await Register.findOne({ phone: change.phone });
            console.log("changed", change);
            if(change.status=="Completed"){
            console.log("updated=", havetoupdate);
            const email = havetoupdate.email;
            console.log("Email:", email);
            if (email) {
                await sendCompletionEmail(email);
            }
        }
        }
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send('Error updating status');
    }
};
