const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const landingRouter = require('./routes/landingRouter')
app.use((req, res, next) => {
  req.requestTime = new Date().toString();
  console.log(req.requestTime);
  next();
});

app.use(morgan("dev")); 
app.use(express.json()); //Enables req reading

app.use(express.static(path.join(__dirname, "public")));

app.use("/withus/api/v1/landing", landingRouter)

module.exports = app;
