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

const imageStyles={
    width: '100%',
    height:'60vh',
    opacity:'0.8',

}

const SlideShow = () => {
    return (
        <div className="slide-container" style={{height:'200px',width:'100%'}}>
            <Fade arrows={false}>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index}>

                        <div style={{backgroundImage:`url(${fadeImage.url})`,
                                         width: '100%',
                                         height:'60vh',
                                         opacity:'0.8',
                                         backgroundPosition: '70% 70%',
                                         backgroundRepeat: 'no-repeat',
                                         backgroundSize: 'cover',
                                         position:'relative',
                                         display:'flex',
                                         justifyContent:'center',
                                         alignItems:'center'
                        }} >

                            <Filtering/>


                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}


export default SlideShow