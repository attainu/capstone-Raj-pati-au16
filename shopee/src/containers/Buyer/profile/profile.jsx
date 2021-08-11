import React from 'react';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import {PATHS} from '../../../config';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';


const Profile = ()=>{

    const isloggedin = useSelector(state => state.auth)

    if(!isloggedin){
        <Redirect to={PATHS.LOGIN}/>
    }

    return(
        <>
        <Header/>
        <h2>profile</h2>
        <Footer/>
        </>
    )
}

export default Profile;