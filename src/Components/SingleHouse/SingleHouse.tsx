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







const SingleHouse = () =>{

    const routeParameter = useParams()
    const [houseCode,setHouseCode] = useState('')

    useEffect(()=>{
        routeParameter.code && setHouseCode(routeParameter.code)
    },[])

    return(
        <section className={'single_house_section'}>
            <h1>Apartment for sale</h1>

            <div className={'single_house'}>
                <article>
                    <h3 className={'single_house_heading'}><span>40, 3 Mesrop Mashtots Ave, Yerevan 0002</span><span>Code:{houseCode}</span></h3>
                    <div style={{width:'100%',height:'600px',padding:'33px 0',marginBottom:'5vh'}}>
                        <SingleHouseSlider/>
                    </div>

                    <div className={'single_house_options'}>
                        <div>
                            <div className={'single_house_option_icons'}>
                                <span><FontAwesomeIcon icon={faBed} /> 3 rooms</span>
                                <span><FontAwesomeIcon icon={faHome} /> 333 M²</span>
                                <span><FontAwesomeIcon icon={faBuilding} /> 3/5</span>
                                <span><FontAwesomeIcon icon={faArrowsAltV } /> 3m</span>
                                <span><FontAwesomeIcon icon={faBath } /> 3</span>
                            </div>
                            <div>
                                <span>Building Type : Monolith</span>
                                <span>Renovation : Newly repaired</span>
                            </div>
                        </div>
                        <div>
                            <span className={'single_house_price'}>Price: $3.333.333</span>
                        </div>
                    </div>


                    <div className={'single_house_about'}>
                        <h3 style={{textAlign:'center'}}>About</h3>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged </p>
                    </div>


                   <HouseAdvantages sectionName={'FACILITIES'} advantages={['Gas','Electricity','Heating','Internet','Hot Water','Sewerage',' Canalization','Water']}/>
                   <HouseAdvantages sectionName={'More Information'} advantages={['FURNITURE','SUNNY','SUNNY','VIEW','OPEN BALCONY','EQUIPMENT','  BUS STATION','SCHOOL']}/>


                    <div className={'number_for_contact'}>
                            <div><input type="text" placeholder={'Your Number'}/></div>
                            <div><div>Contact Me</div></div>
                    </div>

                    <div className={'single_house_map_part'}>
                        <MapComponent address={'Anastas Mikoyan 2/2'}/>
                    </div>

                </article>

                <aside>
                    <h3 style={{textAlign:'center'}}>Best Offers</h3>

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