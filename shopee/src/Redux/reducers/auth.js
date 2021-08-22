import {authtypes} from '../aciontypes';

const initialState = []

const auth = (state , action)=>{
    state = state || initialState;

    switch (action.type) {
        case authtypes.loginBuyer:
            localStorage.setItem('isAuth' , true);
            return action.payload;
        case authtypes.logoutBuyer:
            localStorage.removeItem('isAuth');
            localStorage.removeItem('Token');
            return false;
    
        default:
            return state;
    }

}

export default auth;