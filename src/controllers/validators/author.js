import { check } from "express-validator";
import { validationResult } from "express-validator";

export const validateCreateAuthor = [
    check("name").exists().isString(),
    check("biography").exists().isString(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }
        next();
    }
];


export const validateUpdateAuthor = [
    check("name").optional().isString().notEmpty(),
    check("biography").optional().isString().notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }
        next();
    }
];