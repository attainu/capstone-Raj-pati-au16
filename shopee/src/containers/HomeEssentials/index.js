import Header from '../../components/header/header';
import React ,{useEffect} from 'react';
import {useDispatch , useSelector } from 'react-redux';
import {fetchCategory} from '../../Redux/actions/productAction';
import {Link} from 'react-router-dom';
import { PATHS } from "../../config";
import { Redirect } from "react-router";


const HomeEssentials = () =>{
    const products = useSelector(state => state.product_category_Reducer.Products);
    const isloggedin = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch();
    useEffect(()=> {
        if(isloggedin){
            dispatch(fetchCategory('Home_Essentials'));
        }else{
            <Redirect to={PATHS.LOGIN} />
        }
    },[dispatch,isloggedin])
    return (
       <>
        <Header/>
            <div className="item-container">
                {products.map((product)=>(
                    <div className="card" key={product._id}>
                        <img src={product.image} alt=""/>
                        <h3>{product.productName}</h3>
                        <h4>{product.price}</h4>
                        <p>{product.description}</p>
                        <Link to={`/product/${product._id}`} id={product._id}>View</Link>
                    </div>
                ))}
            </div> 
       </>
    )
}

export default HomeEssentials;
