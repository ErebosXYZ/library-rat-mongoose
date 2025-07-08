const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    firstName: String,
    familyName: String,
    dateBirth: Date,
    dateDeath: Date
})

const Author = new mongoose.model('Author', authorSchema);
module.exports = Author;