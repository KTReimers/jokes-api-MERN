const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required"],
        minlength: [10, "setup must be more than 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minlength: [3, "The punchline must be more than 3 characters long"]
    }
}, {timestamp: true})

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;