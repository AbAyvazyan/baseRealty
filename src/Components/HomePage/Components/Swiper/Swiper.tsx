import "./Swiper.css";

import {FC, useEffect, useState} from "react";
import SlideCard from "./SlideCard";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import baseLogo from "../../../../assets/images/logo.png";

import {Autoplay, Pagination} from "swiper";
import {useTranslation} from "react-i18next";

type Tswiper = {
    heading: string;
    homes: any;
};

const SwiperElement: FC<Tswiper> = ({heading, homes}) => {
    const [houses, setHouses] = useState<any>([]);

    const {t} = useTranslation();

    useEffect(() => {
        if (!homes) {
            return;
        }

        setHouses(homes);
    }, [homes]);

    return (
        <>
            <section className={"swiper_section"}>
                <h2>{t(heading)}</h2>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        stopOnLastSlide: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    slidesPerView={1}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {houses.map((item: any) => {
                        return (
                            <SwiperSlide key={item.id} style={{opacity: 1}}>
                                <SlideCard
                                    houses={{
                                        image: item.image ? `http://${item.image}` : baseLogo,
                                        heading: item.property_description,
                                        place: item.addres,
                                        price: item.price,
                                        direction: item.id,
                                    }}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </section>
        </>
    );
};

export default SwiperElement;
