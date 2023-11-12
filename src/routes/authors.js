import { Router } from "express";
import { getAuthors, createAuthor, getAuthorById, updateAuthor, deleteAuthor } from "../controllers/authors.js";
import { validateCreateAuthor, validateUpdateAuthor } from "../controllers/validators/author.js";
const router = Router();

router.get("/authors", getAuthors);
router.post("/authors", validateCreateAuthor, createAuthor);
router.get("/authors/:id", getAuthorById);
router.put("/authors/:id", validateUpdateAuthor, updateAuthor);
router.delete("/authors/:id", deleteAuthor);


export default router;