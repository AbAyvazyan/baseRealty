import './Filtering.css'


import HouseButtons from "./HouseBottons/HouseButtons";
import InputFilterField from "./InputFilterField";
import MoreFilter from "./MoreFilter/MoreFlter";
import {useState} from "react";

const  Filtering = () =>{

    const [moreFilterModal,setMoreFilterModal] = useState(false)

    const moreFilterModalOpenHandler = () =>{
        setMoreFilterModal(true)
    }

    const moreFilterModalCloseHandler = () =>{
        setMoreFilterModal(false)
    }

    return (
        <>
        <div className='home_page_filtering'>

            <div>

                <HouseButtons/>

            </div>

            <div>

                <InputFilterField/>

            </div>

            <div>
                <div className='single_button filter_button' onClick={()=>moreFilterModalOpenHandler()} style={{marginRight:'5px'}}><i className="fa fa-solid fa-filter"></i> </div>
                <div className='single_button search_button'> Search </div>
            </div>


        </div>

            {moreFilterModal && <MoreFilter closeModalHandler={moreFilterModalCloseHandler}/>}
        </>
    )
}

export default Filtering