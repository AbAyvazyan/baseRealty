import './HomePage.css'
import SlideShow from "./Components/SlideShow";
import SwiperElement from "./Components/Swiper";
import Footer from "../Footer";





const HomePage = () =>{

    return(
        <main>
            <SlideShow/>
            <SwiperElement heading={'NEW'}/>
            <SwiperElement heading={'BEST OFFERS!'}/>
            <SwiperElement heading={'FREQUENTLY ASKED'}/>
            <Footer/>
        </main>
    )
}

export default HomePage