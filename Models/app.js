const express = require("express")
const mongoose  = require("mongoose");
const { modelName } = require("./user");
require('dotenv').config()
const cors = require("cors");
const app = express()
app.use(cors());


mongoose.connect("process.env.DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("conneted to database"));

module.exports= app
