const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv');
const path = require('path')

const errorMiddleware = require('./middlewares/errors')


dotenv.config()
// console.log(process.env.PORT)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(fileUpload());
app.use(express.json({ limit: "50mb" })); app.use(express.urlencoded({ limit: "50mb", extended: true }));


// Import all routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const payment = require('./routes/payment');
const order = require('./routes/order');


app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', payment)
app.use('/api/v1', order)




// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app