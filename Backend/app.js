const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require('./db/db')

const app = express();
connectToDB();

app.use(cors());

// Use the imported connectDB function

app.get("/", (req, res) => {
    res.send("Hello World");
});