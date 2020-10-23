const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({


    day:    {
            type: Date,
            default: Date.now
        },

    exercises: [ 
        {
        type: {
            type: String,
            trim: true,
            required: "Type is required"
        },
        name: {
            type: String,
            trim: true,
            required: "Name is required"
        },
        duration: {
            type: Number,
            required: "Duration is required"
        },
        weight: {
            type: Number,
            required: "Weight is required"
        },
        reps: {
            type: Number,
            required: "Reps are required"
        },
        sets: {
            type: Number,
            required: "Sets are required"
        },
        distance: {
            type: Number,
            required: "Distance is required"
        }
        }
    ],

    toJSON:{
        virtuals: true,
    }

    WorkoutSchema.vitual("totalDuration").get(function) {
        return this.exercises.reduce((tatal, current) => {
            total + current.duration, 0;
        });
    });

    WorkoutSchema.virtual("totalDuration").get(function () {
        return this.exercises.reduce((total, current) => {
          total + current.duration, 0;
        });
      });

    // isCardio: {
    //     type: Boolean,
    //     default: false
    //     },
    // isResistance: {
    //     type: Boolean,
    //     default: true
    //     }
});
  




const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;