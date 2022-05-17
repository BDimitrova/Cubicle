const mongoose = require('mongoose');

function initDB(url) {
    return mongoose.connect(url);
}

module.exports = initDB;