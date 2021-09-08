import { useEffect} from "react";
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';
import { useDispatch , useSelector} from "react-redux";
import { fetchProduct } from "../../Redux/actions/productAction";
import Header from '../../components/header/header';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css'



const Product = ()=>{
    const product = useSelector((state) => state.selectedProductReducer);
    const userid = useSelector((state) => state.auth.userData._id);
    console.log(userid)
    const {_id , image , productName , description , price, category} = product
    const dispatch = useDispatch(); 
    const {id} = useParams();
    const addProduct= async(productName,image,price,_id,uid)=>{
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
  

    useEffect(()=>{
        if(id && id !== "") dispatch(fetchProduct(id))
    },[dispatch,id]);
    
    return(
        <>
        <Header/>
        <div>
            {Object.keys(product).length === 0 ? (
            <h2><i className="fa fa-3x fa-spinner fa-spin "></i>Loading...</h2>
            ) : (
                <div className="product-container" key={_id}>
                    <div className="img-contain">
                        <img className="prod-image" src={image} alt=""/>
                    </div>
                    <div className="prod-detail">
                        <h1 className="prod-name">{productName}</h1>
                        <h4>Price :<strong>₹{price}.00</strong></h4>
                        <h3>{category}</h3>
                        <h2>{description}</h2>
                    </div>
                    <Link to={`/cart/${userid}`} onClick={()=>addProduct(productName,image,price,id,userid)} className="btn-addtocart">Add to cart</Link>
                </div>
            )};
        </div>
        </>
    )
};

export default Product;

