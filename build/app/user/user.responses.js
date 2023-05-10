"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponses = void 0;
exports.UserResponses = {
    INVALID_CREDENTIALS: {
        statusCode: 400,
        message: "User not found!"
    },
    ACCESS_DENIED: {
        statusCode: 400,
        message: "You're not an Admin!"
    }
};
