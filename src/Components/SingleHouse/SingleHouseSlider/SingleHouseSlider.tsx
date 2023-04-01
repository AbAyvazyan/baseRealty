import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import './SingleHouseSlider.css';

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

export default function SingleHouseSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

    return (
        <>
            <Swiper
                style={{
                    // "--swiper-navigation-color": "#fff",
                    // "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src="https://images.adsttc.com/media/images/5be3/3a40/08a5/e549/e300/0315/newsletter/42442.jpg?1541618191" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://88designbox.com/upload/2015/07/20/modern-apartment-interior-design-02.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://thumbs.dreamstime.com/b/living-room-small-modern-apartment-interior-design-small-apartment-design-living-room-217356598.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://thumbs.dreamstime.com/b/small-apartment-design-living-room-modern-interior-235528822.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://88designbox.com/upload/2015/11/06/luxury-apartment-01.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://cdn.cnn.com/cnnnext/dam/assets/171030143155-432-park-avenue-1.jpg" />
                </SwiperSlide>

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
                <SwiperSlide>
                    <img src="https://images.adsttc.com/media/images/5be3/3a40/08a5/e549/e300/0315/newsletter/42442.jpg?1541618191" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://88designbox.com/upload/2015/07/20/modern-apartment-interior-design-02.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://thumbs.dreamstime.com/b/living-room-small-modern-apartment-interior-design-small-apartment-design-living-room-217356598.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://thumbs.dreamstime.com/b/small-apartment-design-living-room-modern-interior-235528822.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://88designbox.com/upload/2015/11/06/luxury-apartment-01.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="http://cdn.cnn.com/cnnnext/dam/assets/171030143155-432-park-avenue-1.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}