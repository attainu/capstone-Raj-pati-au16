import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import Headerlink from '../headerlinks';
import {PATHS } from '../../config';
import { useSelector } from 'react-redux';
import Logout from '../logout/index';
import './header.css';

const Nav = (props)=>{
    const isloggedin = useSelector(state=>state.auth.isAuth);
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Headerlink className="navbar-brand text-white text-decorartion-none" to={PATHS.HOME} name="Home"/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            {
                                    isloggedin?
                                        <>
                                            <li className="nav-item">
                                                <Headerlink to={PATHS.PROFILE} name="Profile"/>
                                            </li>
                                            <li className="nav-item">
                                                <Logout to={PATHS.HOME} name="logout"/>
                                            </li>
                                        </>:
                                        <>
                                            <li className="nav-item">
                                                <Headerlink to={PATHS.SIGNUP} name="Signup"/>
                                            </li>
                                            <li className="nav-item">
                                                <Headerlink to={PATHS.LOGIN} name="Login"/>
                                            </li>
                                        </>
                                    }
                            </ul>
                            <input className="form-control fa fa-search me-2" type="search" placeholder="&#61442;"aria-label="Search"/>
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Headerlink to={PATHS.ALLPRODUCT} name="All Products"/></li>
                                        <li><a className="dropdown-item" >Electronics</a></li>
                                        <li><a className="dropdown-item" >Grocery</a></li>
                                        <li><a className="dropdown-item" >Home Essential</a></li>
                                    </ul>
                                </li>
                            </ul> 
                            <i id="cart"className="fa  fa-2x fa-shopping-cart" >  {props.Count} </i>          
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Nav;

