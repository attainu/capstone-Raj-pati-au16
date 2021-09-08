import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import Headerlink from '../headerlinks';
import {PATHS } from '../../config';
import { useSelector } from 'react-redux';
import Logout from '../logout/index';
import {Link } from 'react-router-dom';
import './header.css';

const Nav = ()=>{
    const isloggedin = useSelector(state=>state.auth.isAuth);
    const userdata = useSelector(state=>state.auth.userData);
    
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
                                                <Headerlink to={PATHS.PROFILE}  name="Profile"/>
                                            </li>
                                            <li className="nav-item">
                                                <Logout to={PATHS.HOME} name="logout"/>
                                            </li>
                                            <li className="nav-item">
                                                <Headerlink to={PATHS.ADDRESS} name="Address"/>
                                            </li>
                                        </>:
                                        <>
                                            <li className="nav-item">
                                                <Headerlink to={PATHS.SIGNUP} name="Signup" />
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
                                    <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </span>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Headerlink to={PATHS.ALLPRODUCT} name="All Products"/></li>
                                        <li><Headerlink className="dropdown-item" to={PATHS.ELECTRONIC} name="Electronics"/></li>
                                        <li><Headerlink className="dropdown-item" to={PATHS.GROCERY} name="Grocery"/></li>
                                        <li><Headerlink className="dropdown-item" to={PATHS.HOMEESSENTIALS} name="Home Essential"/></li>
                                    </ul>
                                </li>
                            </ul> 
                            {
                               isloggedin?
                               <>
                               <Link className="cart" to={`cart/${userdata._id}`}>
                                   <i id="cart"className="fa  fa-2x fa-shopping-cart" />
                               </Link>  
                               </>:
                               <>
                               </>
                            
                            }
                                   
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Nav;

<header>
    
</header>