import React from 'react';
import axios from 'axios';
import  {Formik } from 'formik';
import Header from '../../../components/header/header'
import * as yup from 'yup';
import './login.css';
import authaction from '../../../Redux/actions/authaction';
import { useDispatch , useSelector } from 'react-redux';
import {setAuth} from '../../../utils/index'
import {PATHS} from '../../../config';
import { Redirect } from 'react-router';

const Login = ({history}) => {
    
    const isLoggedIn = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return(
        <Formik
        initialValues={{email:"" , password :""}}
        onSubmit= {async(values , {setSubmitting}) => {
            console.log(values)
            await axios({
                method:"post",
                url:"http://localhost:5000/user/login",
                data: values
            }).then(resp=>{
                console.log("response", resp)
                if(!!resp.data.token){
                    dispatch(authaction.login())
                    setAuth(resp.data.token)
                    history.push(PATHS.PROFILE)
                }
            }).catch(err=>{
                console.log("error", err.data)
            })
            if(isLoggedIn){
               return  <Redirect to={PATHS.PROFILE}/>
            }
            setTimeout(()=>{
                console.log("logging in" , values)
                setSubmitting(false)
            }, 2000);
           
        }}

        validationSchema = {yup.object().shape({
            email :yup.string()
            .email()
            .required("Email is Required"), 
            password :yup.string()
            .required("Password is Required")
            .min(8,"password should be 8 character long")
            .matches(/^[0-9]*$/,"password should be only numbers")
            
        })}

        
    >
        {props =>{
            const{
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props

            return(
                <>
                <Header/>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <div className="contain" >
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
                    <div className="contain" >
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
                    <button type="submit" className="btn btn-outline btn-primary" disabled= {isSubmitting}>Submit</button>
                </form>
                </>
            )
        }}
    </Formik>
    )
    
};

export default Login;