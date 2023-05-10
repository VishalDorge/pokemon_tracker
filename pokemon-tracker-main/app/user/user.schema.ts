import { IUser, Users, UserPredicate } from "./user.types";
import { v4 } from "uuid";

export class UserSchema{
    
    private static users: Users = [];

    static create(user: IUser){
        user.id = v4();
        UserSchema.users.push(user);
        return user;
    }

    static add(user: IUser){
        const index = UserSchema.users.indexOf(user);
        UserSchema.users.splice(index, 1, user);
        return user;
    }

    static findOne(callback: UserPredicate){
        return UserSchema.users.find(callback);
    }

    static read(){
        return UserSchema.users;
    }
}