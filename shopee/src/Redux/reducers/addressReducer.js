import { addressTypes } from "../aciontypes";

const initialState = {
    Data:[]
}
export const addressReducer = (state = initialState , {type,payload})=>{
    switch (type) {
        case addressTypes.ADD_ADDRESS:
            return {...state,Data:payload };        
        default:
            return state;
    }
};