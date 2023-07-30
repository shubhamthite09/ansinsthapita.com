const express = require('express');
const { registerNewUser,loginUser,uploadAvatar,getAvatar,changeAvatar,changePassword,updateUserDetails,verifyUser, googleAuth } = require("../controllers/userControllers/user");
const { passport } = require("../middlewares/googleAuth/googlePassport");
const {fileUpload} = require("../middlewares/avatar/avatarUpload");
const {authenticator} = require("../middlewares/authentation/authentation");
const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post("/register", registerNewUser);
userRouter.post("/login", loginUser);
userRouter.post("/uploadAvatar",fileUpload.single('image'), uploadAvatar);
userRouter.get("/getAvatar/:imageName", authenticator,getAvatar);
userRouter.patch("/changeAvatar/:id", authenticator,changeAvatar);
userRouter.patch("/changePassword", authenticator,changePassword);
userRouter.patch("/updateUserDetails/:id", authenticator,updateUserDetails);
userRouter.patch("/verifyUser", authenticator,verifyUser);
userRouter.get("/auth/google",passport.authenticate("google", { scope: ["profile", "email"] }));
userRouter.get("/auth/google/callback",passport.authenticate("google", {failureRedirect: "/login",session: false}), googleAuth);


module.exports={
    userRouter
}