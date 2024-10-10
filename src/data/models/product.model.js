import { Schema, model } from "mongoose";

const collection = "products";

const schema = new Schema({ 
    title: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 10},
    image_url: { type: String, default: "" }
});

const Product = model(collection, schema);

export default Product;

