import { Router } from "express";

const router = Router();

router.post("/loans/check-out/:book_id");
router.post("/loans/return/:book_id");
router.get("/loans/:user_id");


export default router;