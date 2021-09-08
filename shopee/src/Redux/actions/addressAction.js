import axios from 'axios';
import { addressTypes } from '../aciontypes';


export const user_address = (userid,name,phone,address,city,state,locationType)=> async (dispatch) =>{
    await axios.post(`http://localhost:4000/user/address/${userid}`,{
        name,
        phone,
        address,
        city,
        state,
        locationType,
    })
    .then((resp)=>{
        console.log(resp.data.new_address)
        if(!!resp.data.new_address){
            dispatch({type:addressTypes.ADD_ADDRESS , payload:resp.data.new_address});
        }
    })
    .catch((err) => {
        console.log("err",err.data)
    })

}