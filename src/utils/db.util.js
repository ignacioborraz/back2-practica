import { connect } from "mongoose";

async function dbConnect() {
    try {
        connect(process.env.MONGO_DB)
        console.log("mongo connected");
    } catch (error) {
        console.log(error.message);
    }
}

export default dbConnect