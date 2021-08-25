import {Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logout} from '../../Redux/actions/authaction'

const Logout = (props)=>{
    const {to , name} = props
    const dispatch = useDispatch()
    const logoutuser=(e)=>{
        
        dispatch(logout())
    }
    return(
        <Link onClick={logoutuser}className="nav-link" to={to}>{name}</Link>
    )
}

export default Logout;