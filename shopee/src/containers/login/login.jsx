import React from "react";
import axios from "axios";
import { Formik } from "formik";
import Header from "../../components/header/header";
import * as yup from "yup";
import "./login.css";
import {login}from '../../Redux/actions/authaction'
import { useDispatch, useSelector } from "react-redux";
import { PATHS } from "../../config";
import { Redirect } from "react-router";

const Login = ({ history }) => {
  const isLoggedIn = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  if (!!isLoggedIn) {
    console.log(isLoggedIn);
    return <Redirect to={PATHS.ALLPRODUCT} />;
  } else {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          dispatch(login(values, 'login'));
          history.push(PATHS.ALLPRODUCT)
          setTimeout(() => {
            console.log("logging in", values);
            setSubmitting(false);
          }, 2000);
        }}
        validationSchema={yup.object().shape({
          email: yup.string().email().required("Email is Required"),
          password: yup
            .string()
            .required("Password is Required")
            .min(6, "password should be 6 character long")
            .matches(/^[0-9]*$/, "password should be only numbers"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;

          return (
            <>
              <Header />
              <div className="contain">
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <h3>Login</h3>
                  <div className="input">
                    <div className="inputBox">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id={errors.email && touched.email && "error"}
                        aria-describedby="emailHelp"
                        placeholder="Enter your email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && <p>{errors.email}</p>}
                    </div>
                  </div>
                  <div className="input">
                    <div className="inputBox">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id={errors.password && touched.password && "error"}
                        placeholder="Enter your password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password && (
                        <p>{errors.password}</p>
                      )}
                    </div>
                  </div>
                  <button type="submit" className="btn" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              </div>
            </>
          );
        }}
      </Formik>
    );
  }
};

export default Login;
