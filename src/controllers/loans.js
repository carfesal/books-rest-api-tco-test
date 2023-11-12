import { Loan } from "../models/loan.js";
import { Book } from "../models/book.js";

export const makeLoan = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.book_id);

        if (book.available_amount <= 0) {
            return res.status(400).json({
                message: "There are no available copies of this book."
            });
        }

        const loan = await Loan.create({book_id: req.params.book_id, user_id: req.params.user_id});
        res.json({
            data: loan
        });
    } catch (error) {
        console.log(error);
    }
}

export const returnBook = async (req, res) => {
    try {
        const loan = await Loan.findOne({where: {book_id: req.params.book_id, user_id: req.params.user_id}});
        
        if (!loan) {
            return res.status(400).json({
                message: "The user has not borrowed this book."
            });
        }

        res.json({
            data: loan
        });
    } catch (error) {
        console.log(error);
    }
}

export const checkLoans = async (req, res) => {
    try {
        const loans = await Loan.findAll({where: {user_id: req.params.user_id}});
        res.json({
            data: loans
        });
    } catch (error) {
        console.log(error);
    }
}