import './LittleHouseCard.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const LittleHouseCard = () =>{

    const openHouseTabHandler = () =>{
        window.open(`https://base-realty.vercel.app/house/dp777333`)
    }

    return(
        <div className={'little_house_card'} onClick={()=>openHouseTabHandler()}>
            <div className={'little_house_image'} style={{backgroundImage:`url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80)`}}></div>
            <div className={'little_house_info'}>
                <p className={'little_house_main_heading'} ><span>Price:$333333</span> <span style={{fontSize:'15px'}}>#dp777333</span></p>
                <p><FontAwesomeIcon icon={faLocationDot} />Ajapnyak</p>
            </div>
        </div>
    )
}


export default LittleHouseCard