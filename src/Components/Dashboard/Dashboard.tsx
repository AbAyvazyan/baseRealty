import "./Dashboard.css";
import withAuthorization from "../../hoc/autorization";
import {useEffect, useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    const [houseInfo, setHouseInfo] = useState<any>([]);
    const [pageInfo, setPageInfo] = useState<any>({})
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [page, setPage] = useState(1)
    const [allPagesCount,setAllPagesCount] = useState(0)

    useEffect(() => {
        if (!page) {
            return
        }

        const token = JSON.parse(localStorage.getItem("userToken") as string);


        fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}post/?page=${page}`,{
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((res) => res.json())
            .then((response) => {
                response.posts && setHouseInfo((prevState: any) => [...prevState, ...response.posts])
                response.pages && setPageInfo(response.pages)
                response.all_count && setAllPagesCount( response.all_count)
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

        if (!pageInfo.has_next) {
            return
        }
        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [pageInfo.has_next]);


    return (
        <section className={"dashboard"}>
            <div className={'go_back'} onClick={()=>navigate('/admin-panel')}>Admin Panel</div>
            <div className={"dashboard_part"}>
                <div className={"dashboard_tables"} ref={containerRef}>
                    {/*<div className={'dashboard_inputs'}>*/}
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

                    {/*</div>*/}

                    <div className={"single_dash_line"}>
                        <div style={{fontWeight: "bold"}}><FontAwesomeIcon icon={faHouse}/>&nbsp;{allPagesCount}</div>
                        <div style={{fontWeight: "bold"}}>#Կոդ</div>
                        <div style={{fontWeight: "bold"}}>Նկարներ</div>
                        <div style={{fontWeight: "bold"}}>Գույքի տիպը</div>
                        <div style={{fontWeight: "bold"}}>Կարգավիճակը</div>
                        <div style={{fontWeight: "bold"}}>Մարզ</div>
                        <div style={{fontWeight: "bold"}}>Տարածք</div>
                        <div style={{fontWeight: "bold"}}>Փողոց</div>
                        <div style={{fontWeight: "bold"}}>Հարկ</div>
                        <div style={{fontWeight: "bold"}}>Հարկայնություն</div>
                        <div style={{fontWeight: "bold"}}>Ընդ.Տարածք</div>
                        <div style={{fontWeight: "bold"}}>Բնակելի Տարածք</div>
                        <div style={{fontWeight: "bold",width:'350px'}}>Վիճակ</div>
                        {/*<div style={{fontWeight: "bold"}}>Տիպ</div>*/}
                        <div style={{fontWeight: "bold"}}>Սանհանգույց</div>
                        <div style={{fontWeight: "bold"}}>Շին. Տեսակը</div>
                        <div style={{fontWeight: "bold"}}>Գին</div>
                        <div style={{fontWeight: "bold"}}>Մասնագետ</div>
                        <div style={{fontWeight: "bold"}}>Փոփոխություն</div>
                    </div>


                    {houseInfo.length &&
                        houseInfo.map((item: any) => {
                            return (
                                <div key={item.id} className={"single_dash_line"}>
                                    <div>
                                        <input
                                            type="checkbox"
                                            style={{width: "20px", height: "20px"}}
                                        />
                                    </div>
                                    <div>{item.cod}</div>
                                    <div>{item.image ? 'Այո' : 'Ոչ'}</div>
                                    <div>{item.property_type}</div>
                                    <div>{item.property_description}</div>
                                    <div>{item.region}</div>
                                    <div>{item.community}</div>
                                    <div>{item.addres}</div>
                                    <div>{item.floors_number}</div>
                                    <div>{item.building_floors_number}</div>
                                    <div>{item.total_area}</div>
                                    <div>{item.using_area}</div>
                                    <div style={{overflow:'auto',width:'350px'}}>{item.state}</div>
                                    <div>{item.bathroom_count}</div>
                                    <div>{item.building_type}</div>
                                    <div>{item.price}</div>
                                    <div>{item.creator}</div>
                                    {/*<div>$333333</div>*/}
                                    {/*<div>$333333</div>*/}
                                    {/*<div>$333333</div>*/}
                                    {/*<div>$333333</div>*/}
                                    {/*<div>$333333</div>*/}
                                    {/*<div>$333333</div>*/}
                                    {/*<div>$333333</div>*/}
                                    {/*<div>$333333</div>*/}
                                    {/*<div>$333333</div>*/}
                                    {/*<div>$333333</div>*/}
                                    {/*<div>$333333</div>*/}
                                    {/*<div>$333333</div>*/}
                                    <div>
                                        <div className={"dashboard_edit_button"}
                                             onClick={() => onEditButtonClickHandler(item.id)}>Edit
                                        </div>
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
