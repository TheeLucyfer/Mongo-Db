const express = require("express");
const app = express();
const port = 8080;
const db = require("./models")
// const Workout = require("./models/workout.js");

require("./seeders/seed.js")

app.use(express.static("public", {extensions: ["html"]}))

app.use(require("./routes/api.js"));

app.listen(port, () => {
    console.log("server worky")
})