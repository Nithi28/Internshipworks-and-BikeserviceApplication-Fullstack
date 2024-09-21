const Register = require('../models/register');
exports.checkLogin=async (req, res) => {
    try {
        const { email, password } = req.body;
        const check = await Register.findOne({ email: email });
        if(email == "vidhyanithi@gmail.com" && password == "Rose"){
            req.session.user = check;
            res.json({ success: true, redirect: '/admin.html' });
        }
        else if (check && check.password === password) {
            req.session.user = check; 
            console.log("User logged in:", req.session.user); 
            res.json({ success: true, redirect: '/site.html' });
        } else {
            res.json({ success: false, message: 'Wrong Password' });
        }
    } catch (error) {
        res.json({ success: false, message: 'Wrong username or password' });
    }
};
exports.logOut=('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Unable to log out');
        } else {
            res.redirect('/'); 
        }
    });
});


