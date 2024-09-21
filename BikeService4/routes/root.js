const express = require("express")
app=express()
const router = express.Router()
const path = require('path')
const isAuthenticated=require("../middleware/isAuthenticated")
const authController = require('../controllers/authController')
const bookingController = require('../controllers/bookingController')
const registerController = require('../controllers/registerController')
const updateController = require('../controllers/updateController')
const feedbackController = require('../controllers/feedbackController')


router.post('/updateStatus',updateController.update)
router.get('/services.html',bookingController.getBookings);
router.get('/allservices.html',bookingController.getallBookings);
router.post('/booking.html',bookingController.Booking)
router.post('/main.html',authController.checkLogin);
router.get('/logout',authController.logOut);
router.post('/reg.html',registerController.register)
router.post('/sendFeedback',feedbackController.sendFeedback)
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'main.html'));
});
router.get("/reg.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'reg.html'));
});
// Routes that require authentication
router.get("/site.html", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'site.html'));
});
router.get("/booking.html", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'booking.html'));
});
router.get("/admin.html", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'admin.html'));
});
router.get("/myservices.html", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'myservices.html'));
});
module.exports=router