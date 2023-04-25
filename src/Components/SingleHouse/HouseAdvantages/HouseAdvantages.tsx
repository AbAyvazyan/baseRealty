import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import {FC} from "react";


type TAdvantages = {
    sectionName:string,
    advantages:string[]
}

const HouseAdvantages:FC<TAdvantages> = ({sectionName,advantages}) =>{
    return(
        <div  className={'single_house_advantages'}>
            <h4 style={{textAlign:'center',marginTop:'5vh'}}>{sectionName}</h4>
            <div className={'single_house_advantages_part'}>

                {advantages.map((elem,index)=>{
                    return <span key={index}><FontAwesomeIcon icon={faCheck} style={{color:'rgb(122,141,51)'}}/> {elem}</span>
                })}

            </div>
        </div>
    )
}

export default HouseAdvantages