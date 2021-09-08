import {cartTypes} from "../aciontypes";
import axios from 'axios';

export const fetchCart = (id)=> async (dispatch)=>{
    const response = await  axios.get(`http://localhost:4000/user/cart/${id}`);
    console.log(response.data.all_items)
    dispatch({type: cartTypes.GET_CART, payload: response.data.all_items.products})
};
export const fetchCartamount = (id)=> async (dispatch)=>{
    const response = await  axios.get(`http://localhost:4000/user/cart/${id}`);
    console.log(response.data.all_items)
    dispatch({type: cartTypes.GET_AMOUNT, payload: response.data.all_items})
};
