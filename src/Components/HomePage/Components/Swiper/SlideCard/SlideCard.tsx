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
import {useTranslation} from "react-i18next";
import favicon from '../../../../../assets/images/logo.png'



type Thouse = {
    image:string;
    heading:string;
    place:string,
    price:string
    direction:string
}


interface IslideCard {
    houses:Thouse
}

const SlideCard:FC<IslideCard> = ({houses:{image,heading,place,price,direction}}) => {

    const {t} = useTranslation()

    return (
      <a className="slide_card" href={`house/${direction}`} rel="noopener noreferrer" target="_blank">
        <div
          className={"slide_card_image"}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={"slide_card_about"}>
          <h4 style={{ textAlign: "center" }}>{t(heading)}</h4>

          <div className={"slide_card_about_content"}>
            <p>
              <FontAwesomeIcon icon={faLocationDot} />
              {t(place)}
            </p>
            <p>${price}</p>
          </div>
        </div>
      </a>
    );
}

export default SlideCard