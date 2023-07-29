import './Daily.css'
import HouseCard from "../HouseCard";
import {ThouseCard} from "../HouseCard/HouseCard";
import uuid from "react-uuid";
import PaginationGroup from "../PaginationGroup/PaginationGroup";
import MainFiltering from "../MainFiltering";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";


const DailyPage = () =>{
    const [houseInfo,setHouseInfo] = useState<any>({})

    useEffect(() => {
        fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}post/`)
            .then((res) => res.json())
            .then((response) => setHouseInfo(response));
    }, []);


    const { t } = useTranslation()
    return(
        <section className={'daily_page'}>
            <h1>{t("Daily_Page")}</h1>

            <div className={'daily_page_content'}>
                <article>
                    {houseInfo.posts && houseInfo.posts.map((house:any)=>{
                        return <HouseCard {...house} key={uuid()}/>
                    })}
                </article>


                <aside>
                    <MainFiltering/>
                </aside>
            </div>

            <PaginationGroup/>
        </section>
    )
}

export default DailyPage