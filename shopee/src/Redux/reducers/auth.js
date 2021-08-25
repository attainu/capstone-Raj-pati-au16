import {authtypes} from '../aciontypes';

const initialState = {
    userData : {},
    isAuth: !!localStorage.getItem('isAuth') ,
}
export const auth = (state , {type,payload})=>{
    state = state || initialState;

    switch (type) {
        case authtypes.LOG_IN:
            return {
                ...state ,
                isAuth :true,   
                userData : payload 
            };        
        case authtypes.LOG_OUT:
            localStorage.removeItem('isAuth')
            localStorage.removeItem('Token');
            return {
                ...state ,
                userData : {},
                isAuth: !!localStorage.getItem('isAuth')
            };
    
        default:
            return state;
    }

}