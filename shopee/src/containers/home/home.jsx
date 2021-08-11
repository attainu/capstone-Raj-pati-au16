import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './home.css'
const home = ()=>{
    return(
        <>
        <Header/>
        <h2>Login to continue....</h2>
        <div className="wrapper">
            <div className="wave"></div>
        </div>
        <Footer/>
        </>
    )
}

export default home;