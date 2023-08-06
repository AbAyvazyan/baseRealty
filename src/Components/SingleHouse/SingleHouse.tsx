import './SingleHouse.css'
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faBed, faHome, faBuilding, faArrowsAltV, faBath, faCheck} from '@fortawesome/free-solid-svg-icons';

import SingleHouseSlider from "./SingleHouseSlider/SingleHouseSlider";
import * as React from "react";
import LittleHouseCard from "./LittleHouseCard/LittleHouseCard";
import HouseAdvantages from "./HouseAdvantages/HouseAdvantages";
import MapComponent from "../HouseMap/HouseMap";
import {useTranslation} from "react-i18next";


const SingleHouse = () => {

    const routeParameter = useParams()
    const [houseCode, setHouseCode] = useState('')

    const {t} = useTranslation()

    const yourName = t('Your_Number')


    const [isLoading, setIsLoading] = useState(true);
    const [houseInfo, setHouseInfo] = useState<any>(null);

    useEffect(() => {
        if (routeParameter.code !== undefined) {
            fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}post/${routeParameter.code}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((response) => {
                    setIsLoading(false);
                    if (response !== undefined) {
                        setHouseInfo(response);
                    }
                })
                .catch((error) => {
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
            setHouseInfo(null);
        }
    }, [routeParameter.code]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!houseInfo) {
        return <div>No data found.</div>;
    }

    return (<section className={'single_house_section'}>
            <h1>Apartment for {houseInfo.property_description}</h1>

            <div className={'single_house'}>
                <article>
                    <h3 className={'single_house_heading'}>
                        <span>{houseInfo.address}</span><span>{t("Code")}:{houseInfo.cod}</span></h3>
                    <div style={{width: '100%', height: '600px', padding: '33px 0', marginBottom: '5vh'}}>
                        <SingleHouseSlider imagesData={houseInfo.images}/>
                    </div>

                    <div className={'single_house_options'}>
                        <div>
                            <div className={'single_house_option_icons'}>
                                <span><FontAwesomeIcon icon={faBed}/>{houseInfo.room} {t("Rooms")}</span>
                                <span><FontAwesomeIcon icon={faHome}/> {houseInfo.total_area} {t("M")}²</span>
                                <span><FontAwesomeIcon
                                    icon={faBuilding}/> {houseInfo.floors_number}/{houseInfo.building_floors_number}</span>
                                <span><FontAwesomeIcon icon={faArrowsAltV}/> {houseInfo.celing_hegiht}{t("M")}</span>
                                <span><FontAwesomeIcon icon={faBath}/> {houseInfo.bathroom_count}</span>
                            </div>
                            <div>
                                <span>{t("Building_Type")} : {houseInfo.building_type}</span>
                                <span>{t("Renovation")} : {houseInfo.state}</span>
                            </div>
                        </div>
                        <div>
                            <span className={'single_house_price'}>{t("Price")}: ${houseInfo.price}</span>
                        </div>
                    </div>


                    <div className={'single_house_about'}>
                        <h3 style={{textAlign: 'center'}}>{t("About")}</h3>

                        <p>{houseInfo.description} </p>
                    </div>


                    <HouseAdvantages sectionName={'FACILITIES'}
                                     advantages={houseInfo.comunal}/>
                    <HouseAdvantages sectionName={'More_Information'}
                                     advantages={houseInfo.additional_conveniences}/>


                    <div className={'number_for_contact'}>
                        <div><input type="text" placeholder={yourName}/></div>
                        <div>
                            <div>{t("Contact_Me")}</div>
                        </div>
                    </div>

                    <div className={'single_house_map_part'}>
                        <MapComponent address={houseInfo.address}/>
                    </div>

                </article>

                <aside>
                    <h3 style={{textAlign: 'center'}}>{t("BEST_OFFERS!")}</h3>

                    <div className={'single_house_aside_content'}>
                        <LittleHouseCard/>
                        <LittleHouseCard/>
                        <LittleHouseCard/>
                    </div>
                </aside>
            </div>
        </section>)
}


export default SingleHouse