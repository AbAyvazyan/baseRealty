import "./LittleHouseCard.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import {FC} from "react";

type TLittleHouseCard = {
    id:string
    image:string
    price:number
    code:string
    address:string
};

const LittleHouseCard:FC<TLittleHouseCard> = ({id,price,code,address,image}) => {
    const {t} = useTranslation();

    const openHouseTabHandler = () => {
        window.open(`https://base-realty.vercel.app/house/${id}`);
    };

    return (
        <div className={"little_house_card"} onClick={() => openHouseTabHandler()}>
            <div
                className={"little_house_image"}
                style={{
                    backgroundImage: `url(http://${image})`,
                }}
            ></div>
            <div className={"little_house_info"}>
                <p className={"little_house_main_heading"}>
                    <span>{t("Price")}:${price}</span>{" "}
                    <span style={{fontSize: "15px"}}>#{code}</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faLocationDot}/>
                    {address}
                </p>
            </div>
        </div>
    );
};

export default LittleHouseCard;
