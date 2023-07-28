const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:{type:String, required: true},
    createdBy:{type: String, required: true},
    discretion:{type: String, required: true},
    discount:{type: Number, required: false},
    price_strike:{type: Number, required: false},
    price:{type: Number, required: false},
    rating:{type: Number, required: false},
    warranty:{type: Number, required: false},
    ranking:{type: Number, required: false},
    sellerName:{type: String,required: false},
    reviews:[{
        userId:{type: String, required: true},
        userName:{type: String, required: true},
        review:{type: String, required: true},
    }],
    images:[String],
})

const productModel = mongoose.model('product',productSchema);

module.exports= {
    productModel
}