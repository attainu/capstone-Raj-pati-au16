import {authtypes,dataTypes} from '../aciontypes'

export const authaction = {
    login: ()=>({type: authtypes.loginBuyer}),
    logout:()=>({type: authtypes.logoutBuyer})
};

export const listProduct = (payload) => ({ type: dataTypes.product, payload });
export const listCart = (payload) => ({ type: dataTypes.cart, payload });




export const getProduct = (category,id) => (dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(res=>{
        dispatch({ type: dataTypes.product, payload: res });
    });
}

export const getCart = (category,id) => (dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(res=>{
        dispatch({ type: dataTypes.product, payload: res });
    });
}






















































































































































































































