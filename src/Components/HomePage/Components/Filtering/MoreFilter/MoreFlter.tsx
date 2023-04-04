import './MoreFilter.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FC} from "react";


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
        </div>
    )
}


export default MoreFilter