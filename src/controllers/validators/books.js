import { check } from "express-validator";
import { validationResult } from "express-validator";

export const validateCreateBook = [ 
    check("title").exists().isString(),
    check("author_id").exists().isInt(),
    check("description").optional().isString().notEmpty(),
    check("publish_date").exists().isString().notEmpty(),
    check("isbn").exists().isString().notEmpty(),
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

export const validateUpdateBook = [
    check("title").optional().isString().notEmpty(),
    check("author_id").optional().isNumeric(),
    check("description").optional().isString().notEmpty(),
    check("publish_date").optional().isString().notEmpty(),
    check("isbn").optional().isString().notEmpty(),
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