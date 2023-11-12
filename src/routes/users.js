import { Router } from "express";

const router = Router();

router.get("/users");
router.post("/users/register");

export default router;