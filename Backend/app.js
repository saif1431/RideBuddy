require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectToDB = require('./db/db')
const userRoutes = require('./routes/user.routes')
const app = express();
connectToDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use the imported connectDB function

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use('/users', userRoutes)

module.exports = app