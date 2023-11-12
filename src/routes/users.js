import { Router } from "express";
import { registerUser, getUsers } from "../controllers/users.js";
import { validateRegisterUser } from "../controllers/validators/users.js";

const router = Router();

router.post("/users", validateRegisterUser, registerUser);
router.get("/users", getUsers);

export default router;