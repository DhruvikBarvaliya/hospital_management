const express = require('express');
const app = express();
const db = require('./Config/Sequelize');
const { PORT } = require('./Config/Config')
const indexRouter = require("./Routes/index")

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    console.log("Welcome To Hospital Management System");
    res.send('Welcome To Hospital Management System');
})

app.use("/api", indexRouter)

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

app.listen(PORT, console.log(`Server is Running on Port No ${PORT} `))