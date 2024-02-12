const express = require("express");
const app = express();
const cors = require("cors");

const indexRouter = require("./Routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

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

const specs = swaggerJsDoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

app.get("/", function (req, res) {
  console.log(
    `Welcome To ${process.env.ENV} Mode Of Hospital Management System`
  );
  res.send(`Welcome To ${process.env.ENV} Mode Of Hospital Management System`);
});

app.use("/api", indexRouter);

module.exports = app;
