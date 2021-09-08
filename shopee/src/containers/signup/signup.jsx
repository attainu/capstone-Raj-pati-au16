import  {Formik } from 'formik';
import Header from '../../components/header/header'
import * as yup from 'yup';
import './signup.css'
import { Redirect } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';

import {PATHS} from '../../config';
import {signup} from '../../Redux/actions/authaction';


const Signup = ({history}) => {
    const isLoggedIn = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    if(isLoggedIn){
        return <Redirect to={PATHS.PROFILE}/>
    }else{
        return(
            <Formik
            initialValues={{firstname:"", lastname:"",email:"" , password :""}}
            onSubmit= {async(values ) => {
                console.log(values)
                dispatch(signup(values, 'signup'));
                history.push(PATHS.ALLPRODUCT)
            }}

    
            validationSchema = {yup.object().shape({
                firstname:yup.string()
                .required("firstname is required")
                .matches(/^[A-Za-z]+$/ , "firstname should be only alphabets"),
                lastname:yup.string()
                .required("lastname is required")
                .matches(/^[A-Za-z]+$/ , "lastname should be only alphabets"),
                email :yup.string()
                .email()
                .required("Email is Required"), 
                password :yup.string()
                .required("Password is Required")
                .min(6,"password should be 6 character long")
                .matches(/^[0-9]*$/,"password should be only numbers")
                
            })}
    
            
        >
            {props =>{
                const{
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props
    
               return(
                    <>
                   <Header/>
                    <div className="container">
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <h3>Signup</h3>
                            <br />
                            <div className="input">
                                <div className="inputBox">
                                <label htmlFor="firstname"  className="form-label">Firstname</label>
                                    <input type="text" 
                                        className="form-control" 
                                        id={errors.firstname && touched.firstname && "error" }
                                        placeholder="firstname"
                                        name="firstname"
                                        value={values.firstname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.firstname && touched.firstname &&(
                                        <p>{errors.firstname}</p>
                                    )}
                                </div>
                            </div>
                            <div className="input" >
                                <div className="inputBox">
                                    <label htmlFor="lastname" className="form-label">Lastname</label>
                                    <input type="text" 
                                        className="form-control" 
                                        id={errors.lastname && touched.lastname && "error" }
                                        placeholder="lastname"
                                        name="lastname"
                                        value={values.lastname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.lastname && touched.lastname &&(
                                        <p>{errors.lastname}</p>
                                    )}
                                </div>
                            </div>
                            <div className="input" >
                                <div className="inputBox">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" 
                                        className="form-control" 
                                        id={errors.email && touched.email && "error" }
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter your email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email &&(
                                        <p>{errors.email}</p>
                                    )}
                                </div>
                            </div>
                            <div className="input" >
                                <div className="inputBox">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" 
                                        className="form-control"
                                        id={errors.password && touched.password && "error" }
                                        placeholder="Enter your password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.password && touched.password &&(
                                        <p>{errors.password}</p>
                                    )}
                                </div>
                            </div>
                            <button type="submit" className="btn" >Submit</button>
                        </form>
                    </div>
                    </>
                )
            }}
        </Formik>
        )

    }
    
    
};

export default Signup;