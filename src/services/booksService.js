const fs = require('fs');

const booksDb = require('../db/books.json');

const booksList = booksDb;

const findAllBooks = () => {
    return booksList.data
};

const findBookById = (id) => {
    try {
      const book = booksList.data.find(book => book.id === id)
      return book
    } catch(err) {
        throw new Error(err)
    }
};

const createBook = (title, author, description) => {

    const allBooks = booksDb;

    const newBook = {
        id: Math.random(),
        title,
        author,
        description,
    }

    allBooks.data.push(newBook);
    const parsedJson = JSON.stringify(allBooks);

    fs.writeFile(`src/db/books.json`, parsedJson, (err) => {
        if(err) {
            throw new Error(err)
        }
    })
};

module.exports = {
    findAllBooks,
    findBookById,
    createBook,
};