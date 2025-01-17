    import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
    import axios from "axios"


    const baseURL= "http://localhost:5000/api/products"

    export const getProducts =  createAsyncThunk("products/getProducts", async ()=>{
        const response = await axios.get(baseURL)
        console.log(response)

        return response.data
    })
    
    export const addProduct = createAsyncThunk(
        "product/addProduct",
        async (product) => {
            const { data } = await axios.post(baseURL, product)
            return data;
    
        }
    )
    const initialState= {
       products: []
      }
      
     const productSlice = createSlice({
        name: 'products',
        initialState,
        reducers: {
          
        },
        extraReducers: (builder)=>{
            builder.addCase(getProducts.fulfilled, (state, action)=>{
                state.products= action.payload
            })
        }
      })

      export default productSlice.reducer