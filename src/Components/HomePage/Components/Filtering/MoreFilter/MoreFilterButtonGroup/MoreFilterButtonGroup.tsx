import * as React from "react";


const MoreFilterButtonGroup = () =>{
    return(
        <div className={'more_filter_button_group'}>
            <span>Height</span>
            <div className={'mf_button_part'}>
                <button>2.45m</button>
                <button>2.55m</button>
                <button>2.75m</button>
                <button>3m</button>
                <button>3.20m</button>
            </div>
        </div>
    )
}

export default MoreFilterButtonGroup