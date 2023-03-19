import './HouseCard.css'

import { faStairs,faHouse} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {FC} from "react";

const stairsIcon: IconProp = faStairs;
const houseIcon: IconProp = faHouse;

export type ThouseCard ={
    src:string,
    house_type:string,
    code:string,
    build_type:string,
    location:string,
    condition:string,
    price:number,
    floor:number,
    building_floors:number,
    rooms:number,
    house_space:number
}

const HouseCard:FC<ThouseCard> = (
    {
        src,house_type,code,build_type,
        location,condition,price,floor,
        building_floors,rooms,house_space
    }
    ) =>{
    return(
        <div className={'house_card'}>
            <div className={'house_card_image'} style={{backgroundImage:`url(${src})`}}></div>
            <div className={'house_card_about'}>
                <div style={{display:'flex',justifyContent:'space-between'}}><span>{house_type}</span>  <span>code: {code}</span></div>

                <div style={{display:'flex',justifyContent:'space-between',margin:'3vh 0'}}>

                    <div>
                        <p>Build type - {build_type}</p>
                        <p style={{fontSize:'30px'}}> {location}</p>
                        <p> Condition - {condition}</p>
                    </div>

                    <div className={'house_card_about_price'}>${price}</div>

                </div>

                <div style={{fontSize:'20px',display:'flex',gap:'20px'}}>
                    <span><FontAwesomeIcon icon={stairsIcon} /> Floor {floor}/{building_floors}</span>
                    <span><FontAwesomeIcon icon={houseIcon} /> Rooms {rooms}</span>
                    <span><i className="fa fa-solid fa-filter"></i> Total space {house_space} M²</span>
                </div>
            </div>
        </div>
    )
}


export default HouseCard