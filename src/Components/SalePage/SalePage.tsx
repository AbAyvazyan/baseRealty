import "./SalePage.css";
import HouseCard from "../HouseCard";
import uuid from "react-uuid";
import PaginationGroup from "../PaginationGroup/PaginationGroup";
import MainFiltering from "../MainFiltering";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useFilterContext} from "../../Contexts/FilterContext";
import {urlFetchHandler} from "../../helpers/fetchUrl";
import {FallingLines} from 'react-loader-spinner'

const SalePage = () => {
    const [houseInfo, setHouseInfo] = useState<any>({});
    const [pageInfo, setPageInfo] = useState<any>({});
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(true);
    const {filterState, updateFilterState} = useFilterContext();

    useEffect(() => {
        if (!page || !filterState) {
            return;
        }

        const fetchUrl = urlFetchHandler("Վաճառք", filterState, page);

        fetch(fetchUrl.toString())
            .then((res) => res.json())
            .then((response) => {
                setPageInfo(response.pages);
                setHouseInfo(response.posts);
            })
            .then(() => {
                    updateFilterState({
                        property_type: [],
                        place: [],
                        rooms: [],
                        area: [],
                        price: [],
                        newly_built: false,
                        floor: [],
                        building_floors: [],
                        height: [],
                        house_type: [],
                        renovation: [],
                        code: "",
                    })
                setIsFetching(false)
                }
            );
    }, [page]);

    const changePage = async (num: number) => {
        await setPage(NaN);
        setPageInfo(null);
        setHouseInfo([]);
        setPage(num);
    };

    const {t} = useTranslation();
    return (
        <section className={"sale_page"}>
            <h1>{t("Sale_Page")}</h1>

            <div className={"sale_page_content"}>
                <article>
                    {!isFetching ? (
                        houseInfo.length ? (
                            houseInfo.map((house: any) => {
                                return <HouseCard {...house} key={uuid()}/>;
                            })
                        ) : (
                            <div
                                className={"house_card"}
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "40px",
                                    fontWeight: "500",
                                }}
                            >
                                No Result
                            </div>
                        )
                    ) : (
                        <FallingLines
                            color="#0c333a"
                            width="100"
                            visible={true}
                        />
                    )}
                </article>

                <aside>
                    <MainFiltering setPage={changePage}/>
                </aside>
            </div>

            {houseInfo.length ? (
                <PaginationGroup pageInfo={pageInfo} changePage={setPage}/>
            ) : (
                <></>
            )}
        </section>
    );
};

export default SalePage;
