import {FC} from "react";
import RangeSlider from "../Ranges/Ranges";
import * as React from "react";

type TMoreFilterRange = {
    name:string
}

const MoreFilterRangePart:FC<TMoreFilterRange> = ({name}) =>{
    return(
        <div className={'more_filter_range_part'}>
            <span>{name}</span>
            <div className="more_filter_from_to">
                <div>
                    <input
                        type="number"
                        placeholder="from"
                    />
                    <input
                        type="number"
                        placeholder="to"
                    />
                </div>

                <RangeSlider/>
            </div>
        </div>
    )
}

export default MoreFilterRangePart