import './Swiper.css'

import {FC} from "react";
import SlideCard from "./SlideCard";


import {Swiper,SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Autoplay, Pagination, Navigation } from "swiper";

type Tswiper={
    heading:string
}

const SwiperElement:FC<Tswiper> = ({heading}) =>{
    return(
        <>
            <section className={'swiper_section'}>

                <h2>{heading}</h2>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <SlideCard/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideCard/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideCard/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideCard/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideCard/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideCard/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideCard/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideCard/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideCard/>
                    </SwiperSlide>
                </Swiper>

            </section>
        </>
    )
}


export default SwiperElement