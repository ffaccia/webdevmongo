//var util= require('util');
//var encoder = new util.TextEncoder('utf-8');

if (process.env.NODE_ENV !== "production")
    //require("dotenv").parse()
    //const result = dotenv.config()
    require('dotenv').config({ path: './.env' })


const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
//const bodyParser = require("body-parser")


const indexRouter = require("./routes/index")
const authorsRouter = require("./routes/authors")
const booksRouter = require("./routes/books")


app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")

app.use(expressLayouts)
app.use(express.static("public"))

//app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }))

app.use(express.urlencoded({limit: "10mb", extended: true})); 
app.use(express.json());   

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: true,
    useUnifiedTopology: true,
    autoIndex: true
})
const db = mongoose.connection
db.on("error", error => console.error(error))
db.once("open", () => console.log("mongoose connected!"))

app.use("/", indexRouter)
app.use("/authors", authorsRouter)
app.use("/books", booksRouter)

app.listen(process.env.PORT || 3000)

