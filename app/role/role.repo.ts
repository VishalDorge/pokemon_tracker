import { RoleSchema } from "./role.schema";
import { IRole } from "./role.types";

const create = (role: IRole) => RoleSchema.create(role);

export default{
    create   
}