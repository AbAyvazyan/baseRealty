import './HouseCard.css'

import { faStairs,faHouse,faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {FC} from "react";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import logo from '../../assets/images/logo.png'

const stairsIcon: IconProp = faStairs;
const houseIcon: IconProp = faHouse;

export type ThouseCard ={
    image:string,
    house_type:string,
    cod:string,
    building_type:string,
    location:string,
    state:string,
    price:number,
    floor:number,
    building_floors:number,
    rooms:number,
    house_space:number,
    id:string
}

const HouseCard:FC<ThouseCard> = (
    {
        image,house_type,cod,building_type,
        location,state,price,floor,
        building_floors,rooms,house_space,id
    }
    ) =>{

    const navigate = useNavigate()
    const { t } = useTranslation()


    return(
        <a href={`/house/${id}`} target={'_blank'} className={'house_card'}>
            <div className={'house_card_image'} style={{backgroundImage:`url(${image?image:logo})`}}></div>
            <div className={'house_card_about'}>
                <div className={'house_card_code_part'} style={{display:'flex',justifyContent:'space-between'}}><span>{house_type}</span>  <span>{t("Code")}: {cod}</span></div>

                <div className={'house_card_main_text_part'} >

                    <div>
                        <p className={'house_card_just_text'}>{t("Build_type")} - {building_type}</p>
                        <p className={'house_card_location_text'}> {location}</p>
                        <p className={'house_card_just_text'}> {t("Condition")} - {state}</p>
                    </div>

                    <div className={'house_card_about_price'}>${price}</div>

                </div>

                <div className={'house_card_info'}>
                    <span><FontAwesomeIcon icon={stairsIcon} /> {t("Floor")} {floor}/{building_floors}</span>
                    <span><FontAwesomeIcon icon={houseIcon} /> {t("Rooms")} {rooms}</span>
                    <span><i className="fa fa-solid fa-filter"></i> {t("Total_space")} {house_space} {t("M")}²</span>
                </div>
            </div>

        </a>
    )
}


export default HouseCard