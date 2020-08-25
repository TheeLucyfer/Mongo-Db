const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then((workout) => {
            console.log(workout)
            res.json(workout)
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router;