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
                        <div className={'mf_all'}>
                            <span>Street</span>

                            <div>
                                <input type="text" placeholder={'Street'}/>
                            </div>
                        </div>
                        <MoreFilterRangePart name={'Floor'}/>
                        <MoreFilterRangePart name={'Building Floors'}/>

                        <MoreFilterButtonGroup/>


                        <MultipleChecks/>


                    <div className={'multiple_checks mf_all'}>
                        <div>Renovation</div>
                        <div className={'multiple_house_types_checks'}>
                            <label>
                                <input type="checkbox"/>Zero Condition
                            </label>

                            <label>
                                <input type="checkbox"/>Newly repaired
                            </label>

                            <label>
                                <input type="checkbox"/>Good
                            </label>

                            <label>
                                <input type="checkbox"/>Old Renovation
                            </label>
                        </div>
                    </div>


                        <SingleCheck/>
                    </div>
                </div>
    )
}


export default MoreFilter