import { Router } from "express";
import { makeLoan, returnBook,  checkLoans} from "../controllers/loans.js";
import { checkAuth } from "../middlewares/authentication.js";

const router = Router();

router.post("/loans/check-out/:book_id", checkAuth, makeLoan);
router.post("/loans/return/:book_id", checkAuth, returnBook);
router.get("/loans", checkAuth, checkLoans);


export default router;