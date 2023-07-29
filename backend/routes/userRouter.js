const express = require('express');
const { registerNewUser,loginUser,uploadAvatar,getAvatar,changeAvatar,changePassword,updateUserDetails,verifyUser, googleAuth } = require("../controllers/userControllers/user");
const { passport } = require("../config/google.auth");
const {fileUpload} = require("../middlewares/avatar/avatarUpload");
const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post("/register", registerNewUser);
userRouter.post("/login", loginUser);
userRouter.post("/uploadAvatar",fileUpload.single('image'), uploadAvatar);
userRouter.get("/getAvatar/:imageName", getAvatar);
userRouter.patch("/changeAvatar/:id", changeAvatar);
userRouter.patch("/changePassword", changePassword);
userRouter.patch("/updateUserDetails/:id", updateUserDetails);
userRouter.patch("/verifyUser", verifyUser);
userRouter.get("/auth/google",passport.authenticate("google", { scope: ["profile", "email"] }));
userRouter.get("/auth/google/callback",passport.authenticate("google", {failureRedirect: "/login",session: false}), googleAuth);


module.exports={
    userRouter
}