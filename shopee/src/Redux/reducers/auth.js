import {authtypes} from '../aciontypes';

const auth = (state , action)=>{
    state = state || !!localStorage.getItem('isAuth');

    switch (action.type) {
        case authtypes.login:
            localStorage.setItem('isAuth' , true);
            return true;
        case authtypes.logout:
            localStorage.removeItem('isAuth');
            localStorage.removeItem('Token');
            return false;
    
        default:
            return state;
    }

}

export default auth;