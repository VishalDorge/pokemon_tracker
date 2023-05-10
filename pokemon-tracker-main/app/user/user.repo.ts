import { UserSchema } from "./user.schema";
import { IUser, UserPredicate } from "./user.types";

const create = (user: IUser) => UserSchema.create(user);
const findOne = (callback: UserPredicate) => UserSchema.findOne(callback);
const add = (user: IUser) => UserSchema.add(user);
const read = () => UserSchema.read();

export default{
    create, findOne, add, read
}