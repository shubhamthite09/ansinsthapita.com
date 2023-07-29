const express = require('express');
const adminRouter= express.Router()
adminRouter.use(express.json())
const {authenticator} = require("../middlewares/authentation/authentation");

const {getbyRanking,
    searchProduct,
    getAProduct,
    updateAProduct,
    deleteAProduct,
    sortAndFilter,
    
}= require("../controllers/AdminController/adminController")

// all routes of admin 
// get product by rating descending order
adminRouter.get("/productByRanking",authenticator,getbyRanking)

//get product as searched by title 
adminRouter.get("/searchByTitle",authenticator,searchProduct)

// get a particular product 
adminRouter.get("/getAProduct/:id",authenticator,getAProduct)

// update a product
adminRouter.patch("/updateProduct/:id",authenticator,updateAProduct)

// delete a product
adminRouter.delete("/deleteAProduct/:id",authenticator,deleteAProduct)

// sort and filter together(sort by price, by name, by rating)
adminRouter.get("/sortAndFilter",authenticator,sortAndFilter);


module.exports= {adminRouter}

