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
// const swaggerDocument = require('./swagger/swagger.json');
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
            "url": "http://localhost:8000/api/v1"
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const specs = swaggerJsDoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      // customCssUrl:
      //   "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
    })
  );

app.get('/', function (req, res) {
    console.log("Welcome To Hospital Management System");
    res.send('Welcome To Hospital Management System');
})

app.use("/api", indexRouter)


module.exports = app