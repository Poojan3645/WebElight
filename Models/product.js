const mongoose  = require('mongoose');
const categories = require('./category');

const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required:[true,'Please enter the Product Name'],
    },
    price:{
        type    : Number ,   //number is a datatype in javascript which can be used to store numbers like integers and floats
        required: true,
    },
    categoryId:{
        type: mongoose.Schema.ObjectId,
        ref: categories,
    },
    productColor: {
        type: String,
        required: true
    }
    });

    const Products = new mongoose.model("Product", productSchema);
    module.exports= Products;