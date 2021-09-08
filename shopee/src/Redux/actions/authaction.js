import {authtypes} from '../aciontypes';
import { setAuth } from "../../utils/index";
import axios from 'axios';

// const authaction = {
//     login: ()=>({type: authtypes.login}),
//     logout:()=>({type: authtypes.logout})
// };

// export default authaction;

export const login = ({email,password},route ) => async (dispatch)=>{

    await axios.post(`http://localhost:4000/user/${route}`,{
      email,
      password
    })
        .then((resp) => {
          console.log("response", resp.data);
          if (!!resp.data.token) {
            setAuth(resp.data.token);
            dispatch({type:authtypes.LOG_IN , payload : resp.data.user})
            localStorage.setItem('isAuth' , true)
          }
        })
        .catch((err) => {
          console.log("error", err.data);
        });
};


export const signup = ({firstname,lastname,email,password},route ) => async (dispatch)=>{

  await axios.post(`http://localhost:4000/user/${route}`,{
    firstname,
    lastname,
    email,
    password,
  })
      .then((resp) => {
        console.log("response", resp.data);
        if (!!resp.data.token) {
          setAuth(resp.data.token);
          dispatch({type:authtypes.LOG_IN , payload : resp.data.user})
          localStorage.setItem('isAuth' , true)
        }
      })
      .catch((err) => {
        console.log("error", err.data);
      });
};

export const logout = ()=> ({type:authtypes.LOG_OUT});
















































































































































































































