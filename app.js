const express = require("express")
const app = express()
const cors = require('cors'); 

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const indexRouter = require("./Routes/index")

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors()); 

// Swagger
const swaggerDocument = require('./swagger/swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));

app.get('/', function (req, res) {
    console.log("Welcome To Hospital Management System");
    res.send('Welcome To Hospital Management System');
})

app.use("/api", indexRouter)


module.exports = app