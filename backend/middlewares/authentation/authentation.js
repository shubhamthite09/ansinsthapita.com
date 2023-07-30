require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticator = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.secret,(err,decoded)=>{
            if(err){
                res.status(403).send({isError:true,Msg:"You are not authorized"});
            }else{
                console.log(decoded);
                req.body.userId = decoded.userId;
                req.body.email = decoded.email;
                req.body.name = decoded.name;
                req.body.role = decoded.role;
                next()
            }
        })
    }catch(err){
        res.status(500).send(err);
    }
};

module.exports = {
    authenticator
}