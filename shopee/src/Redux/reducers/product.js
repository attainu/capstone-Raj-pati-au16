import { dataTypes } from "../aciontypes";

const initialState = [];

const products = (state, action) => {
    state = state || initialState;

    switch (action.type) {
    case dataTypes.product:
        return action.payload;

    default:
        return state;
    }
}

export default products;