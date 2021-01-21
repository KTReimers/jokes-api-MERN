
const JokesController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.post("/api/jokes/new", JokesController.createJoke);
    app.get("/api/jokes/:_id", JokesController.findOne);
    app.delete("/api/jokes/delete/:_id", JokesController.deleteJoke);
    app.put("/api/jokes/:_id", JokesController.updateJoke)
}