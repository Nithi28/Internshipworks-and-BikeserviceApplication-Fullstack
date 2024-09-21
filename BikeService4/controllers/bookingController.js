const Booking = require('../models/booking');
//Get all Bookings
exports.getallBookings= async (req, res) => {
    try {  
        const allbookings = await Booking.find(); 
        res.json(allbookings);
    } catch (err) {
        res.status(500).send('Error fetching data: ' + err.message);
    }
};
//Get particullar users booking details
exports.getBookings=async (req, res) => {
    try {
        const phone = req.session.user.phone;
        console.log("Fetching bookings for user:", phone); 
        const bookings = await Booking.find({ phone: phone }); 
        res.json(bookings);
    } catch (err) {
        res.status(500).send('Error fetching data: ' + err.message);
    }
};
//New Booking
exports.Booking=async (req, res) => {
    try {
        const { name, phone, bike_model, checkboxOptions } = req.body;
        const bike = { name, phone, bike_model, checkboxOptions, email: req.session.user.email }; 
        await Booking.insertMany([bike]);
        console.log("Booking saved for user:", req.session.user.email); 
        res.status(201).json({ message: 'Bike data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

