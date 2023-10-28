import "./Dashboard.css";
import withAuthorization from "../../hoc/autorization";
import {useEffect, useState, useRef, ChangeEvent} from "react";
import {useNavigate} from "react-router-dom";
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {convertToISODate, getDateDifference} from "../../helpers/dateManipulators";

const statuses = {
    0: 'Ակտիվ',
    1: 'Ժամանակավոր',
    2: 'Վաճառված',
    3: 'Չանրադառնալ',
}

const Dashboard = () => {
    const [houseInfo, setHouseInfo] = useState<any>([]);
    const [pageInfo, setPageInfo] = useState<any>({})
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [page, setPage] = useState(1)
    const [allPagesCount, setAllPagesCount] = useState(0)
    const [sortValue, setSortValue] = useState<string>('')

    const [isAdmin, setIsAdmin] = useState(false);
    const [isBrokerLead, setIsBrokerLead] = useState(false);
    const [agentLocation, setAgentLocation] = useState('');

    useEffect(() => {
        const storageUser = localStorage.getItem('user');

        if (storageUser) {
            const user = JSON.parse(storageUser);
            setIsAdmin(user.role === 'Super Admin');
            setIsBrokerLead(user.role === 'Broker Lead');
            setAgentLocation(user.community);
        }
    }, []);

    useEffect(() => {
        if (!page) {
            return
        }

        const token = JSON.parse(localStorage.getItem("userToken") as string);


        fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}post/?page=${page}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((response) => {
                response.posts && setHouseInfo((prevState: any) => [...prevState, ...response.posts])
                response.pages && setPageInfo(response.pages)
                response.all_count && setAllPagesCount(response.all_count)
            });
    }, [page]);

    const onEditButtonClickHandler = (houseId: string) => {
        navigate(`/editPost/${houseId}`);
    };

    const handleScroll = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const isScrolledToBottom =
                container.scrollHeight - container.scrollTop === container.clientHeight;

            if (isScrolledToBottom) {
                setPage(prevState => prevState + 1)
            }
        }
    };


    useEffect(() => {

        const refValue = containerRef.current

        if (!pageInfo.has_next) {
            return
        }
        if (refValue) {
            refValue.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (refValue) {
                refValue.removeEventListener('scroll', handleScroll);
            }
        };
    }, [pageInfo.has_next]);

    useEffect(() => {
        const sortHouseInfo = () => {
            setHouseInfo((prevState:any) => {
                const sortedHouseInfo = [...prevState];

                if (sortValue === 'priceLowToHigh') {
                    sortedHouseInfo.sort((a, b) => (a.price || 0) - (b.price || 0));
                } else if (sortValue === 'priceHighToLow') {
                    sortedHouseInfo.sort((a, b) => (b.price || 0) - (a.price || 0));
                } else {
                    sortedHouseInfo.sort((a, b) => (b[sortValue] || '').localeCompare(a[sortValue] || ''));
                }

                return sortedHouseInfo;
            });
        };

        sortHouseInfo(); // Initial sorting

        // Ensure that the array is sorted whenever sortValue or houseInfo changes
    }, [sortValue, houseInfo.toString()]);


    return (
        <section className={"dashboard"}>
            <div className={'go_back'} onClick={() => navigate('/admin-panel')}>Admin Panel</div>
            <div className={"dashboard_part"}>
                <div className={"dashboard_tables"} ref={containerRef}>
                    <div>
                        {/*    <div>*/}
                        {/*        <select>*/}
                        {/*            <option value="sale">Վաճառք</option>*/}
                        {/*            <option value="rent">Վարձ</option>*/}
                        {/*            <option value="daily">Օրավարձ</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <input type="text" placeholder={'Code'}/>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <select>*/}
                        {/*            <option value="sale">Բնակարան</option>*/}
                        {/*            <option value="rent">Առանձնատուն</option>*/}
                        {/*            <option value="daily">Կոմերցիոն</option>*/}
                        {/*            <option value="daily">Հողատարածք</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <select>*/}
                        {/*            <option value="sale">Ակտիվ</option>*/}
                        {/*            <option value="rent">Ժամանակավոր դադար</option>*/}
                        {/*            <option value="daily">Վաճառված</option>*/}
                        {/*            <option value="daily">Չանրադառնալ</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <select>*/}
                        {/*            <option value="sale">Վաճառք</option>*/}
                        {/*            <option value="rent">Վարձ</option>*/}
                        {/*            <option value="daily">Օրավարձ</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <select>*/}
                        {/*            <option value="arabkir">Արաբկիր</option>*/}
                        {/*            <option value="kentron">Կենտրոն</option>*/}
                        {/*            <option value="davtashen">Դավթաշեն</option>*/}
                        {/*            <option value="ajapnyak">Աջափնյակ</option>*/}
                        {/*            <option value="avan">Ավան</option>*/}
                        {/*            <option value="erebuni">Էրեբունի</option>*/}
                        {/*            <option value="qanaqer">Քանաքեռ-Զեյթուն</option>*/}
                        {/*            <option value="malatia">Մալաթիա-Սեբաստիա</option>*/}
                        {/*            <option value="norq-marash">Նորք-Մարաշ</option>*/}
                        {/*            <option value="nor-norq">Նոր Նորք</option>*/}
                        {/*            <option value="nubarashen">Նուբարաշեն</option>*/}
                        {/*            <option value="shengavit">Շենգավիթ</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <input type="text" placeholder={'Code'}/>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <input type="text" placeholder={'Code'}/>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <input type="text" placeholder={'from'}/>*/}
                        {/*        <input type="text" placeholder={'from'}/>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <input type="text" placeholder={'from'}/>*/}
                        {/*        <input type="text" placeholder={'to'}/>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <input type="text" placeholder={'from'}/>*/}
                        {/*        <input type="text" placeholder={'to'}/>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <input type="text" placeholder={'from'}/>*/}
                        {/*        <input type="text" placeholder={'to'}/>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <input type="text" placeholder={'from'}/>*/}
                        {/*        <input type="text" placeholder={'to'}/>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <select>*/}
                        {/*            <option value="old">հին վերանորոգում</option>*/}
                        {/*            <option value="zero-cond">զրոական</option>*/}
                        {/*            <option value="old<">վերանորոգում 10 ավել</option>*/}
                        {/*            <option value="old">վերանորոգում 5-10</option>*/}
                        {/*            <option value="good">վերանորոգում 2-5</option>*/}
                        {/*            <option value="good">վերանորոգված 2 տարի</option>*/}
                        {/*            <option value="new">վերանորոգված չբնակեցված</option>*/}
                        {/*            <option value="new">վերանորոգված դիզաիներական ոճով</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <select>*/}
                        {/*            <option value="qare">Ստալինկա</option>*/}
                        {/*            <option value="qare">Քարե</option>*/}
                        {/*            <option value="qare">Պոստ Խրյուշովկա</option>*/}
                        {/*            <option value="qare">Խրյուշովկա</option>*/}
                        {/*            <option value="panelain">Բարձրահարկ</option>*/}
                        {/*            <option value="panelain">Խոշոր Պանելային</option>*/}
                        {/*            <option value="panelain">Կասետաին</option>*/}
                        {/*            <option value="monolith">Նորակառույց</option>*/}
                        {/*            <option value="monolith">Նորակառույց Կառուցապատողից</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <input type="text" placeholder={'from'}/>*/}
                        {/*        <input type="text" placeholder={'to'}/>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <input type="text" placeholder={'Code'}/>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*    </div>*/}

                        <div className={'sortingWrapper'}>
                            <select name="sort" id="sort" value={sortValue}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortValue(e.target.value)}>
                                <option value="">---</option>
                                <option value="priceLowToHigh">Գնի Աճման</option>
                                <option value="priceHighToLow">Գնի Նվազմանն</option>
                                <option value="created_at">Ստեղծման ամսաթվի</option>
                                <option value="updated_at">Թարմացման ամսաթվի</option>
                                <option value="creator">Մասնագետի</option>
                                <option value="image">Նկարների</option>
                                {!isAdmin && <option value='community'>Իմ Տարածք</option>}
                            </select>
                        </div>

                    </div>

                    <div className={"single_dash_line"}>
                        <div style={{fontWeight: "bold"}}><FontAwesomeIcon icon={faHouse}/>&nbsp;{allPagesCount}</div>
                        <div style={{fontWeight: "bold"}}>#Կոդ</div>
                        <div style={{fontWeight: "bold"}}>Կարգավիճակ</div>
                        <div style={{fontWeight: "bold"}}>Նկարներ</div>
                        <div style={{fontWeight: "bold"}}>Գույքի տիպը</div>
                        <div style={{fontWeight: "bold"}}>Կարգավիճակը</div>
                        <div style={{fontWeight: "bold"}}>Մարզ</div>
                        <div style={{fontWeight: "bold"}}>Տարածք</div>
                        <div style={{fontWeight: "bold"}}>Փողոց</div>
                        <div style={{fontWeight: "bold"}}>Շենք</div>
                        <div style={{fontWeight: "bold"}}>Բնակարան</div>
                        <div style={{fontWeight: "bold"}}>Հարկ</div>
                        <div style={{fontWeight: "bold"}}>Հարկայնություն</div>
                        <div style={{fontWeight: "bold"}}>Ընդ.Տարածք</div>
                        <div style={{fontWeight: "bold"}}>Բնակելի Տարածք</div>
                        <div style={{fontWeight: "bold", width: '350px'}}>Վիճակ</div>
                        <div style={{fontWeight: "bold"}}>Սանհանգույց</div>
                        <div style={{fontWeight: "bold"}}>Շին. Տեսակը</div>
                        <div style={{fontWeight: "bold"}}>Գին</div>
                        <div style={{fontWeight: "bold"}}>Մասնագետ</div>
                        <div style={{fontWeight: "bold"}}>Ստեղծվել է</div>
                        <div style={{fontWeight: "bold"}}>Նորացվել է</div>
                        <div style={{fontWeight: "bold"}}>Փոփոխություն</div>
                    </div>


                    {houseInfo.length &&
                        houseInfo.map((item: any) => {

                            const timeExpired = getDateDifference(item.updated_at ? item.updated_at : item.created_at)
                            return (
                                <div key={item.id} className={`single_dash_line ${timeExpired}`}>
                                    <div>
                                        <input
                                            type="checkbox"
                                            style={{width: "20px", height: "20px"}}
                                        />
                                    </div>
                                    <div>{item.cod}</div>
                                    {/*@ts-ignore*/}
                                    <div>{statuses[Number(item.status)]}</div>
                                    <div>{item.image ? 'Այո' : 'Ոչ'}</div>
                                    <div>{item.property_type}</div>
                                    <div>{item.property_description}</div>
                                    <div>{item.region}</div>
                                    <div>{item.community}</div>
                                    <div>{item.addres.split('/')[1]}</div>
                                    <div>{item.addres.split('/')[2]}</div>
                                    <div>{item.addres.split('/')[3]}</div>
                                    <div>{item.floors_number}</div>
                                    <div>{item.building_floors_number}</div>
                                    <div>{item.total_area}</div>
                                    <div>{item.using_area}</div>
                                    <div style={{overflow: 'auto', width: '350px'}}>{item.state}</div>
                                    <div>{item.bathroom_count}</div>
                                    <div>{item.building_type}</div>
                                    <div>{item.price}</div>
                                    <div>{item.creator}</div>
                                    <div>{convertToISODate(item.created_at)}</div>
                                    <div>{convertToISODate(item.updated_at)}</div>
                                    <div>
                                        {isAdmin || (isBrokerLead && agentLocation === item.community) ?
                                            <div className={"dashboard_edit_button"}
                                                 onClick={() => onEditButtonClickHandler(item.id)}>Edit
                                            </div> : <></>}
                                        {/*<div className={"dashboard_delete_button"}>Delete</div>*/}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default withAuthorization(Dashboard);
