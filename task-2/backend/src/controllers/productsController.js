import product from "../models/productsModel.js"

export const addProduct= async (req,res)=>{
    try {
        const newProduct =  new product (req.body)

        await newProduct.save()

        return res.status(201).json({ success: true, message: "Added product"  })
    } catch (error) {
        return res.status(500).json({success: false, message: "Error added"})
    }
}

export const getProducts= async (req,res)=>{
    try {
        const products = await product.find()
        res.status(200).send(products)


    } catch (error) {
        return res.status(500).json({success: false, message: "Error getAll"})
    }
}


export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleteProduct = await product.findByIdAndDelete(id);
      if (!deleteProduct) {
        return res
          .status(404)
          .json({ success: false, message: "Product not deleted..." });
      } else {
        return res
          .status(200)
          .json({ success: true, message: "Product deleted successfully" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  };
  