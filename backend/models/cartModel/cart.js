const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId:{type:String, required: true},
    products:[{
        id:{type: Number, required: true},
        quantity:{type: Number, required: true},
    }],
    
})

const cartModel = mongoose.model('cart',cartSchema);

module.exports= {
    cartModel
}