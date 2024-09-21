
const path=require('path')
const Register = require('../models/register');
exports.register=async (req, res) => {
    const { email, phone, password } = req.body;

    try {
        const existingUser = await Register.findOne({ email: email });

        if (existingUser) {
            return res.status(400).send('Email already registered');
        }

        const data = { email, phone, password };
        await Register.insertMany([data]);

        res.sendFile(path.join(__dirname, '../views','main.html'));
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};