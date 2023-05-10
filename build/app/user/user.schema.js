"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const uuid_1 = require("uuid");
class UserSchema {
    static create(user) {
        user.id = (0, uuid_1.v4)();
        UserSchema.users.push(user);
        return user;
    }
    static add(user) {
        const index = UserSchema.users.indexOf(user);
        UserSchema.users.splice(index, 1, user);
        return user;
    }
    static findOne(callback) {
        return UserSchema.users.find(callback);
    }
    static read() {
        return UserSchema.users;
    }
}
exports.UserSchema = UserSchema;
UserSchema.users = [];
