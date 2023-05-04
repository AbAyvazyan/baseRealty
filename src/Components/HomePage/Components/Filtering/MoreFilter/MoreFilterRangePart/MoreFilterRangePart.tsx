import {FC} from "react";
import RangeSlider from "../Ranges/Ranges";
import * as React from "react";
import {useTranslation} from "react-i18next";

type TMoreFilterRange = {
    name:string
}

const MoreFilterRangePart:FC<TMoreFilterRange> = ({name}) =>{

    const {t} = useTranslation()

    const nameTranslate = t(name)
    const from = t('from')
    const to = t('to')
    return(
        <div className={'more_filter_range_part  mf_all'}>
            <div>{nameTranslate}</div>
            <div className="more_filter_from_to">
                <div>
                    <input
                        type="number"
                        placeholder={from}
                    />
                    <input
                        type="number"
                        placeholder={to}
                    />
                </div>

                <RangeSlider/>
            </div>
        </div>
    )
}

export default MoreFilterRangePart