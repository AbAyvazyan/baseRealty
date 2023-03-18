import './HomePage.css'
import SlideShow from "./Components/SlideShow";
import SwiperElement from "./Components/Swiper";





const HomePage = () =>{

    return(
        <main>
            <SlideShow/>
            <SwiperElement heading={'NEW'}/>
            <SwiperElement heading={'BEST OFFERS!'}/>
            <SwiperElement heading={'FREQUENTLY ASKED'}/>
        </main>
    )
}

export default HomePage