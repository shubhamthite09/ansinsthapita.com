require("dotenv").config();
const {userModel} = require("../../models/userModel/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");

const registerNewUser = async(req,res) =>{
    try{
        const isAlreadyRegistered = await userModel.findOne({email});
        if(!isAlreadyRegistered){
            req.body.password = await bcrypt.hash(req.body.password,process.env.hashingSolt);
            let newUser = new userModel(req.body);
            await newUser.save();
            res.status(201).send({isError: false,Msg:"User registered successfully"});
        }else{
            res.status(403).send({isError: true,Msg:"Email is already registered"});
        }
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

const updateUserDetails = async(req,res)=>{
    try{
        const {id} = req.params;
        await userModel.findByIdAndUpdate({_id:id},req.body);
        res.status(201).send({isError: false,Msg:"Details Updated Successfully"});
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

const loginUser = async(req,res)=> {
    try{
        const {email,password} = req.body;
        const isAlreadyRegistered = await userModel.findOne({email});
        if(isAlreadyRegistered){
            const isPasswordCorrect = await bcrypt.compare(password, isAlreadyRegistered.password);
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

const uploadAvatar = async(req,res) =>{
    res.status(201).send({isError:false,Msa:`${req.file.path}`});
}

const getAvatar = async(req,res) =>{
    const imageName = req.params.imageName;
    const imagePath = path.resolve(__dirname, '..', 'userProfiles', imageName);

    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404).send({isError: true,Msg:"Photo is not available"});
        }
        const readStream = fs.createReadStream(imagePath);
        res.setHeader('Content-Type', 'image/jpeg');
        readStream.pipe(res);
    });
}

const changeAvatar = async(req, res) => {
    try{
        const {url} = req.body;
        const {id} = req.params;
        await userModel.findByIdAndUpdate({_id:id},{avatar: url});
        res.status(201).send({isError: false,Msg:"Photo Updated successfully"});
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

const changePassword = async(req, res) => {
    try{
        let {password} = req.body;
        let hashedpassword = await bcrypt.hash(password,process.env.hashingSolt);
        const {id} = req.params;
        await userModel.findByIdAndUpdate({_id:id},{password: hashedpassword});
        res.status(201).send({isError: false,Msg:"Photo Updated successfully"});
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

const getOTP = async(req, res) => {
    try{
        let {email} = req.body;
        const isAlreadyRegistered = await userModel.findOne({email});
        if(isAlreadyRegistered){
            const userOTP = await generateOTP();
            req.session.otp = userOTP;
            req.session.user = isAlreadyRegistered.email;
            //email send here;
            res.status(201).send({isError: false,Msg:`OTP send to your email`});
        }else{
            res.status(403).send({isError: true,Msg:"Email is not registered"});
        }
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

const resetPassword = async(req,res)=>{
    try{
        let {password,email,otp} = req.body;
        if(req.session.user == email && req.session.otp == otp){
            let hashedpassword = await bcrypt.hash(password,process.env.hashingSolt);
            const {id} = req.params;
            await userModel.findByIdAndUpdate({_id:id},{password: hashedpassword});
            res.status(201).send({isError: false,Msg:"Photo Updated successfully"});
        }else{
            res.status(404).send({isError: true,Msg:"OTP is wrong"});
        }
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

module.exports={
    registerNewUser,loginUser,uploadAvatar,getAvatar,changeAvatar,changePassword,getOTP,resetPassword,updateUserDetails
}