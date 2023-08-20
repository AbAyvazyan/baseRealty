import './SalePage.css'
import HouseCard from "../HouseCard";
import {ThouseCard} from "../HouseCard/HouseCard";
import uuid from "react-uuid";
import PaginationGroup from "../PaginationGroup/PaginationGroup";
import MainFiltering from "../MainFiltering";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useFilterContext} from "../../Contexts/FilterContext";


const SalePage = () => {
    const [houseInfo, setHouseInfo] = useState<any>({})
    const [pageInfo, setPageInfo] = useState<any>({})
    const [page, setPage] = useState(1)
    const {filterState,updateFilterState} = useFilterContext()

    useEffect(() => {
        if (!page||!filterState) {
            return
        }

        const apiUrl = process.env.REACT_APP_RUN_ENVIRONMENT;
        const fetchUrl = new URL(`post/?property_description=Վաճառք&page=${page}`, apiUrl);

        fetchUrl.searchParams.append('cod', filterState.code);

        fetchUrl.searchParams.append('property_type', filterState.property_type.join(','));
        fetchUrl.searchParams.append('community', filterState.place.join(','));
        if (filterState.area[0] !== undefined) {
            fetchUrl.searchParams.append('from_total_area', filterState.area[0].toString());
        }
        if (filterState.area[1] !== undefined) {
            fetchUrl.searchParams.append('to_total_area', filterState.area[1].toString());
        }

        if (filterState.price[0] !== undefined) {
            fetchUrl.searchParams.append('from_price', filterState.price[0].toString());
        }
        if (filterState.price[1] !== undefined) {
            fetchUrl.searchParams.append('to_price', filterState.price[1].toString());
        }

        if (filterState.newly_built) {
            fetchUrl.searchParams.append('building_type', 'Նորակառույց');
        }

        if (filterState.floor.length) {
            fetchUrl.searchParams.append('from_floors_number', filterState.floor[0].toString());
        }
        if (filterState.floor.length) {
            fetchUrl.searchParams.append('to_floors_number', filterState.floor[1].toString());
        }

        if (filterState.building_floors[0] !== undefined) {
            fetchUrl.searchParams.append('from_building_floors_number', filterState.building_floors[0].toString());
        }
        if (filterState.building_floors[1] !== undefined) {
            fetchUrl.searchParams.append('to_building_floors_number', filterState.building_floors[1].toString());
        }

            fetchUrl.searchParams.append('building_type', filterState.house_type.toString());
            fetchUrl.searchParams.append('state', filterState.renovation.toString());




        fetch(fetchUrl.toString())
            .then((res) => res.json())
            .then((response) => {
                setPageInfo(response.pages)
                setHouseInfo(response.posts)
            }).then(()=>updateFilterState({
            property_type: [],
            place: [],
            rooms: [],
            area: [],
            price: [],
            newly_built:false,
            floor: [],
            building_floors: [],
            height: [],
            house_type: [],
            renovation: [],
            code: "",
        }));
    }, [page]);

    const changePage = async(num: number) => {
        await setPage(NaN)
        setPageInfo(null)
        setHouseInfo([])
        setPage(num)
        console.log(num)
    }

    console.log(page)


    const {t} = useTranslation()
    return (
        <section className={'sale_page'}>
            <h1>{t("Sale_Page")}</h1>

            <div className={'sale_page_content'}>
                <article>
                    {houseInfo.length ? houseInfo.map((house: any) => {
                        return <HouseCard {...house} key={uuid()}/>
                    })
                    :
                    <div className={"house_card"} style={{justifyContent:'center',alignItems:'center',fontSize:'40px',fontWeight:'500'}}>
                        No Result
                    </div>}
                </article>


                <aside>
                    <MainFiltering setPage={changePage}/>
                </aside>
            </div>

            {houseInfo.length ? <PaginationGroup pageInfo={pageInfo} changePage={changePage}/> : <></>}


        </section>
    )
}

export default SalePage