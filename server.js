const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./models");
// const logger = require("morgan");
// const path = require("path");

const PORT = process.env.PORT || 3000;

// //const ingredientsController = require("./controllers/ingredientsController");
// //const pizzaController = require("./controllers/pizzaController")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app use logger
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

app.get("/api/workout", (req, res) => {
    db.Workout.find({})
      .then((foundWorkout) => {
        res.json(foundWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Failed to retrieve exercises.",
        });
      });
  });

  app.post("/api/workout", (req, res) => {
    db.Workout.create(req.body)
      .then((newWorkout) => {
        res.json(newWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Failed to create new exercise.",
        });
      });
  });

// //app.use(ingredientsController);
// //app.use(pizzaController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
