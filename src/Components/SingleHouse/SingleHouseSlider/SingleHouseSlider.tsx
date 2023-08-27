import React, {FC, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import './SingleHouseSlider.css';

import logo from '../../../assets/images/logo.png'

import SwiperCore, {FreeMode, Navigation, Thumbs} from "swiper";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

type TSingleHouseSlider = {
    imagesData: any
}

const SingleHouseSlider: FC<TSingleHouseSlider> = ({imagesData}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

    return (
        <>
            <Swiper
                style={
                    {
                        // "--swiper-navigation-color": "#fff",
                        // "--swiper-pagination-color": "#fff",
                    }
                }
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {imagesData.length ?
                    imagesData.map((item: any) => {
                        return (
                            <SwiperSlide key={item.image}>
                                <img src={item.image}/>
                            </SwiperSlide>
                        );
                    }):
                    <SwiperSlide>
                        <img src={logo}/>
                    </SwiperSlide>
                }
            </Swiper>
            <Swiper
                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                loop={true}
                spaceBetween={3}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {imagesData.length ?
                    imagesData.map((item: any) => {
                        return (
                            <SwiperSlide key={item.image}>
                                <img src={item.image}/>
                            </SwiperSlide>
                        );
                    }):
                    <SwiperSlide>
                        <img src={logo}/>
                    </SwiperSlide>
                }
            </Swiper>
        </>
    );
}

export default SingleHouseSlider