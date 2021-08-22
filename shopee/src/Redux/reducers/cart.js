import { dataTypes } from "../aciontypes";

const initialState = [];

const carts = (state, action) => {
    state = state || initialState;

    switch (action.type) {
    case dataTypes.cart:
        return action.payload;

    default:
        return state;
    }
}

export default carts;