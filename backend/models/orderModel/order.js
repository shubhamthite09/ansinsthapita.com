const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userId:{type:String, required: true},
    products:[{
        id:{type: Number, required: true},
        quantity:{type: Number, required: true},
    }],
    deliveryStatus:{type: String,enum:["ordered","dispatched","Transit","delivered"],default:"ordered"},
    paymentType : {type: String,enum:["prepaid","cod"],default:"cod"},
})

const orderModel = mongoose.model('order',orderSchema);

module.exports= {
    orderModel
}