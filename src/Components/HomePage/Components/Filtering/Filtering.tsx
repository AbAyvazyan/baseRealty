import './Filtering.css'


import HouseButtons from "./HouseBottons/HouseButtons";
import InputFilterField from "./InputFilterField";

const  Filtering = () =>{

    return (
        <div className='home_page_filtering'>

            <div>

                <HouseButtons/>

            </div>

            <div>

                <InputFilterField/>

            </div>

            <div>
                <div className='single_button filter_button' style={{marginRight:'5px'}}><i className="fa fa-solid fa-filter"></i> </div>
                <div className='single_button search_button'> Search </div>
            </div>
        </div>
    )
}

export default Filtering