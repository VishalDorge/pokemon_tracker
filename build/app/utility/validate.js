"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (req, res, next) => {
    const validResult = (0, express_validator_1.validationResult)(req);
    if (!validResult.isEmpty()) {
        return next({ statusCode: 400, errors: validResult.array() });
    }
    next();
};
exports.validate = validate;
