"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_service_1 = __importDefault(require("./pokemon.service"));
const response_handler_1 = require("../utility/response.handler");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    try {
        const result = pokemon_service_1.default.findAll();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
router.patch("/select", (req, res, next) => {
    try {
        const credentials = req.body;
        const result = pokemon_service_1.default.add(credentials);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.default = router;
