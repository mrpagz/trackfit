const router = require("express").Router();
const Workout = require("../models/excercise");

router.get("/api/workouts", (req, res) => {
    
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id, 
        {
            $push: {
                exercises: req.body
            }
        }
    ).then(function(allWorkouts) {
        res.json(allWorkouts);
    }); 
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(function(allWorkouts) {
        res.json(allWorkouts);
    }); 
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
    .then(function(allWorkouts) {
        console.log(allWorkouts)
        res.json(allWorkouts);
    }); 
});

module.exports = router;