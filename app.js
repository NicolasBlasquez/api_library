"use strict"

const express = require('express');
const app = express();

app.use(express.json());

app.use('/books', require('./app/routes/books'));

app.use(require('./app/middleware/errorHandler'));

app.listen(3000, () => {
	console.log('Server started on port 3000');
});