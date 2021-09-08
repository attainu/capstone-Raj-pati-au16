import axios from 'axios';
import { profileTypes } from '../aciontypes';


export const updateProfile = (_id ,firstname,lastname,email,password)=> async (dispatch) =>{
    await axios.post(`http://localhost:4000/user/profile/${_id}`,{
        firstname,
        lastname,
        email,
        password,
    })
    .then((resp)=>{
        console.log(resp.data.updatedUser)
        if(!!resp.data.updatedUser){
            dispatch({type:profileTypes.UPDATE_PROFILE , payload:resp.data.updatedUser});
        }
    })
    .catch((err) => {
        console.log("err",err.data)
    })

}