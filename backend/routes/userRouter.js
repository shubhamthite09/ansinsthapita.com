const express = require('express');
const { registerNewUser,loginUser,uploadAvatar,getAvatar,changeAvatar,changePassword,getOTP,resetPassword,updateUserDetails } = require("../controllers/userControllers");
const {fileUpload} = require("../../middlewares/avatar/avatarUpload");
const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post("/register", registerNewUser);
userRouter.post("/login", loginUser);
userRouter.post("/uploadAvatar",fileUpload.single('image'), uploadAvatar);
userRouter.get("/getAvatar/:imageName", getAvatar);
userRouter.patch("/changeAvatar/:id", changeAvatar);
userRouter.patch("/changePassword", changePassword);
userRouter.patch("/resetPassword", resetPassword);
userRouter.patch("/updateUserDetails/:id", updateUserDetails);
userRouter.post("/getOTP", getOTP);

module.exports={
    userRouter
}