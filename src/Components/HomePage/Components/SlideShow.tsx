import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

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
        <div className="slide-container" style={{height:'200px',width:'110%',marginLeft:'-50px'}}>
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index}>
                        <img style={{ width: '100%',height:'60vh',opacity:'0.8' }} src={fadeImage.url} />
                    </div>
                ))}
            </Fade>
        </div>
    )
}


export default SlideShow