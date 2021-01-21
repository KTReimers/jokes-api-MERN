const Jokes = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "oops! Something went wrong!", error: err}))
}

module.exports.findOne = (req, res) => {
    Jokes.find({_id: req.params._id})
        .then(oneJoke => res.json({oneJoke: oneJoke}))
        .catch(err => res.json({message: "Error occured while retreiving a joke", error: err}))
}


module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newJoke => res.json({newJoke: newJoke}))
        .catch(err => res.json({message: "error occured when creating a joke", error: err}))
}

module.exports.deleteJoke = (req, res) => {
    Jokes.remove({_id: req.params._id})
        .then(res.json({message: "Joke was deleted"}))
        .catch(err => res.json({message: "error occured when deleting a Joke"}))
}

module.exports.updateJoke = (req, res) => {
    Jokes.updateOne({_id: req.params._id}, {
        $set: {
            setup: req.body.setup,
            punchline: req.body.punchline
        }
    }, {runValidators: true})
        .then(updateJoke => res.json({updateJoke: updateJoke}))
        .catch(err => res.json({message: "error occured when updating a joke", error: err}))
}