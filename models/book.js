const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    summary: String,
    isbn: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Author'},
    bookings: {type: mongoose.Schema.Types.ObjectId, ref: 'Bookings'}
})

const bookingSchema = mongoose.Schema({
    startDate: Date,
    endDate: Date,

})

const Book = new mongoose.model('Books', bookSchema);
const Booking = new mongoose.model('Bookings', bookingSchema);
module.exports = Book;