"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSchema = void 0;
class RoleSchema {
    static create(role) {
        RoleSchema.roles.push(role);
        return role;
    }
}
exports.RoleSchema = RoleSchema;
RoleSchema.roles = [];
