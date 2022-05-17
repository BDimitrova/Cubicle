const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
        maxLength: 100
    },
    imageUrl: {
        type: String,
        require: true,
        // validate: /^https?:\/\//i
        validate: {
            validator: function(value) {
                return /^https?:\/\//i.test(value);

            },
            message: 'ImageUrl should be a valid URL'
        },
        difficulty: {
            type: Number,
            require: true,
            min: 1,
            max: 5
        }
    }
});

const Cube = mongoose.module('Cube', cubeSchema);

module.exports = Cube;