const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/BikeService');
        console.log("Mongodb connected");
    } catch (error) {
        console.error("Failed to connect", error);
    }
}
connectToDatabase();
app.use(express.json());
app.use(cors());
app.use(express.static('./public'));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/BikeService' }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 } 
}));
app.use('/',require('./routes/root'))
app.listen(3500, () => {
    console.log("Port Connected");
});
