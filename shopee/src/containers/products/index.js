import Header from '../../components/header/header';
import React ,{useEffect} from 'react';
import {useDispatch , useSelector } from 'react-redux';
import {fetchProducts} from '../../Redux/actions/productAction';
import {Link} from 'react-router-dom';
import { PATHS } from "../../config";
import './index.css'

const AllProducts = ({history}) => {
    const isloggedin = useSelector(state => state.auth.isAuth);
    const products = useSelector(state => state.productReducer.products);
    const dispatch = useDispatch();
    useEffect(()=> {
        if(!!isloggedin){
            dispatch(fetchProducts());
        }else{
            history.push(PATHS.LOGIN)
        }
    },[dispatch,isloggedin,history])
    return (
       <>
        <Header/>
            <div className="item-container">
                {products.map((product)=>(
                    <div className="card" key={product._id}>
                        <br/>
                        <img src={product.image} alt=""/>
                        <h3>{product.productName}</h3>
                        <h4>Price:<strong>₹{product.price}</strong></h4>
                        <p>{product.description}</p>
                        <Link to={`/product/${product._id}`} id={product._id} className="view">View</Link>
                    </div>
                ))}
            </div> 
       </>
    )
}


export default AllProducts;


