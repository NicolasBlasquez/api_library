"use strict"

const express = require("express");
const booksRouter = express.Router();

const Book = require("../models/book");

booksRouter.get("/", (req, res, next) => {
    Book.find().then((libros) => res.json(libros)).catch((e) => next(e));
});

booksRouter.post("/", (req, res, next) => {
    const newBook = new Book(req.body);
    newBook.save().then((nb) => res.json(nb)).catch((e) => next(e));
});

booksRouter.put("/:id", (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true, }).then((book) => res.json(book)).catch((e) => next(e));
});
booksRouter.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id).then((book) => res.json(book));
});

module.exports = booksRouter;