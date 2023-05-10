"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const create = (user) => user_schema_1.UserSchema.create(user);
const findOne = (callback) => user_schema_1.UserSchema.findOne(callback);
const add = (user) => user_schema_1.UserSchema.add(user);
const read = () => user_schema_1.UserSchema.read();
exports.default = {
    create, findOne, add, read
};
