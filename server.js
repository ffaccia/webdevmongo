//var util= require('util');
//var encoder = new util.TextEncoder('utf-8');

if (process.env.NODE_ENV !== "production")
    //require("dotenv").parse()
    //const result = dotenv.config()
    require('dotenv').config({ path: './.env' })


const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")

const indexRouter = require("./routes/index")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.set(expressLayouts)
app.set(express.static("public"))

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on("error", error => console.error(error))
db.once("open", () => console.log("mongoose connected!"))

app.use("/", indexRouter)
app.listen(process.env.PORT || 3000)
