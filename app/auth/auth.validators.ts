import { body } from "express-validator"
import { validate } from "../utility/validate"

export const validators = [
    body("email").isEmail().withMessage("Invalid Email!"),
    body("password").isNumeric().isLength({min: 3}).withMessage("Invalid Password"),
    validate
]