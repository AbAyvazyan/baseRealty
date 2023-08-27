import './HouseCard.css'

import {faStairs, faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FC} from "react";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import logo from '../../assets/images/logo.png'

const stairsIcon: IconProp = faStairs;
const houseIcon: IconProp = faHouse;

export type ThouseCard = {
    image: string,
    house_type: string,
    cod: string,
    building_type: string,
    addres: string,
    state: string,
    price: number,
    floors_number: number,
    building_floors_number: number,
    room: number,
    total_area: number,
    id: string,
    property_type: string
}

const HouseCard: FC<ThouseCard> = (
    {
        image, house_type, cod, building_type,
        addres, state, price, floors_number,
        building_floors_number, room, total_area, id, property_type
    }
) => {

    const navigate = useNavigate()
    const {t} = useTranslation()


    return (
        <a href={`/house/${id}`} target={'_blank'} className={'house_card'}>
            <div className={'house_card_image'}
                 style={{backgroundImage: `url(${image ? `http://${image}` : logo})`}}></div>
            <div className={'house_card_about'}>
                <div className={'house_card_code_part'} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>{house_type}</span> <span>{t("Code")}: {cod}</span></div>

                <div className={'house_card_main_text_part'}>

                    <div>
                        <p className={'house_card_just_text'}>{t("Build_type")} - {t(property_type!=='Հողատարածք'?building_type:property_type)}</p>
                        <p className={'house_card_location_text'}> {t(addres)}</p>
                        {property_type!=='Հողատարածք'&&<p className={'house_card_just_text'}> {t("Condition")} - {t(state)}</p>}
                    </div>

                    <div className={'house_card_about_price'}>${price}</div>

                </div>

                <div className={'house_card_info'}>
                    {property_type !== 'Հողատարածք' && <span><FontAwesomeIcon
                        icon={stairsIcon}/> {t("Floor")} {floors_number}/{building_floors_number}</span>}
                    {property_type !== 'Հողատարածք' &&
                        <span><FontAwesomeIcon icon={houseIcon}/> {t("Rooms")} {room}</span>}
                    <span><i className="fa fa-solid fa-filter"></i> {t("Total_space")} {total_area} {t("M")}²</span>
                </div>
            </div>

        </a>
    )
}


export default HouseCard