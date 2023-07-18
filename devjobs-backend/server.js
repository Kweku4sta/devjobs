const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const devjobsRouter = require("./route-devjobs");

app.use(cors());
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB cluster");
  app.listen(process.env.PORT, () => {
    console.log("we are listening to the port number ", process.env.PORT);
  });
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB cluster");
});
app.use(cors);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.static(path.join(__dirname, "starter-code")));
app.use(express.json());
app.get("/products", function (req, res, next) {
  res.json({
    msg: "This is CORS-enabled for all origins, using the localhost! and everything",
  });
});
app.use("/api/", devjobsRouter);
