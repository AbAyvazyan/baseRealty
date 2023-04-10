import './SlideCard.css'

import slideImage from '../../../../../assets/images/slide1.jpg'


import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {FC} from "react";
import HouseCard from "../../../../HouseCard";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



type Thouse = {
    image:string;
    heading:string;
    place:string,
    price:string
}


interface IslideCard {
    houses:Thouse
}

const SlideCard:FC<IslideCard> = ({houses:{image,heading,place,price}}) => {
    return (
        <div className={'slide_card'}>
            <div className={'slide_card_image'} style={{backgroundImage:`url(${image})`}}></div>
            <div className={'slide_card_about'}>
                <h4 style={{textAlign:'center'}}>{heading}</h4>

                <div className={'slide_card_about_content'}>
                    <p><FontAwesomeIcon icon={faLocationDot} />{place}</p>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    );
}

export default SlideCard