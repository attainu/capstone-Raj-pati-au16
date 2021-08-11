import './footer.css'
import '../../'

const Footer = () =>{
    return (
        <>
        <footer className="bg-dark  text-lg-start">
            <div className="text-center p-3 text-white" >
            © 2020 Shopping-cart . All Rights Reserved
            </div>
            <div className="text-left p-3 text-white">
                <span>About us : Software developer</span>
                <br/>
                <span>Build by : Jay and Raj</span>
            </div>
            <div className="text-right p-3 text-white">
                Contact Us
                <br/>
            </div>
        </footer>
        </>
    )
}

export default Footer;