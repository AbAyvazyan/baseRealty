import './SingleHouse.css'
import {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faBed,faHome,faBuilding,faArrowsAltV,faBath,faCheck } from '@fortawesome/free-solid-svg-icons';

import SingleHouseSlider from "./SingleHouseSlider/SingleHouseSlider";
import YandexMap from "../ContactPage/OurLocation/OurLocation";
import * as React from "react";
import LittleHouseCard from "./LittleHouseCard/LittleHouseCard";
import HouseAdvantages from "./HouseAdvantages/HouseAdvantages";
import MapComponent from "../HouseMap/HouseMap";
import {log} from "util";
import {useTranslation} from "react-i18next";







const SingleHouse = () =>{

    const routeParameter = useParams()
    const [houseCode,setHouseCode] = useState('')

    const { t } = useTranslation()

    const yourName = t('Your_Number')

    const handleSendMail = () => {

        const url = 'https://api.emailjs.com/api/v1.0/email/send';

        const data = {
            service_id: 'service_p13pwe8',
            template_id: 'template_byqww2o',
            user_id: '54pI2oNq9FQygveb4',
            template_params: {
                from_name: 'Client',
                message: 'message',
            },
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res=>console.log('elav'))
            .catch(err=> console.log(err))

    }


    useEffect(()=>{
        routeParameter.code && setHouseCode(routeParameter.code)
    },[])

    return(
        <section className={'single_house_section'}>
            <h1>Apartment for sale</h1>

            <div className={'single_house'}>
                <article>
                    <h3 className={'single_house_heading'}><span>40, 3 Mesrop Mashtots Ave, Yerevan 0002</span><span>{t("Code")}:{houseCode}</span></h3>
                    <div style={{width:'100%',height:'600px',padding:'33px 0',marginBottom:'5vh'}}>
                        <SingleHouseSlider/>
                    </div>

                    <div className={'single_house_options'}>
                        <div>
                            <div className={'single_house_option_icons'}>
                                <span><FontAwesomeIcon icon={faBed} /> 3 {t("Rooms")}</span>
                                <span><FontAwesomeIcon icon={faHome} /> 333 {t("M")}²</span>
                                <span><FontAwesomeIcon icon={faBuilding} /> 3/5</span>
                                <span><FontAwesomeIcon icon={faArrowsAltV } /> 3{t("M")}</span>
                                <span><FontAwesomeIcon icon={faBath } /> 3</span>
                            </div>
                            <div>
                                <span>{t("Building_Type")} : Monolith</span>
                                <span>{t("Renovation")} : Newly repaired</span>
                            </div>
                        </div>
                        <div>
                            <span className={'single_house_price'}>{t("Price")}: $3.333.333</span>
                        </div>
                    </div>


                    <div className={'single_house_about'}>
                        <h3 style={{textAlign:'center'}}>{t("About")}</h3>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged </p>
                    </div>


                   <HouseAdvantages sectionName={'FACILITIES'} advantages={['Gas','Electricity','Heating','Internet','Hot Water','Sewerage',' Canalization','Water']}/>
                   <HouseAdvantages sectionName={'More_Information'} advantages={['FURNITURE','SUNNY','SUNNY','VIEW','OPEN BALCONY','EQUIPMENT','  BUS STATION','SCHOOL']}/>


                    <div className={'number_for_contact'}>
                            <div><input type="text" placeholder={yourName}/></div>
                            <div><div  onClick={handleSendMail}>{t("Contact_Me")}</div></div>
                    </div>

                    <div className={'single_house_map_part'}>
                        <MapComponent address={'Anastas Mikoyan 2/2'}/>
                    </div>

                </article>

                <aside>
                    <h3 style={{textAlign:'center'}}>{t("BEST_OFFERS!")}</h3>

                    <div className={'single_house_aside_content'}>
                        <LittleHouseCard/>
                        <LittleHouseCard/>
                        <LittleHouseCard/>
                    </div>
                </aside>
            </div>
        </section>
    )
}


export default SingleHouse