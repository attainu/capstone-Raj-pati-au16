import {PATHS} from '../config'
import Home from '../containers/home/home'
import Profile from '../containers/profile/profile'
import Login from '../containers/login/login'
import Signup from '../containers/signup/signup'
import NotFound from '../containers/NotFound/'

const routes = [
    {exact:true , path:PATHS.HOME , component:Home},
    {exact:true , path:PATHS.PROFILE, component:Profile},
    {exact:true , path:PATHS.LOGIN, component:Login},
    {exact:true , path:PATHS.SIGNUP, component:Signup},
    { path: '*', exact: true, component: NotFound},
]

export default routes;
