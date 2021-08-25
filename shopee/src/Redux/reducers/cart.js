import {cartTypes} from '../aciontypes';

const initialState =[]
export const Cart = (state , {type,payload})=>{
    state = state || initialState;

    switch (type) {
        case cartTypes.GET_CART:
            return [...state,payload ];        
        default:
            return state;
    }
}