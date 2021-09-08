import {productTypes} from '../aciontypes';

const initialState = {
    products:[],
}
const Initialstate = {
    Products:[],
}
export const productReducer = (state = initialState , {type,payload})=>{
    switch (type) {
        case productTypes.FETCH_PRODUCTS:
            return {...state , products : payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state={} , {type,payload})=>{
    switch (type) {
        case productTypes.SELECTED_PRODUCT:
            return {...state , ...payload}
        default:
            return state;
    }
}

export const product_category_Reducer = (state = Initialstate , {type,payload})=>{
    switch (type) {
        case productTypes.FETCH_CATEGORY_PRODUCTS:
            return {...state , Products : payload};
        default:
            return state;
    }
}
