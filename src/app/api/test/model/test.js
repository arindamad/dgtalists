import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:String,
    password:String,
    email:{
        type:"String",
        required:true,
        unique:true,
    },
    phone:String,
});

export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
