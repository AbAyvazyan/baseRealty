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



type Thouse = {
    image:string;
    heading:string;
    about:string
}


interface IslideCard {
    houses:Thouse
}

const SlideCard:FC<IslideCard> = ({houses:{image,heading,about}}) => {
    return (
        <Card sx={{ maxWidth: '100%',height:'100%',padding:'5vh 7vw',color:'rgb(12,51,58)' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width='100%'
                    sx={{height:'300px!important'}}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {about}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default SlideCard