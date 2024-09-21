const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    phone:{
        type:Number,
        required :true,
        maxlength:10
    },
    password: {
        type: String,
        required: true
    }
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
