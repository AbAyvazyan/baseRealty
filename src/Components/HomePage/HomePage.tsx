import './HomePage.css'
import SlideShow from "./Components/SlideShow";
import SwiperElement from "./Components/Swiper";





const HomePage = () =>{

    return(
        <>
            <SlideShow/>
            <SwiperElement heading={'NEW'}/>
            <SwiperElement heading={'BEST_OFFERS!'}/>
            <SwiperElement heading={'FREQUENTLY_ASKED'}/>
        </>
    )
}

export default HomePage