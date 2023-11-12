import { Loan } from "../models/loan.js";
import { Book } from "../models/book.js";
import { User } from "../models/user.js";

export const makeLoan = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.book_id);
        const authUser = await User.findOne({where: {email: req.headers.authorization}});
        const loanExists = await Loan.findOne({where: {book_id: req.params.book_id, user_id: authUser.id}});
        
        if (!book) {
            return res.status(400).json({
                message: "Book does not exist."
            });
        }

        if (book.available_amount <= 0) {
            return res.status(400).json({
                message: "There are no available copies of this book."
            });
        }

        if (loanExists) {
            return res.status(400).json({
                message: "The user has already borrowed this book."
            });
        }

        const loan = await Loan.create({book_id: req.params.book_id, user_id: authUser.id});
        const updatedBook = await book.update({available_amount: book.available_amount - 1});

        res.json({
            data: loan
        });
    } catch (error) {
        console.log(error);
    }
}

export const returnBook = async (req, res) => {
    try {
        const authUser = await User.findOne({where: {email: req.headers.authorization}});
        const loan = await Loan.findOne({where: {book_id: req.params.book_id, user_id: authUser.id}});        

        if (!loan) {
            return res.status(400).json({
                message: "The user has not borrowed this book."
            });
        }

        const returnedLoan = await loan.update({available_amount: loan.available_amount + 1});
        
        res.json({
            data: loan
        });
    } catch (error) {
        console.log(error);
    }
}

export const checkLoans = async (req, res) => {
    try {
        const authUser = await User.findOne({where: {email: req.headers.authorization}});
        const loans = await Loan.findAll({where: {user_id: authUser.id}});

        res.json({
            data: loans
        });
    } catch (error) {
        console.log(error);
    }
}