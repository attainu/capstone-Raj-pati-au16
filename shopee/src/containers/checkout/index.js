import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Redirect ,Link} from 'react-router-dom';
import {PATHS} from '../../config';
import Header from '../../components/header/header';
import {checkoutSuccess} from '../../Redux/actions/checkoutAction';
import './index.css';
 
function Checkout() {
    const addresses =  useSelector(state => state.CheckoutReducer.Address);
    const userid = useSelector((state) => state.auth.userData._id)
    const Amount = useSelector((state)=>state.CartAmountReducer.cartAmount.grand)
    const dispatch = useDispatch()
    const handleSubmit = (id,amount)=>{
        dispatch(checkoutSuccess(id,amount))
    }
    console.log(addresses)
    return (
        <>
        <Header/>
            {
                addresses?
                <>
                {addresses.map((item,index)=>(
                    <div className="address" key={item.index}>
                    <h4>City:{item.city}</h4>
                    <h4>contact:{item.phone}</h4>
                    <h4>Location:{item.locationType}</h4>
                    <lable for="address">{item.address}</lable>
                    <input name="address" type="radio" value={item.address}/>
                    </div>
                ))}
                <Link  className="btn btn-outline-primary"onClick={()=>handleSubmit(userid , Amount)} to={PATHS.CHECKOUTSUCCESS}>Submit</Link>
                </>:
                <>
                <Redirect to={PATHS.ADDRESS}/>
                </>
            }
        </>
    )
}

export default Checkout;
