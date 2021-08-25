import {PATHS} from '../config'
import Home from '../containers/home/home'
import Profile from '../containers/profile/profile'
import Login from '../containers/login/login'
import Signup from '../containers/signup/signup'
import NotFound from '../containers/NotFound/'
import Products from '../containers/products'
import ProductByid from '../containers/productByid'
import HomeEssentials from '../containers/HomeEssentials';
import Grocery from '../containers/Grocery';
import Electronics from '../containers/Electronics'

const routes = [
    {exact:true , path:PATHS.HOME , component:Home},
    {exact:true , path:PATHS.PROFILE, component:Profile},
    {exact:true , path:PATHS.LOGIN, component:Login},
    {exact:true , path:PATHS.SIGNUP, component:Signup},
    {exact:true , path:PATHS.ALLPRODUCT, component:Products},
    {exact:true , path:'/product/:id', component:ProductByid},
    {exact:true , path:PATHS.ELECTRONIC, component:Electronics},
    {exact:true , path:PATHS.GROCERY, component:Grocery},
    {exact:true , path:PATHS.HOMEESSENTIALS, component:HomeEssentials},
    { path: '*', exact: true, component: NotFound},
]

export default routes;
