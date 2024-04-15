const mongoose = require('mongoose');

// Define a schema for the movie collection
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    tickets: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

// Create a model based on the schema
module.exports = mongoose.model('movies', movieSchema);


