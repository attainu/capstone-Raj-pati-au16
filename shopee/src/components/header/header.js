import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Headerlink from '../headerlinks';
import {PATHS } from '../../config';
import { useSelector } from 'react-redux';
import Logout from '../logout/index'

const Nav = ()=>{
    const isloggedin = useSelector(state=>state.auth);
    return (
        <>
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Headerlink className="navbar-brand text-white text-decorartion-none" to={PATHS.HOME} name="Home"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        {
                        isloggedin?
                            <>
                                <li className="nav-item">
                                    <Headerlink to={PATHS.PROFILE} name="Profile"/>
                                </li>
                                <li className="nav-item">
                                    <Logout  to={PATHS.LOGOUT} name="logout"/>
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
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Nav;