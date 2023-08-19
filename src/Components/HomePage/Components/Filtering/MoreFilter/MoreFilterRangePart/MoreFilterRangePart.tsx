import {FC, useEffect, useState} from "react";
import RangeSlider from "../Ranges/Ranges";
import * as React from "react";
import {useTranslation} from "react-i18next";
import {useFilterContext} from "../../../../../../Contexts/FilterContext";

type TMoreFilterRange = {
    name:string
}

const MoreFilterRangePart:FC<TMoreFilterRange> = ({name}) =>{

    const [fromValue,setFromValue] = useState<any>('')
    const [toValue,setToValue] = useState<any>('')
    const {filterState,updateFilterState} = useFilterContext()


    const {t} = useTranslation()

    const nameTranslate = t(name)
    const from = t('from')
    const to = t('to')


    useEffect(()=>{
        updateFilterState({...filterState,[name.toLowerCase()]:[fromValue,toValue]})
    },[fromValue,toValue])
    return(
        <div className={'more_filter_range_part  mf_all'}>
            <div>{nameTranslate}</div>
            <div className="more_filter_from_to">
                <div>
                    <input
                        type="number"
                        onChange={(e)=>setFromValue(+e.target.value)}
                        value={fromValue}
                        placeholder={from}
                    />
                    <input
                        type="number"
                        onChange={(e)=>setToValue(+e.target.value)}
                        value={toValue?toValue:fromValue}
                        placeholder={to}
                    />
                </div>

                {/*<RangeSlider/>*/}
            </div>
        </div>
    )
}

export default MoreFilterRangePart