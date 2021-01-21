const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/jokes_db', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(() => console.log('database connection made'))
    .catch(err => console.log('Something went wrong while trying to connect to the database', err));
