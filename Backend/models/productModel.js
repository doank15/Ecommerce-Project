const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name!"], 
        trim: true,
    },
    description: {  
        type: String, 
        required: [true, "Please Enter Product Description! "]
    },
    price : { 
        type: Number, 
        required: [true, "Please Enter Product Price!"],
        maxLength: [8, "Price cannot exeed 8 characters!"]
    },
    images: [
        {
            public_id:  {
                type: String, 
                required: true
            },
            url : {
                type: String, 
                required: true
            }
        }
    ], 
    rating : {
        type: Number, 
        default: 0
    },
    category: {
        type: String, 
        required: [true, "Please Enter Product Category!"]
    },
    stock : { 
        type: Number, 
        required: [true, "Please Enter Product Stock!"],
        default: 1,
        maxLength: [4, "Stock cannot exceed 4 characters"]
    },
    reviews: [
        {
            name : {
            type: String, 
            required: true
            },
            rating: {
                type: Number, 
                required: true
            }, 
            comment: {
                type: String, 
                required: true
            } 
        }
    ],
    numberOfReviews: {
        type: Number, 
        default: 0
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model("Product", productSchema);