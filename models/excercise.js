const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Type of workout is required."
            },
            name: {
                type: String,
                trim: true,
                required: "Name is required."
            },
            duration: {
                type: Number,
                required: "Duration of workout is required."
            },
            weight: {
                type: Number,
                required: "Weight is required."
            },
            reps: {
                type: Number,
                required: "Number of reps is required."
            },
            sets: {
                type: Number,
                required: "Number of sets is required."
            },
            distance: {
                type: Number,
                required: "Distance is required."
            }
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        }
    },
);

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => { return total + exercise.duration;}, 0)
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;