import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import React ,{useEffect} from 'react';
import {useDispatch , useSelector } from 'react-redux';
import {fetchCategory} from '../../Redux/actions/productAction';
import {Link} from 'react-router-dom';
import { PATHS } from "../../config";
import { Redirect } from "react-router";


const Grocery = ({history}) => {
    const isloggedin = useSelector(state => state.isAuth);
    const products = useSelector(state => state.product_category_Reducer.products);
    const dispatch = useDispatch();
    useEffect(()=> {
        if(!!isloggedin){
            dispatch(fetchCategory('Grocery'));
        }else{
            <Redirect to={PATHS.LOGIN} />
        }
    },[isloggedin])
    return (
       <>
        <Header/>
            <div className="item-container">
                {products.map((product)=>(
                    <div className="card" key={product._id}>
                        <img src={product.image} alt=""/>
                        <h3>{product.productName}</h3>
                        <h4>Price:<strong>₹{product.price}</strong></h4>
                        <p>{product.description}</p>
                        <Link to={`/product/${product._id}`} id={product._id}>View</Link>
                    </div>
                ))}
            </div> 
        <Footer/>
       </>
    )
}


export default Grocery;


