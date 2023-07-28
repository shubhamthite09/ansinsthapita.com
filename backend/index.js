require("dotenv").config();
const express = require("express");
// const {userRouter} = require("./routes/userRouter")
const session = require('express-session');

const cors = require("cors");
const {connection} = require("./config/db")

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
    secret: process.env.expressSectionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 60 * 1000
    }
}));


//routes
// app.use("/user",userRouter);


app.get("/",(req,res)=>{
    res.status(201).send({isError:false,Msg:'welcome to server'})
})

const PORT = process.env.PORT || 7890
app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("connected to MongoDB");
    }catch(err){
        console.log(err);
    }
    console.log("listing to PORT",PORT);
})