import {productTypes} from '../aciontypes';
import axios from 'axios'


export const fetchProducts = () => async (dispatch)=>{
    const response = await  axios.get("http://localhost:4000/user/all_Products");
    console.log(response.data.get_allproduct)
    dispatch({type: productTypes.FETCH_PRODUCTS, payload: response.data.get_allproduct})
}


export const fetchProduct = (id) => async (dispatch)=>{
    const response = await  axios.get(`http://localhost:4000/user/Product/${id}`);
    console.log(response.data.get_productById)
    dispatch({type: productTypes.SELECTED_PRODUCT, payload: response.data.get_productById})
}

export const fetchCategory = (category)=> async (dispatch)=>{
    const response = await  axios.get(`http://localhost:4000/user/${category}`);
    console.log(response.data.get_allproduct)
    dispatch({type: productTypes.FETCH_CATEGORY_PRODUCTS, payload: response.data.get_allproduct})
}
