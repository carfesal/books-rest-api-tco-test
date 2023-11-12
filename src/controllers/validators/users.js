import { check } from "express-validator";
import { validationResult } from "express-validator";

export const validateRegisterUser = [
    check("name").exists(),
    check("email").exists().isEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }
        next();
    }
]
