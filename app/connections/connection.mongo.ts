import { connect } from "mongoose"

export const connectToMongo = async () => {
    try {
        const { mongo_connection } = process.env;
        await connect(mongo_connection || "");
        return true;
    } catch (e) {
        throw "MONGO CONNECTION FAILED!!!";
    }
}