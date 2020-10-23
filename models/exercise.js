const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },
  type: [
  {
    type: Schema.Types.ObjectId,
    trim: true,
    required: "Type is required"
  },
],
  weight: {
      type: String,
      trim: true,
      required: "Weight is required"
  },
  sets: {
    type: String,
    trim: true,
    required: "Weight is required"
  },
  reps: {
    type: String,
    trim: true,
    required: "Weight is required"
  },
  duration: {
    type: String,
    trim: true,
    required: "Weight is required"
  },
  isCardio: {
      type: Boolean,
      default: false
  }


});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;