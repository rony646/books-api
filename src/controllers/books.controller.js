const { findAllBooks, findBookById, createBook } = require('../services/booksService');

const getAllBooks = (req, res, next) => {
    const booksList = findAllBooks();
    res.json(booksList);
};

const getBookById = (req, res, next) => {
   const id = req.params.id
   const book = findBookById(Number(id))
   if(book) {
    res.json(book)
   } else {
    res.json(
        {
            message: "Book not found",
        }
    )
   }
};

const postNewBook = (req, res, next) => {
    try {
        const { title, author, description } = req.body
        createBook(title, author, description)
        res.json({message: "created sucessfully"})
    } catch(err) {
        res.status = 500
        res.json({message: "Something went wrong"})
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    postNewBook,
};