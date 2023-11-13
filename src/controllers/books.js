import { Book } from "../models/book.js";
import { Author } from "../models/author.js";

export const getBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        console.log(error);
    }
}

export const getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        res.json(book);
    } catch (error) {
        console.log(error);
    }
}

export const createBook = async (req, res) => {
    try {
        const author = await Author.findByPk(req.body.author_id);

        if (!author) {
            return res.status(400).json({
                message: "Author does not exist."
            });
        }
        
        const book = await Book.create(req.body).then(book => {
            return res.json(book);
        }).catch(error => {
            return res.status(400).json({
                message: "There was an error while creating the book: " + error.message
            });
        });
        
    } catch (error) {
        console.log(error);
    }
}

export const updateBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        await book.update(req.body);
        res.json(book);
    } catch (error) {
        console.log(error);
    }
}

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        await book.destroy();
        res.json(book);
    } catch (error) {
        console.log(error);
    }
}