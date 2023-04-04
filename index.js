const express = require("express");
const app = express();
var multer = require("multer");
var forms = multer();
var DB = require("./Connection.js");
app.use(express.json());
// const mongoose = require("mongoose");
// --------------------------------------------------- IMPORT ROUTES
const ExampleRoute = require("./Routes/Example.route.js");
const BusinessRoutes = require("./Routes/Business.Routes.js");
const Contacuts = require("./Routes/Contactus.routes.js");

// ----------------------------------------------------------------------------------------------

// -------------------------------------------------------- API VALIDATIONS-----------------------
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({ limit: "50mb" }));

var cors = require("cors");
app.use(cors({ origin: true, credentials: true }));
app.use(function (req, res, next) {
  console.log(req._parsedUrl.path, "----<<<<<<<<<<<Current ");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// ---------------------------------------------------------------------

//-------------------------------------------------------------------------  define Routes
app.use("/static", express.static("uploads"));
app.use("/example", ExampleRoute);
app.use("/business", BusinessRoutes);
app.use("/contact", Contacuts);

// ------------------------------------------------------

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
