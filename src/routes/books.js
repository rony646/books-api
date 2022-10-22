const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('I will list all the books')
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`I will get the book with id ${id}`)
});

router.post('/create', (req, res) => {
    res.send('I will create a new book');
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`I will delete the book with id: ${id}`);
});

module.exports = router;