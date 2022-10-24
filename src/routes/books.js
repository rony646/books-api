const express = require('express');
const { getAllBooks, getBookById, postNewBook } = require('../controllers/books.controller');

const router = express.Router();

router.get('/', getAllBooks);

router.get('/:id', getBookById);

router.post('/create', postNewBook);

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`I will delete the book with id: ${id}`);
});

module.exports = router;