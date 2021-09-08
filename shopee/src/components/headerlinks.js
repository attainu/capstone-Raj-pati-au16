import {Link } from 'react-router-dom';



const Headerlink = (props)=>{
    const {to , name} = props
    return(
        <Link className="nav-link "  to={to}>{name}</Link>
    )
}

export default Headerlink;