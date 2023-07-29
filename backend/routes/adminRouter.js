const express = require('express');
const adminRouter= express.Router()
adminRouter.use(express.json())

const {getbyRanking,
    searchProduct,
    getAProduct,
    updateAProduct,
    deleteAProduct,
    sortAndFilter,
    
}= require("../controllers/AdminController/adminController")

// all routes of admin 
// get product by rating descending order
adminRouter.get("/productByRanking",getbyRanking)

//get product as searched by title 
adminRouter.get("/searchByTitle",searchProduct)

// get a particular product 
adminRouter.get("/getAProduct/:id",getAProduct)

// update a product
adminRouter.patch("/updateProduct/:id",updateAProduct)

// delete a product
adminRouter.delete("/deleteAProduct/:id",deleteAProduct)

// sort and filter together(sort by price, by name, by rating)
adminRouter.get("/sortAndFilter",sortAndFilter)








module.exports= {adminRouter}

