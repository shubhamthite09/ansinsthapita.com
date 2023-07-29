require("dotenv").config();
const {userModel} = require("../../models/userModel/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const {sendEmail} = require("../../utils/Notifications/EmailSend");
const {welcomeEmailTemplate} = require("../../utils/EmailTempletes/welcomeEmail");
const { passwordChange } = require("../../utils/EmailTempletes/passwordChange");

const registerNewUser = async(req,res) =>{
    try{
        const isAlreadyRegistered = await userModel.findOne({email});
        if(!isAlreadyRegistered){
            req.body.password = await bcrypt.hash(req.body.password,process.env.hashingSolt);
            let newUser = new userModel(req.body);
            await newUser.save();
            let subject = "Welcome to ansinsthapita.com"
            //verification link pending
            let html  = welcomeEmailTemplate(req.body.name,"#");
            let temp = await sendEmail(req.body.email,subject,"",html);
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
        let subject = "Password Changed Successfully!"
        let html  = passwordChange(req.body.name,"#");
        let temp = await sendEmail(req.body.email,subject,"",html);
        res.status(201).send({isError: false,Msg:"Photo Updated successfully"});
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

const verifyUser = async(req, res) => {
    try{
        let {token} = req.query;
        const userInfo = await jwt.verify(token,process.env.jwtSecret);
        if(!userInfo){
            res.status(403).send("Email is not registered");
        }else{
            await userModel.findByIdAndUpdate({_id:userInfo.id},{isVerified:true});
            res.status(200).send("verify successfully you can close the tab");
        }
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

module.exports={
    registerNewUser,loginUser,uploadAvatar,getAvatar,changeAvatar,changePassword,updateUserDetails,verifyUser
}