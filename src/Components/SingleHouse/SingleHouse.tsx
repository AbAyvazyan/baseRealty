import './SingleHouse.css'
import {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faBed,faHome,faBuilding,faArrowsAltV,faBath } from '@fortawesome/free-solid-svg-icons';

import SingleHouseSlider from "./SingleHouseSlider/SingleHouseSlider";


const SingleHouse = () =>{

    const routeParameter = useParams()
    const [houseCode,setHouseCode] = useState('')

    useEffect(()=>{
        routeParameter.code && setHouseCode(routeParameter.code)
    },[])

    return(
        <section className={'single_house_section'}>
            {/*<h1>Code #{houseCode}</h1>*/}


            <div className={'single_house'}>
                <article>
                    <h3 style={{paddingLeft:'10%'}}>40, 3 Mesrop Mashtots Ave, Yerevan 0002</h3>
                    <div style={{width:'100%',height:'500px',padding:'33px 0'}}>
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
                </article>

                <aside>

                </aside>
            </div>
        </section>
    )
}


export default SingleHouse