import './SingleHouse.css'
import {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faBed,faHome,faBuilding,faArrowsAltV,faBath,faCheck } from '@fortawesome/free-solid-svg-icons';

import SingleHouseSlider from "./SingleHouseSlider/SingleHouseSlider";
import YandexMap from "../ContactPage/OurLocation/OurLocation";
import * as React from "react";
import LittleHouseCard from "./LittleHouseCard/LittleHouseCard";







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
                    <h3 style={{width:'100%',padding:' 0 10%',display:'flex',justifyContent:'space-between'}}><span>40, 3 Mesrop Mashtots Ave, Yerevan 0002</span><span>Code:{houseCode}</span></h3>
                    <div style={{width:'100%',height:'600px',padding:'33px 0',marginBottom:'5vh'}}>
                        <SingleHouseSlider/>
                    </div>

                    <div className={'single_house_options'}>
                        <div>
                            <span><FontAwesomeIcon icon={faBed} /> 3 rooms</span>
                            <span><FontAwesomeIcon icon={faHome} /> 333 M²</span>
                            <span><FontAwesomeIcon icon={faBuilding} /> 3/5</span>
                            <span><FontAwesomeIcon icon={faArrowsAltV } /> 3m</span>
                            <span><FontAwesomeIcon icon={faBath } /> 3</span>
                        </div>
                        <div>
                            <span style={{fontSize:'27px'}}>Price: $3.333.333</span>
                        </div>
                    </div>


                    <div  className={'single_house_advantages'}>
                        <h4 style={{textAlign:'center',marginTop:'5vh'}}>More Information</h4>
                        <div className={'single_house_advantages_part'}>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                            <span><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> Balcon</span>
                        </div>
                    </div>



                    <div className={'single_house_map_part'}>
                        <YandexMap address={'40, 3 Mesrop Mashtots Ave, Yerevan 0002'}/>
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