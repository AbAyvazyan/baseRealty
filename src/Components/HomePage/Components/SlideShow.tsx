import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Filtering from "./Filtering";

import image1 from '../../../assets/images/slide1.jpg'
import image2 from '../../../assets/images/slide2.jpg'
import image3 from '../../../assets/images/slide3.jpg'
import image4 from '../../../assets/images/slide4.jpg'

const fadeImages = [
    {
        url: image1
    },
    {
        url: image2
    },
    {
        url: image3
    },
    {
        url: image4
    },
];

const SlideShow = () => {
    return (
        <section className="slide-container" style={{width:'100%' , height:'70vh'}}>
            <Fade arrows={false}>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index}>

                        <div style={{backgroundImage:`url(${fadeImage.url})`,
                                         width: '100%',
                                         height:'70vh',
                                         opacity:'0.8',
                                         backgroundPosition: '70% 70%',
                                         backgroundRepeat: 'no-repeat',
                                         backgroundSize: 'cover',
                                         position:'relative',
                                         display:'flex',
                                         justifyContent:'center',
                                         alignItems:'center'
                        }} >

                            


                        </div>
                    </div>
                ))}
            </Fade>
            <Filtering/>
        </section>
    )
}


export default SlideShow