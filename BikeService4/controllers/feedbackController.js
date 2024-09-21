const nodemailer = require('nodemailer');
exports.sendFeedback=async (req, res) => {
    const { Email, Name, Message } = req.body;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vidhyanithi18@gmail.com',
            pass: 'kfco goqu nvmm eifs'
        }
    });
    let mailOptions = {
        from: Email,
        to: 'vidhyanithi18@gmail.com',
        subject: 'Feedback Received',
        text: `Customer Name: ${Name},\n\nCutomer Email: ${Email}\n\nMessage: ${Message}`
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Feedback sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send feedback.' });
    }
};
