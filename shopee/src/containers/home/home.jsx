import Header from '../../components/header/header';
import './home.css'



function Home (){
    return(
        <>
        <Header/>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="http://xdesktopwallpapers.com/wp-content/uploads/2012/04/Morning%20Hot%20Coffee%20In%20White%20Cup%20Plate.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.cepro.com/wp-content/uploads/2021/06/EpisodeSpeakersIndia_small-500x300.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/4CFOzHbBSdM/maxresdefault.jpg" className="d-block w-100 h-600" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/TS_8.png?itok=XXdG8Imp" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://miro.medium.com/max/1200/0*WKr5tRzykYjW22XZ.jpeg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.royaloakindia.com/uploads/RoyaloakPenangMalaysianWoodenSofaSet3+1+1fjnawf800.webp" className="d-block w-100" alt="..."/>
                </div>
                 <div className="carousel-item">
                    <img src="https://rukminim1.flixcart.com/image/416/416/sofa-set/m/p/t/hs-0003-meranti-kapur-wood-homestock-black-3-1-1-black-original-imaenrjhefd2vzfh.jpeg?q=70" className="d-block w-100" alt="..."/>
                </div>
                 <div className="carousel-item">
                    <img src="https://i.pinimg.com/originals/40/9c/14/409c14b88c39208756030d5bd28d42dd.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
};

export default Home;                                                                                                            