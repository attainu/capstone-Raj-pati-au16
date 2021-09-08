import {React , useState} from 'react';
// import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/header';
import { updateProfile } from '../../Redux/actions/profileAction';


// let schema = yup.object().shape({
//     Password :yup.string()
//     .required("Password is Required")
//     .min(6,"password should be 6 character long")
//     .matches(/^[0-9]*$/,"password should be only numbers")
// });

const Profile = ()=>{
    const user = useSelector(state => state.auth.userData )
    console.log(user);
    const {_id , firstname , lastname , email , password} = user

    const[Fstname , setFstname]  = useState(firstname);
    const[Lstname , setLstname] = useState(lastname);
    const[Password , setPassword] = useState(password);
    const[Loading , setLoading] = useState(false);
    const[Text , setText] = useState("update");

    const dispatch = useDispatch();

    const HandleSubmit = e =>{
        e.preventDefault();
        console.log(_id,Fstname,Lstname,email,Password)
        setLoading(true);
        setText("Updating...");
        dispatch(updateProfile(_id ,Fstname ,Lstname,email,Password))
        setTimeout(()=>{
            setLoading(false)
            setText("Update")
        },3000)
    };
    return(
        <>
        <Header/>
        <div className="container">
                        <form autoComplete="off" onSubmit={HandleSubmit}>
                            <h3>Profile</h3>
                            <br />
                            <div className="input">
                                <div className="inputBox">
                                <label htmlFor="firstname"  className="form-label">Firstname</label>
                                    <input type="text" 
                                        className="form-control" 
                                        placeholder="firstname"
                                        name="firstname"
                                        defaultValue={Fstname}
                                        onChange={(e) => setFstname(e.target.value)}
                                        
                                    />
                                </div>
                            </div>
                            <div className="input" >
                                <div className="inputBox">
                                    <label htmlFor="lastname" className="form-label">Lastname</label>
                                    <input type="text" 
                                        className="form-control" 
                                        
                                        placeholder="lastname"
                                        name="lastname"
                                        defaultValue={Lstname}
                                        onChange={(e )=> setLstname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="input" >
                                <div className="inputBox">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" 
                                        className="form-control" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter your email"
                                        name="email"
                                        defaultValue = {email}
                                    />
                                </div>
                            </div>
                            <div className="input" >
                                <div className="inputBox">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" 
                                        className="form-control"
                                        placeholder="Enter your password"
                                        name="password"
                                        defaultValue={Password}
                                        onChange={(e) => setPassword(e.target.value)}
                                       
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn" disabled= {Loading}>
                                {Text}
                                {Loading && <i className="fa fa-spinner fa-spin"></i>}
                            </button>
                        </form>
                    </div>
                </>
    )
}
export default Profile;
