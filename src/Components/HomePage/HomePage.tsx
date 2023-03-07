import './HomePage.css'
import SlideShow from "./Components/SlideShow";
import SwiperElement from "./Components/Swiper";





const HomePage = () =>{

    return(
        <main>
            <SlideShow/>
            <SwiperElement heading={'NEW'}/>
        </main>
    )
}

export default HomePage