const express = require("express")
const app = express()

const indexRouter = require("./Routes/index")

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    console.log("Welcome To Hospital Management System");
    res.send('Welcome To Hospital Management System');
})

app.use("/api", indexRouter)


module.exports = app