import { IRole, Roles } from "./role.types";

export class RoleSchema{
    
    private static roles: Roles = [];
    
    static create(role: IRole){
        RoleSchema.roles.push(role);
        return role;
    }
}