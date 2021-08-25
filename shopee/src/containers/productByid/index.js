import { useEffect,useState} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useDispatch , useSelector} from "react-redux";
import { fetchProduct } from "../../Redux/actions/productAction";
import Header from '../../components/header/header'

const Product = ()=>{
    const product = useSelector((state) => state.selectedProductReducer);
    const userid = useSelector((state) => state.auth.userData._id);
    const {_id , image , productName , description , price, category} = product
    const dispatch = useDispatch(); 
    const {id} = useParams();
    const [ count , setcount] = useState(1)
    const addProduct=(product,id)=>{
        axios({
            method: 'post',
            url: `http://localhost:4000/user/cart/${id}`,
            data: product
        });
        setcount(count+=1)
    }
    const removeProduct=(product,id)=>{
        axios({
            method: 'post',
            url: `http://localhost:4000/user/cart/remove/${id}`,
            data: product
        });
        setcount(count -= 1)
    }

    useEffect(()=>{
        if(id && id !== "") dispatch(fetchProduct(id))
    },[id]);
    
    return(
        <>
        <Header Count = {count}/>
        <div>
            {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
            ) : (
                <div className="product-container" key={_id}>
                    <div>
                        <img className="prod-image" src={image} alt=""/>
                    </div>
                    <div>
                        <h1 className="prod-name">{productName}</h1>
                        <p>Price : ₹<strong></strong>{price}</p>
                        <h3>{category}</h3>
                        <h2>{description}</h2>
                    </div>
                    <div>
                        <button>Add to Cart</button>
                        <button onClick={()=>removeProduct(product,userid)}>-</button>
                        <button onClick={()=>addProduct(product,userid)}>+</button>
                    </div>
                </div>
            )};
        </div>
        </>
    )
};

export default Product;

