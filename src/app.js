const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.URL_MONGOOSE);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  next();
});

require("./models/product");

const product = require("./routes/product-route");

app.use("/products", product);

module.exports = app;
