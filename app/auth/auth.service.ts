import userService from "../user/user.service";
import { IUser, UserPredicate } from "../user/user.types";
import { AuthResponses } from "./auth.responses";
import { ICredentials } from "./auth.types";
import { genSalt, hash, compare } from "bcryptjs";

const passwordEncryption = async (credentials: ICredentials) => {
    const salt = await genSalt(10);
    const hashedPassword = await hash(credentials.password, salt);
    credentials.password = hashedPassword;
    return credentials;
}

const create = async (credentials: ICredentials) => {
    credentials = await passwordEncryption(credentials);
    const result: Omit<IUser, "password"> = userService.create(credentials);
    return result;
}

const findOne = async (credentials: ICredentials) => {
    const result = userService.findOne(u => u.email === credentials.email);
    const isPasswordMatched = await compare(credentials.password, result.password);
    if(!isPasswordMatched) throw AuthResponses.INVALID_PASSWORD;
    const {password, ...userClone} = result;
    return userClone;
}

export default{
    create, findOne
}