import axios from 'axios';
import  {Formik } from 'formik';
import Header from '../../components/header/header'
import * as yup from 'yup';
import './signup.css'
import { Redirect } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import {setAuth} from '../../utils/index';
import {PATHS} from '../../config';
import authaction from '../../Redux/actions/authaction';


const Signup = ({history}) => {
    const isLoggedIn = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return(
        <Formik
        initialValues={{firstname:"", lastname:"",email:"" , password :""}}
        onSubmit= {async(values , {setSubmitting}) => {
            console.log(values)
            await axios({
                method:"post",
                url:"http://localhost:5000/user/signup",
                data: values
            }).then(resp=>{
                console.log("response", resp)
                if(!!resp.data.token){
                    dispatch(authaction.login())
                    setAuth(resp.data.token);
                    history.push(PATHS.PROFILE)
                }
                
            }).catch(err=>{
                console.log("error", err)
            })
            if(isLoggedIn){
                return <Redirect to={PATHS.PROFILE}/>
            }
            setTimeout(()=>{
                console.log("signup in" , values)
                setSubmitting(false)
            }, 2000);
           
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
                <h3>Signup</h3>
                <br />
                <div className="mb-3" >
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
                <div className="mb-3" >
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
                    <div className="mb-3" >
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
                    <div className="mb-3" >
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
                    <button type="submit" className="btn btn-outline-primary" disabled= {isSubmitting}>Submit</button>
                </form>
                </>
            )
        }}
    </Formik>
    )
    
};

export default Signup;