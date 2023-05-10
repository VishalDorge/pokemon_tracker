"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../user/user.service"));
const auth_responses_1 = require("./auth.responses");
const bcryptjs_1 = require("bcryptjs");
const passwordEncryption = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield (0, bcryptjs_1.genSalt)(10);
    const hashedPassword = yield (0, bcryptjs_1.hash)(credentials.password, salt);
    credentials.password = hashedPassword;
    return credentials;
});
const create = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    credentials = yield passwordEncryption(credentials);
    const result = user_service_1.default.create(credentials);
    return result;
});
const findOne = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    const result = user_service_1.default.findOne(u => u.email === credentials.email);
    const isPasswordMatched = yield (0, bcryptjs_1.compare)(credentials.password, result.password);
    if (!isPasswordMatched)
        throw auth_responses_1.AuthResponses.INVALID_PASSWORD;
    const { password } = result, userClone = __rest(result, ["password"]);
    return userClone;
});
exports.default = {
    create, findOne
};
