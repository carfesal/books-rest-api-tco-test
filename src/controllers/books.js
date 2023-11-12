import { Book } from "../models/book.js";

export const getBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json({
            data: books
        });
    } catch (error) {
        console.log(error);
    }
}

export const getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        res.json({
            data: book
        });
    } catch (error) {
        console.log(error);
    }
}

export const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json({
            data: book
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        await book.update(req.body);
        res.json({
            data: book
        });
    } catch (error) {
        console.log(error);
    }
}

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        await book.destroy();
        res.json({
            data: book
        });
    } catch (error) {
        console.log(error);
    }
}