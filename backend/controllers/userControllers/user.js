require("dotenv").config();
const {userModel} = require("../../models/userModel/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerNewUser = async(req,res) =>{
    try{
        const {name,email,password} = req.body;
        const isAlreadyRegistered = await userModel.findOne({email});
        if(!isAlreadyRegistered){
            let hashedpassword = await bcrypt.hash(password,process.env.hashingSolt);
            let newUser = new userModel({name:name,email:email,password:hashedpassword});
            await newUser.save();
            res.status(201).send({isError: false,Msg:"User registered successfully"});
        }else{
            res.status(403).send({isError: true,Msg:"Email is already registered"});
        }
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

const loginUser = async(req,res)=> {
    try{
        const {email,password} = req.body;
        //console.log(email,password);
        const isAlreadyRegistered = await userModel.findOne({email});
        //console.log(isAlreadyRegistered);
        if(isAlreadyRegistered){
            const isPasswordCorrect = await bcrypt.compare(password, isAlreadyRegistered.password);
            //console.log(isPasswordCorrect);
            if(isPasswordCorrect){
                let token = jwt.sign({userId: isAlreadyRegistered._id},process.env.jwtSecret);
                res.status(201).send({isError: false,Msg:"User login successfully",Token: token,Name: isAlreadyRegistered.name});
            }else{
                res.status(403).send({isError: true,Msg:"Wrong credentials"});
            }
        }else{
            res.status(403).send({isError: true,Msg:"Email is not registered"});
        }
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}


module.exports={
    registerNewUser,loginUser
}