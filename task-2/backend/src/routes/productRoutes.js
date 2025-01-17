import express from "express"
import { addProduct, deleteProduct, getProducts } from "../controllers/productsController.js"

const productRouter= express.Router()

productRouter.post("/", addProduct)
productRouter.get("/", getProducts)
productRouter.delete("/:id", deleteProduct)

export default productRouter