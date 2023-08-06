import './SalePage.css'
import HouseCard from "../HouseCard";
import {ThouseCard} from "../HouseCard/HouseCard";
import uuid from "react-uuid";
import PaginationGroup from "../PaginationGroup/PaginationGroup";
import MainFiltering from "../MainFiltering";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";


const SalePage = () =>{
    const [houseInfo,setHouseInfo] = useState<any>({})
    const [pageInfo,setPageInfo] = useState<any>({})
    const [page,setPage] = useState(1)

    useEffect(() => {
        if (!page){
            return
        }

        fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}post/?property_description=Վաճառք&page=${page}`)
            .then((res) => res.json())
            .then((response) => {
                setPageInfo(response.pages)
                setHouseInfo(response.posts)
            });
    }, [page]);

    const changePage = (num:number)=>{
        setPage(num)
    }


    const { t } = useTranslation()
    return(
        <section className={'sale_page'}>
            <h1>{t("Sale_Page")}</h1>

            <div className={'sale_page_content'}>
                <article>
                    {houseInfo.length && houseInfo.map((house:any)=>{
                        return <HouseCard {...house} key={uuid()}/>
                    })}
                </article>


                <aside>
                    <MainFiltering/>
                </aside>
            </div>

            <PaginationGroup pageInfo={pageInfo} changePage={changePage}/>

        </section>
    )
}

export default SalePage