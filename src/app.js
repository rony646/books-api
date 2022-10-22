const express = require('express');
const app = express()

const bookRoutes = require('./routes/books');

const port = 3000

app.use(express.json());

app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.listen(port, () => {
    console.log(`Server is listening on: http://localhost:${port}`);
});
