import { Schema, model } from "mongoose";

const collection = "users";

const schema = new Schema({
    email: { type: String, required: true, unique: true, index: true },
    age: { type: Number, default: 18 },
    password: { type: String, required: true },
    image_url: { type: String, default: "" }
});

const User = model(collection, schema);

export default User;