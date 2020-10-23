const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");



router.get("/exercise", (req, res) => {
 res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
 });

 router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
 });

// router.get("/", (req, res) => {
//   db.Workout.find({})
//     .then((foundWorkouts) => {
//       res.json(foundWorkouts);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json({
//         error: true,
//         data: null,
//         message: "Failed to retrieve exercises.",
//       });
//     });
// });

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((foundWorkouts) => {
        res.json(foundWorkouts);
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

  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((foundRange) => {
        res.json(foundRange);
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

  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, req.body, {new:true})
       .then((updatedWorkout) => {
        res.json(updatedWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Failed to update exercise.",
        });
      });
  });

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((newWorkouts) => {
        res.json(newWorkouts);
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

  router.delete("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndDelete(req.params.id)
      .then((deletedItem) => {
        res.json(deletedItem);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Failed to delete exercise.",
        });
      });
  });

  

module.exports = router;