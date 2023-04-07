import './MoreFilter.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FC} from "react";
import * as React from "react";

import MoreFilterRangePart from "./MoreFilterRangePart/MoreFilterRangePart";
import MoreFilterButtonGroup from "./MoreFilterButtonGroup/MoreFilterButtonGroup";
import SingleCheck from "./SingleCheck/SingleCheck";
import MultipleChecks from "./MultipleChecks/MultipleChecks";


type TMoreFilter = {
    closeModalHandler:()=>void
}

const MoreFilter:FC<TMoreFilter> = ({closeModalHandler}) =>{
    return(
        <div className={'more_filter'}>
                <div className={'more_filter_upper_part'}>
                    <span>More Filters</span>
                    <span style={{cursor:'pointer'}} onClick={()=>closeModalHandler()}><FontAwesomeIcon icon={faXmark} /></span>
                </div>

                <div className={'more_filter_content'}>
                        <MoreFilterRangePart name={'Area'}/>
                        <MoreFilterRangePart name={'Floor'}/>
                        <MoreFilterRangePart name={'Building Floors'}/>

                        <MoreFilterButtonGroup/>
                        <MoreFilterButtonGroup/>
                        <MoreFilterButtonGroup/>

                        <SingleCheck/>

                        <MultipleChecks/>

                        <SingleCheck/>
                        <SingleCheck/>
                    </div>
                </div>
    )
}


export default MoreFilter