const express = require("express");
const app = express();
const cors = require("cors");
const indexRouter = require("./Routes/index");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Swagger
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require('./swagger.json');
// const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hospital Management System Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a Demo app Using JavaScript,NodeJS,ExpressJS,Sequlize with Postgres with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Dhruvik",
        //url: "https://logrocket.com",
        email: "dhruvik.barvaliya.blackwolve@gmail.com",
      },
    },
    servers: [
      {
        url: process.env.BASE_URL,
      },
    ],
  },
  apis: ["./routes/*.js"],
};
console.log(URL);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// const specs = swaggerJsDoc(options);
// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(specs, {
//     explorer: true,
//   })
// );

app.get("/", function (req, res) {
  const protocol = req.protocol;
  const host = req.hostname;
  const url = req.originalUrl;
  const port = process.env.PORT
  const fullUrl = process.env.ENV == "development" ? `${protocol}://${host}:${port}${url}` : `${protocol}://${host}:${url}`
  console.log({ Message: `Welcome To ${process.env.ENV} Mode Of Hospital Management System`, Swagger: `${fullUrl}api-docs` });
  res.json({ Message: `Welcome To ${process.env.ENV} Mode Of Hospital Management System`, Swagger: `${fullUrl}api-docs` })
});

app.use("/api", indexRouter);

module.exports = app;
