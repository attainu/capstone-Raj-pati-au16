import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../../components/header/header';
import './index.css';
function Checkoutsuccess() {
    const Amount = useSelector(state=> state.CheckoutSuccessReducer.data.amount)
    const Name = useSelector(state=> state.CheckoutSuccessReducer.data.name)
    console.log(Amount);
    console.log(Name);
    return (
        <>
        <Header/>
            <h2><strong>{Name}</strong>your total<strong> ₹{Amount}.00</strong>of order is Successfull</h2>
            <h3>Thank you for shopping with us </h3>
        </>
    )
}

export default Checkoutsuccess;
