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

const homes = [
    {
        image: 'http://cdn.home-designing.com/wp-content/uploads/2014/06/marble-finish-room-divider.jpeg',
        heading: 'For Sale',
        about: 'This apartment is for Sale'
    },
    {
        image: 'http://cdn.home-designing.com/wp-content/uploads/2014/06/white-modern-studio-design.jpeg',
        heading: 'For Rent',
        about: 'This apartment is for Rent'
    },
    {
        image: 'http://cdn.home-designing.com/wp-content/uploads/2014/06/marble-finish-room-divider.jpeg',
        heading: 'For Sale',
        about: 'This apartment is for Sale'
    },
    {
        image: 'http://www.contemporist.com/wp-content/uploads/2019/10/modern-apartment-design-hidden-lighting-111019-1249-01-800x408.jpg',
        heading: 'For Rent',
        about: 'This apartment is for Rent'
    },
]


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
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >


                    {
                        homes.map((item,index)=>{
                            return <SwiperSlide key={index}>
                                <SlideCard houses={{image: item.image,
                                    heading: item.heading, about: item.about}}/>
                            </SwiperSlide>
                        })
                    }

                </Swiper>

            </section>
        </>
    )
}


export default SwiperElement