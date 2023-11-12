import { Router } from "express";
import { getAuthors, createAuthor, getAuthorBooksByAuthorId } from "../controllers/authors.js";
import { validateCreateAuthor, validateUpdateAuthor} from "../controllers/validators/author.js";
const router = Router();

router.get("/authors", getAuthors);
router.post("/authors", validateCreateAuthor, createAuthor);
router.get("/authors/:id/books", getAuthorBooksByAuthorId);


export default router;