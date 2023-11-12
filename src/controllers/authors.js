import { Author  } from "../models/author.js";

export const createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.json({
            data: author
        });
    } catch (error) {
        console.log(error);
    }
}

export const getAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.json({
            data: authors
        });
    } catch (error) {
        console.log(error);
    }
}

export const getAuthorById = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id);
        res.json({
            data: author
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateAuthor = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id);
        await author.update(req.body);
        res.json({
            data: author
        });
    } catch (error) {
        console.log(error);
    }
}

export const deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id);
        await author.destroy();
        res.json({
            data: author
        });
    } catch (error) {
        console.log(error);
    }
}