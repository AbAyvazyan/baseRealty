import * as React from 'react';
import './MultipleSelectCheckmarks.css'
import {FC, useState} from "react";




interface TSelect {
    holder:string
}

const MultipleSelectCheckmarks:FC<TSelect> = ({holder}) => {

    const [arrowPos,setArrowPos] = useState(false)

    const openModalHandler = () =>{
        setArrowPos(!arrowPos)
    }

    return(
        <div className={'multiple_select'} onClick={()=>openModalHandler()}>
            {holder}
            <span className={arrowPos ? 'select_arrow_clicked' : 'select_arrow'}><i className="fa fa-angle-down"></i></span>
        </div>
    )
}

export default MultipleSelectCheckmarks;