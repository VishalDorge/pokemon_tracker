import roleRepo from "./role.repo";
import { IRole } from "./role.types";

const create = (role: IRole) => roleRepo.create(role);

export default{
    create
}