import './Filtering.css'

import HouseButtons from "./HouseBottons/HouseButtons";
import InputFilterField from "./InputFilterField";

const  Filtering = () =>{

    return (
        <div className={'home_page_filtering'}>

            <div>

                <HouseButtons/>

            </div>

            <div>

                <InputFilterField/>

            </div>

            <div>
                <div className={'search_button'}> Search </div>
            </div>
        </div>
    )
}

export default Filtering