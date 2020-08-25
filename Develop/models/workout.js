const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let mySchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }]
})

module.exports = mongoose.model("Workout", mySchema)