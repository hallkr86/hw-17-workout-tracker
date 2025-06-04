require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const logger = require("morgan");


const PORT = process.env.PORT || 3000;

const workoutsController = require("./controllers/workoutsController");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(workoutsController);
app.use(logger("dev"));

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout-tracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});






app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
