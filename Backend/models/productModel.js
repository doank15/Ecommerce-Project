const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please Enter Product Name!"], 
        trim: true,
    },
    description: {  
        type: String, 
        require: [true, "Please Enter Product Description! "]
    },
    price : { 
        type: Number, 
        require: [true, "Please Enter Product Price!"],
        maxLength: [8, "Price cannot exeed 8 characters!"]
    },
    images: [
        {
            public_id:  {
                type: String, 
                require: true
            },
            url : {
                type: String, 
                require: true
            }
        }
    ], 
    rating : {
        type: Number, 
        default: 0
    },
    category: {
        type: String, 
        require: [true, "Please Enter Product Category!"]
    },
    stock : { 
        type: Number, 
        require: [true, "Please Enter Product Stock!"],
        default: 1,
        maxLength: [4, "Stock cannot exceed 4 characters"]
    },
    reviews: [
        {
            name : {
            type: String, 
            require: true
            },
            rating: {
                type: Number, 
                require: true
            }, 
            comment: {
                type: String, 
                require: true
            } 
        }
    ],
    numberOfReviews: {
        type: Number, 
        default: 0
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now,
    }
})

module.exports = mongoose.model("Product", productSchema);