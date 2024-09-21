const mongoose = require('mongoose');

// Define the schema
const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100 // Set a reasonable maximum length for the name
    },
    phone: {
        type: String,
        required: true,
        maxlength: 15 // Set a reasonable maximum length for phone numbers
    },
    bike_model: {
        type: String,
        required: true,
        maxlength: 255 // Set maximum length for email
    },
    status: String,
    checkboxOptions:[{type:String}]
});

// Create the model
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
