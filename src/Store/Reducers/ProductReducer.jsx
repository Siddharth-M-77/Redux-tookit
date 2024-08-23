import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[]
}

export const ProductSlice = createSlice({
    name:"Product",
    initialState,
    reducers:{
    
        getProducts:(state,action)=>{
            state.products=action.payload
        }
    }
})

export default ProductSlice.reducer;
export const {getProducts} = ProductSlice.actions;
