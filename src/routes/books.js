import { Router } from "express";
import { getBooks, createBook, getBookById, updateBook, deleteBook } from "../controllers/books.js";
import { validateCreateBook, validateUpdateBook } from "../controllers/validators/books.js";

const router = Router();

router.get("/books", getBooks);
router.post("/books", validateCreateBook, createBook);
router.get("/books/:id", getBookById);
router.put("/books/:id", validateUpdateBook, updateBook);
router.delete("/books/:id", deleteBook);


export default router;