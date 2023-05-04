import './HouseCard.css'

import { faStairs,faHouse,faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {FC} from "react";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";

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

    const navigate = useNavigate()
    const { t } = useTranslation()


    const singleHouseRouteHandler = () =>{
        window.open(`https://base-realty.vercel.app/house/${code}`, '_blank');
    }


    return(
        <div className={'house_card'} onClick={()=>singleHouseRouteHandler()}>
            <div className={'house_card_image'} style={{backgroundImage:`url(${src})`}}></div>
            <div className={'house_card_about'}>
                <div className={'house_card_code_part'} style={{display:'flex',justifyContent:'space-between'}}><span>{house_type}</span>  <span>{t("Code")}: {code}</span></div>

                <div className={'house_card_main_text_part'} >

                    <div>
                        <p className={'house_card_just_text'}>{t("Build type")} - {build_type}</p>
                        <p className={'house_card_location_text'}> {location}</p>
                        <p className={'house_card_just_text'}> {t("Condition")} - {condition}</p>
                    </div>

                    <div className={'house_card_about_price'}>${price}</div>

                </div>

                <div className={'house_card_info'}>
                    <span><FontAwesomeIcon icon={stairsIcon} /> {t("Floor")} {floor}/{building_floors}</span>
                    <span><FontAwesomeIcon icon={houseIcon} /> {t("Rooms")} {rooms}</span>
                    <span><i className="fa fa-solid fa-filter"></i> {t("Total_space")} {house_space} {t("M")}²</span>
                </div>
            </div>


        </div>
    )
}


export default HouseCard