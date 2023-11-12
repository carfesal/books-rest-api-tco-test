import { Author  } from "../models/author.js";
import { Book } from "../models/book.js";

export const createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body).then(author => {
            return res.json({
                data: author
            });
        }).catch(error => {
            return res.status(400).json({
                message: "There was an error while creating the author: " + error.message
            });
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

export const getAuthorBooksByAuthorId = async (req, res) => {
    try {
        const author = await Author.findAll({where: {id: req.params.id}, include: Book});
        res.json({
            data: author
        });
    } catch (error) {
        console.log(error);
    }
}