const multer = require("multer")

const fileStorage = multer.diskStorage({  //creating storage on disk like link folder
    destination: (req,file,cb)=>{
    cb(null, '../../assets/userProfiles')
},
filename:(req,file,cb)=>{
    cb(null, Date.now()+"-"+file.originalname)
}
})

const fileUpload = multer({storage:fileStorage})

module.exports = {
    fileUpload
}