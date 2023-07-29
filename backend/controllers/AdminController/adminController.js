
const { productModel } = require("../../models/productModel/product");


// get all the products but in the manner of higher rating to lower rating
const getbyRanking = async (req, res) => {
    try {
        const getProduct = await productModel.find().sort({ ranking: -1 })
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

// serach product 

const searchProduct = async (req, res) => {
    try {
        const productTitle = req.query.title
        regExTitle = new RegExp(productTitle, i)
        const searchedProduct = await productModel.find({ title: regExTitle }).sort({ ranking: -1 })
        if (searchedProduct.length === 0) {
            return res.status(400).json({ error: "no product found" })
        }
        res.send(searchedProduct)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}


// get a product to update it's field
const getAProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const product = await productModel.findById({ _id: productId })
        if (product) {
            return res.status(400).json({ error: "could not  get a product with that id" })
        }
        res.send(product)
    } catch (error) {
        return res.status(500).json({ error: "internal server error" })
    }
}

// update a product 
const updateAProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const productData = req.body
        const product = await productModel.findByIdAndUpdate({ _id: productId }, productData)
        res.status(500).json({ msg: "product updated successfully" })

    } catch (error) {
        return res.status(500).json({ error: "internal server error" })
    }
}


// delete a product 
const deleteAProduct = async (req, res) => {
    try {
        const productId= req.params.id
        const product= await productModel.findByIdAndDelete({_id:productId})
        res.status(500).json({ msg: "product deleted successfully" })

    } catch (error) {
        return res.status(500).json({ error: "internal server error" })
    }
}

//(sort by name, sort by ranking , sort by price(sort and filter together))
const sortAndFilter=async(req,res)=>{
 try {
    let sortQuery = {};
     // Sorting by price
     const sortPrice= req.query.priceSort
     if (sortPrice) {
        sortQuery.price = sortPrice === 'asc' ? 1 : -1;
      }
     // Sorting by ranking
     const sortRanking= req.query.sortRanking
     if (sortRanking) {
        sortQuery.ranking = sortRanking === 'asc' ? 1 : -1;
      }

        // Sorting by name
        const sortName= req.query.sortName
    if (sortName) {
        sortQuery.title = sortName === 'asc' ? 1 : -1;
      }

      const product= await productModel.find().sort(sortQuery)
      res.status(500).send(product)
 } catch (error) {
    return res.status(500).json({ error: "internal server error" })
 }
}



module.exports = { getbyRanking, 
    searchProduct, 
    getAProduct,
     updateAProduct,
      deleteAProduct,
      sortAndFilter,
     }
