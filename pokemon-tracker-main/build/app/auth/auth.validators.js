"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../utility/validate");
exports.validators = [
    (0, express_validator_1.body)("email").isEmail().withMessage("Invalid Email!"),
    (0, express_validator_1.body)("password").isNumeric().isLength({ min: 3 }).withMessage("Invalid Password"),
    validate_1.validate
];
