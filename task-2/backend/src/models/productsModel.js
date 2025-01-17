import mongoose from "mongoose";

const productsSchema=  new mongoose.Schema(
    {
        title: {type: String, required: true},
        category: { type: String, required: true },
        price: { type: Number, required: true },
          image: { type: String, required: true },
    },
    {collection: "Products", timestamps: true}
)

const product = mongoose.model("Products", productsSchema)

export default product