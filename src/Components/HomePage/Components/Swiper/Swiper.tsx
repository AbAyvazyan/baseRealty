import './Swiper.css'

import {FC} from "react";
import SlideCard from "./SlideCard";


import {Swiper,SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";
import {useTranslation} from "react-i18next";

const homes = [
    {
        image: 'http://cdn.home-designing.com/wp-content/uploads/2014/06/marble-finish-room-divider.jpeg',
        heading: 'For Sale',
        place: 'Mongholistan',
        price: '333.333'
    },
    {
        image: 'http://cdn.home-designing.com/wp-content/uploads/2014/06/white-modern-studio-design.jpeg',
        heading: 'For Rent',
        place: 'Mongholistan',
        price: '333.333'
    },
    {
        image: 'http://cdn.home-designing.com/wp-content/uploads/2014/06/marble-finish-room-divider.jpeg',
        heading: 'For Sale',
        place: 'Mongholistan',
        price: '333.333'
    },
    {
        image: 'http://www.contemporist.com/wp-content/uploads/2019/10/modern-apartment-design-hidden-lighting-111019-1249-01-800x408.jpg',
        heading: 'For Rent',
        place: 'Mongholistan',
        price: '333.333'
    },
]


type Tswiper={
    heading:string
}

const SwiperElement:FC<Tswiper> = ({heading}) =>{

    const {t} = useTranslation()

    return(
        <>
            <section className={'swiper_section'}>

                <h2>{t(heading)}</h2>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}

                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >


                    {
                        homes.map((item,index)=>{
                            return <SwiperSlide key={index} style={{opacity:1}}>
                                <SlideCard houses={{image: item.image,
                                    heading: item.heading, place: item.place,price:item.price}}/>
                            </SwiperSlide>
                        })
                    }

                </Swiper>

            </section>
        </>
    )
}


export default SwiperElement