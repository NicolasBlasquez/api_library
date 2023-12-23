"use strict"

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/library");

const BookSchema = new mongoose.Schema({
    title: String,
    author: String
}, { collection: 'books' });

module.exports = mongoose.model('Book', BookSchema);
