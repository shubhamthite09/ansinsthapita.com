const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    mobile:{type: Number, required: false},
    role:{type: String,enum:["admin","seller","user"],default:"user"},
    address:[{
        street:{type: Number, required: true},
        city:{type: String, required: true},
        state:{type: String, required: true},
        pin:{type: Number, required: true},
        mobile:{type: Number, required: true},
    }],
    avatar:{type: String, required: true},
})

const userModel = mongoose.model('user',userSchema);

module.exports= {
    userModel
}