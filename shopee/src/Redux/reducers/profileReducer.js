import { profileTypes } from "../aciontypes";


const initialState = {
    userdata :{}
}

export const profileReducer = (state  , {type,payload})=>{
    state = state || initialState
    switch (type) {
        case profileTypes.UPDATE_PROFILE:
            return {...state , userdata:payload}
        default:
            return state;
    }
};