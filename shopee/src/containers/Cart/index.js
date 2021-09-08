import {React,useEffect} from 'react';
import Header from '../../components/header/header';
import {useParams,Link} from 'react-router-dom';
import { useDispatch , useSelector} from "react-redux";
import {fetchCart} from '../../Redux/actions/cartAction';
import {fetchCartamount} from '../../Redux/actions/cartAction';
import { checkout } from '../../Redux/actions/checkoutAction';
import {PATHS} from '../../config'
import axios from 'axios';
import './index.css';

function Cart() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const allData = useSelector((state)=>state.CartReducer.cartData)
    const Total = useSelector((state)=>state.CartAmountReducer.cartAmount.total)
    const Grand = useSelector((state)=>state.CartAmountReducer.cartAmount.grand)
    // const success = useSelector(state=> state.CheckoutSuccessReducer.data)
    
    const addProduct= async(e,productName,image,price,_id,uid)=>{
        e.preventDefault()
        await axios.post((`http://localhost:4000/user/cart/${_id}/${uid}`),{
            productName,
            image,
            price,
            
        })
        .then((resp)=>{
         console.log(resp.data.addData)
        })
         .catch((err)=>{
             console.log("error" , err.data)
         })
         
     }
     const removeProduct= async(e,productName,image,price,_id,uid)=>{
        e.preventDefault()
        await axios.post((`http://localhost:4000/user/cart/remove/${_id}/${uid}`),{
            productName,
            image,
            price,
            
        })
        .then((resp)=>{
         console.log(resp.data.addData)
        })
         .catch((err)=>{
             console.log("error" , err.data)
         })
         
     }
     const Checkout = (id,amount)=>{
        dispatch(checkout(id,amount))
     }
     useEffect(()=>{
        if(id && id !== "") {
            dispatch(fetchCart(id))
            dispatch(fetchCartamount(id))
        }
    },[dispatch,addProduct,removeProduct]);
 
    
    return (
        <>
        <Header/>
        {
          allData?
          <>
          {allData.map((item)=>(
                <>
                <div className="details" key={item.product_id}>
                    <div className="detail">
                        <h4 className="name"><strong>product :{item.Name}</strong></h4>
                        <h4 className="qty"><strong>qty :{item.quantity}</strong></h4>
                        <h4 className="price"><strong>price :{item.price}</strong>₹</h4>
                        <button className="increment" onClick={(e)=>addProduct(e,item.Name,item.image,item.price,item.product_id,id)}>+</button>
                        <button className="Decrement" onClick={(e)=>removeProduct(e,item.Name,item.image,item.price,item.product_id,id)}>-</button>
                    </div>
                    <img  className="image"src={item.image} alt="img"/>
                </div>
                </>
            ))}
            <div className="amount-box">
                <h4><strong>Total Price:{Total}.00₹</strong></h4>
                <h4><strong>Delivery-charges:40.00₹</strong></h4>
                <hr/>
                <h4><strong>Grand total:{Grand}.00₹</strong></h4>
                <br/>
                <Link className="btn btn-outline-success" to={PATHS.CHECKOUT} onClick={()=>Checkout(id,Grand)}>Checkout</Link>
            </div>
          </>:
          <>
          <h1><strong>CART IS EMPTY</strong></h1>
          </>
        
        }
            
        </>
    )
};

export default Cart;
