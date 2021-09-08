import { checkoutTypes } from "../aciontypes";
import axios from 'axios';


export const checkout = (user_id,Amount)=> async (dispatch)=>{
    const response = await  axios.get(`http://localhost:4000/user/checkout/${user_id}/${Amount}`);
    console.log(response.data.add)
    dispatch({type: checkoutTypes.CHECKOUT_REQUEST, payload: response.data.add.addresses})
};


export const checkoutSuccess = (user_id,Amount)=> async (dispatch)=>{
    const response = await  axios.get(`http://localhost:4000/user/checkedout/Successful/${user_id}/${Amount}`);
    console.log(response.data.add)
    dispatch({type: checkoutTypes.CHECKOUT_SUCCESS, payload: response.data.success})
};