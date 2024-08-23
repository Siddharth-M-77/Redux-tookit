import axios from "axios";
import { getProducts } from "../Reducers/ProductReducer";


//here we use HOF means High Order Fucntion to get two method {dispatch,getState}


export const aysncgetProducts =()=> async (dispatch,getState) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(response.data);

//dispatch is basicaly use for call getProducts funtion and send data


  //here getProducts is a action so call a action we need dispatch


    dispatch(getProducts(response.data))
  } catch (error) {
    console.log(error);
  }
};
