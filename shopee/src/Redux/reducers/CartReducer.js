import {cartTypes} from '../aciontypes';

const initialState = {
    cartData :[]
}
const InitialState = {
    cartAmount :[]
}
export const CartReducer = (state = initialState , {type,payload})=>{
    switch (type) {
        case cartTypes.GET_CART:
            return {...state, cartData:payload };        
        default:
            return state;
    }
};

export const CartAmountReducer = (state = InitialState , {type,payload})=>{
    switch (type) {
        case cartTypes.GET_AMOUNT:
            return {...state, cartAmount:payload };        
        default:
            return state;
    }
};
