import "./HousePosting.css";
import MapComponent from "../HouseMap/HouseMap";
import withAuthorization from "../../hoc/autorization";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import uuid from "react-uuid";
import {
    buildingType,
    community,
    meaning,
    region,
    renovation,
    roomHeight,
    street,
} from "../../helpers/constants";

const codeStates = {
    Աջափնյակ: "J",
    Արաբկիր: "A",
    Ավան: "V",
    Դավիթաշեն: "D",
    Էրեբունի: "E",
    "Քանաքեռ Զեյթուն": "Z",
    Կենտրոն: "K",
    "Մալաթիա Սեբաստիա": "M",
    "Նոր Նորք": "N",
    Շենգավիթ: "S",
    "Նորք Մարաշ": "O",
    Նուբարաշեն: "E",
};

const codeFirstChars: { [key: string]: number } = {
    RAP: 5,
    RCM: 6,
    RHS: 7,
    RLD: 8,
    DAP: 9,
};

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");

const today = `${year}-${month}-${day}`;

const HousePosting = () => {
    const [thisTimeType, setThisTimeType] = useState("");

    const [buildingNumber, setBuildingNumber] = useState("");
    const [myAddress, setMyAddress] = useState("");

    const [description, setDescription] = useState([
        {
            id: 1,
            title: "Վաճառք",
            checked: true,
        },
        {
            id: 2,
            title: "Վարձ",
            checked: false,
        },
        {
            id: 3,
            title: "Օրավարձ",
            checked: false,
        },
    ]);
    const [propertyType, setPropertyType] = useState([
        {
            id: 1,
            title: "Բնակարան",
            checked: true,
        },
        {
            id: 2,
            title: "Առանձնատուն",
            checked: false,
        },
        {
            id: 3,
            title: "Կոմերցիոն",
            checked: false,
        },
        {
            id: 4,
            title: "Հողատարածք",
            checked: false,
        },
        {
            id: 5,
            title: "Հոսթել",
            checked: false,
        },
        {
            id: 6,
            title: "Հյուրատուն",
            checked: false,
        },
        {
            id: 7,
            title: "Հյուրանոց",
            checked: false,
        },
    ]);
    const [status, setStatus] = useState([
        {
            id: 1,
            title: "Ակտիվ",
            checked: true,
        },
        {
            id: 2,
            title: "Ժամանակավոր դադար",
            checked: false,
        },
        {
            id: 3,
            title: "Վաճառված",
            checked: false,
        },
        {
            id: 4,
            title: "Չանրադառնալ",
            checked: false,
        },
    ]);
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [mail, setMail] = useState("");
    const [thisTimeDescription, setThisTimeDescription] = useState("");
    const [thisTimeStatus, setThisTimeStatus] = useState("");
    const [apartment, setApartment] = useState("");
    const [homeDescription, setHomeDescription] = useState("");
    const [detailedHomeDescription, setDetailedHomeDescription] = useState("");
    const [mapAddress, setMapAddress] = useState("");
    const [price, setPrice] = useState(0);
    const [allSqare, setAllSqare] = useState(0);
    const [landLayn, setLandLayn] = useState(0);
    const [landSquare, setLandSquare] = useState(0);
    const [landErk, setLandErk] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [floor, setFloor] = useState(0);
    const [hallSquare, setHallSquare] = useState(0);
    const [storageLength, setStorageLength] = useState(0);
    const [vitrage, setVitrage] = useState(0);
    const [floornes, setFloornes] = useState(0);
    const [sanuzel, setSanuzel] = useState(0);
    const [comunal, setComunal] = useState([
        {
            id: 1,
            title: "Գազ",
            checked: false,
        },
        {
            id: 2,
            title: "էլեկտրոէներգիա",
            checked: false,
        },
        {
            id: 3,
            title: "Ջուր",
            checked: false,
        },
        {
            id: 4,
            title: "Համացանց",
            checked: false,
        },
        {
            id: 5,
            title: "Ջեռուցման համակարգ",
            checked: false,
        },
        {
            id: 6,
            title: "Օդորակիչ",
            checked: false,
        },
    ]);
    const [convinions, setConvinions] = useState([
        {
            id: 1,
            title: "Արևկողմ",
            checked: false,
        },
        {
            id: 2,
            title: "Ավտոկայանատեղի",
            checked: false,
        },
        {
            id: 3,
            title: "Անվտանգություն",
            checked: false,
        },
        {
            id: 4,
            title: "Բուխարրի",
            checked: false,
        },
        {
            id: 5,
            title: "Բաց պատշգամբ",
            checked: false,
        },
        {
            id: 6,
            title: "Լոջա",
            checked: false,
        },
        {
            id: 7,
            title: "Վերելակ",
            checked: false,
        },
        {
            id: 8,
            title: "Նկուղ",
            checked: false,
        },
        {
            id: 9,
            title: "Ձեղնահարկ",
            checked: false,
        },
        {
            id: 10,
            title: "Խորդանոց",
            checked: false,
        },
        {
            id: 11,
            title: "Բարձր առաջին հարկ",
            checked: false,
        },
        {
            id: 12,
            title: "Տաքացվող հատակ",
            checked: false,
        },
        {
            id: 13,
            title: "Գեղեցիկ տեսարան",
            checked: false,
        },
        {
            id: 14,
            title: "Կանգառի մոտ",
            checked: false,
        },
        {
            id: 15,
            title: "Մետրո",
            checked: false,
        },
        {
            id: 16,
            title: "Ճանապարհամերձ",
            checked: false,
        },
        {
            id: 17,
            title: "Զբոսայգի",
            checked: false,
        },
        {
            id: 18,
            title: "Պարսպապատ",
            checked: false,
        },
        {
            id: 19,
            title: "Շոգեբաղնիք",
            checked: false,
        },
        {
            id: 20,
            title: "Կահույք",
            checked: false,
        },
        {
            id: 21,
            title: "Տեխնիկա",
            checked: false,
        },
        {
            id: 22,
            title: "Խոհանոցաին Կահույք",
            checked: false,
        },
    ]);
    const [renovationState, setRenovationState] = useState(renovation[0].title);
    const [roomHeightState, setRoomHeightState] = useState(renovation[0].title);
    const [regionState, setRegionState] = useState(region[0]);
    const [communityState, setCommunityState] = useState('');
    const [buildingTypeState, setBuildingTypeState] = useState(
        buildingType[0].title
    );
    const [code, setCode] = useState("");
    const [date, setDate] = useState<any>("");
    const [reqObj, setReqObj] = useState<any>({});
    const [activeComunal, setActiveComunal] = useState<any>([]);
    const [activeConvinions, setActiveConvinions] = useState<any>([]);
    const [generatedCode, setGeneratedCode] = useState<string>("");
    const navigate = useNavigate();

    const [isAdmin, setIsAdmin] = useState(false);
    const [agentLocation, setAgentLocation] = useState("");

    useEffect(() => {
        const storageUser = localStorage.getItem("user");

        if (storageUser) {
            const user = JSON.parse(storageUser);
            setIsAdmin(user.role === "Super Admin");
            setAgentLocation(user.community);
        }
    }, []);

    const statementCheckedHandler = (setStateAction: any, id: number) => {
        setStateAction((prevState: any) => {
            return prevState.map((item: any) => {
                return item.id === id
                    ? {...item, checked: true}
                    : {...item, checked: false};
            });
        });
    };

    const setComunalChecks = (setStateAction: any, id: number) => {
        setStateAction((prevState: any) => {
            return prevState.map((item: any) => {
                return item.id === id ? {...item, checked: !item.checked} : item;
            });
        });
    };

    useEffect(() => {
        setActiveComunal(
            comunal
                .filter((elem) => elem.checked && elem.title)
                .map((elem) => elem.title)
        );
    }, [comunal]);

    useEffect(() => {
        setActiveConvinions(
            convinions
                .filter((elem) => elem.checked && elem.title)
                .map((elem) => elem.title)
        );
    }, [convinions]);

    useEffect(() => {
        propertyType.forEach((elem) => {
            if (elem.checked) {
                setThisTimeType(elem.title);
            }
        });
    }, [propertyType]);

    useEffect(() => {
        description.forEach((elem) => {
            if (elem.checked) {
                setThisTimeDescription(elem.title);
            }
        });
    }, [description]);

    useEffect(() => {
        status.forEach((elem) => {
            if (elem.checked) {
                setThisTimeStatus(elem.title);
            }
        });
    }, [status]);

    useEffect(() => {
        if (thisTimeDescription !== "Օրավարձ") {
            setPropertyType((prevState) => prevState.slice(0, 4));
        } else {
            setPropertyType((prevState) => [
                ...prevState,
                {
                    id: 5,
                    title: "Հոսթել",
                    checked: false,
                },
                {
                    id: 6,
                    title: "Հյուրատուն",
                    checked: false,
                },
                {
                    id: 7,
                    title: "Հյուրանոց",
                    checked: false,
                },
            ]);
        }
    }, [thisTimeDescription]);

    useEffect(() => {
        if (!communityState || !address || !buildingNumber || !apartment) {
            return;
        }

        const debounceTimeout = setTimeout(() => {
            setMapAddress(`${communityState} ${address} ${buildingNumber}`);
        }, 3000);

        setMyAddress(`${communityState}/${address}/${buildingNumber}/${apartment}`);

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [communityState, address, buildingNumber, apartment]);

    useEffect(() => {
        setReqObj({
            cod: code ? code : generatedCode,
            comunal: activeComunal,
            meaning:
                thisTimeType === "Կոմերցիոն" ? buildingTypeState : "Բազմաֆունկցիոնալ",
            ground_area: landSquare,
            ground_width: landLayn,
            ground_height: landErk,
            using_area: allSqare,
            using_width: 0,
            using_height: 0,
            description: homeDescription,
            additional_info: detailedHomeDescription,
            hall_area: hallSquare,
            storage_area: storageLength,
            vitrage,
            day_of_relase: date ? date : today,
            contacts: [
                {
                    name,
                    phone: number,
                    email: mail,
                },
            ],
            address_for_me: myAddress,
            property_description: thisTimeDescription,
            property_type: thisTimeType,
            status: thisTimeStatus,
            community: communityState,
            region: regionState,
            address:myAddress,
            price,
            building_type: buildingTypeState,
            total_area: allSqare,
            room: rooms,
            floors_number: floor,
            building_floors_number: floornes,
            bathroom_count: sanuzel,
            celing_hegiht: typeof roomHeightState === "number" ? roomHeightState : 0,
            state: renovationState,
            additional_conveniences: activeConvinions,
        });
    }, [
        floornes,
        code,
        comunal,
        buildingTypeState,
        landSquare,
        landLayn,
        landErk,
        allSqare,
        homeDescription,
        detailedHomeDescription,
        hallSquare,
        storageLength,
        vitrage,
        date,
        name,
        number,
        mail,
        thisTimeDescription,
        thisTimeType,
        thisTimeStatus,
        communityState,
        regionState,
        address,
        price,
        rooms,
        floor,
        sanuzel,
        activeComunal,
        activeConvinions,
        roomHeightState,
        renovationState,
        convinions,
        floornes,
        myAddress,
        generatedCode,
    ]);

    useEffect(() => {
        const firstLetter =
            thisTimeDescription === "Վաճառք"
                ? "B"
                : thisTimeDescription === "Վարձ"
                    ? "R"
                    : "D";
        const houseLetters =
            thisTimeType === "Բնակարան"
                ? "AP"
                : thisTimeType === "Առանձնատուն"
                    ? "HS"
                    : thisTimeType === "Հողատարածք"
                        ? "LD"
                        : "CM";
        let generatedLetters = firstLetter + houseLetters;
        const firstCharacterOfCode =
            thisTimeDescription === "Վաճառք"
                ? rooms <= 4
                    ? rooms
                    : 4
                : codeFirstChars[generatedLetters];
        const min = 10000;
        const max = 99999;

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        generatedLetters += `-${firstCharacterOfCode}` + randomNumber;

        setGeneratedCode(generatedLetters);
    }, [thisTimeType, thisTimeDescription, communityState, rooms]);

    const postSubmitHandler = (requestObject: any) => {
        const token = JSON.parse(localStorage.getItem("userToken") as string);

        if (!token) {
            navigate("/login");
        }

        fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}post/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(requestObject),
        }).then((res) => navigate("/admin-panel"));
    };

    return (
        <section className={"house_posting"}>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "right",
                    paddingRight: "3vw",
                    boxSizing: "border-box",
                }}
            >
                <div className={"go_back"} onClick={() => navigate("/admin-panel")}>
                    Admin Panel
                </div>
            </div>

            <div>
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder={"Կոդ"}
                />
            </div>

            <div className={"posting_guyq"}>
                <div className={"div_radios"}>
                    <span>ԳՈՒՅՔԻ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆԸ</span>
                    <div>
                        {description.map((element) => {
                            return (
                                <label key={element.id}>
                                    <input
                                        onChange={() =>
                                            statementCheckedHandler(setDescription, element.id)
                                        }
                                        checked={element.checked}
                                        type="radio"
                                    />
                                    {element.title}
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className={"div_radios"}>
                    <span>ԳՈՒՅՔԻ ՏԻՊԸ</span>
                    <div>
                        {propertyType.map((element) => {
                            return (
                                <label key={element.id}>
                                    <input
                                        onChange={() =>
                                            statementCheckedHandler(setPropertyType, element.id)
                                        }
                                        type="radio"
                                        checked={element.checked}
                                    />
                                    {element.title}
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className={"div_radios"}>
                    <span>Կարգավիճակ</span>
                    <div>
                        {status.map((element) => {
                            return (
                                <label key={element.id}>
                                    <input
                                        onChange={() =>
                                            statementCheckedHandler(setStatus, element.id)
                                        }
                                        type="radio"
                                        checked={element.checked}
                                    />
                                    {element.title}
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className={"location_part_posting"}>
                <div className={"location_type_part"}>
                    <div className={"div_selects"}>
                        <div>
                            <span>ՄԱՐԶ</span>
                            <div>
                                <select
                                    value={regionState}
                                    onChange={(e) => setRegionState(e.target.value)}
                                >
                                    {region.map((element: string, loopId: number) => {
                                        return (
                                            <option key={loopId} value={element}>
                                                {element}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>

                        <div>
                            <span>ՀԱՄԱՅՆՔ</span>
                            <div>
                                <select
                                    value={communityState}
                                    onChange={(e) => setCommunityState(e.target.value)}
                                >
                                    <option value={''}></option>
                                    {isAdmin ? (
                                        community.map((element: string, loopId: number) => {
                                            return (
                                                <option key={loopId} value={element}>
                                                    {element}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <option value={agentLocation}>{agentLocation}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: "3vh"}}>
                        <span>ՀԱՍՑԵ</span>
                        <div className={"hasce"}>
                            <select
                                name="street"
                                id="street"
                                value={address}
                                onChange={(e) => setAddress(e.target.value.trim())}
                            >
                                {street[communityState].map((elem) => {
                                    return (
                                        <option key={uuid()} value={elem}>
                                            {elem}
                                        </option>
                                    );
                                })}
                            </select>
                            <input
                                type="text"
                                value={buildingNumber}
                                onChange={(e) => setBuildingNumber(e.target.value.trim())}
                                placeholder={"Շենք"}
                            />
                            <input
                                type="text"
                                value={apartment}
                                onChange={(e) => setApartment(e.target.value.trim())}
                                placeholder={"Բնակարան"}
                            />
                        </div>
                    </div>
                </div>

                <div className={"map_posting"}>
                    {mapAddress ? (
                        <MapComponent address={mapAddress}/>
                    ) : (
                        <div
                            style={{
                                width: "100%",
                                height: "500px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "1px solid black",
                            }}
                        >
                            Քարտեզ
                        </div>
                    )}
                </div>
            </div>

            <div className={"nkaragrutyun_holder"}>
                <div>
                    <div className={"div_textarea"}>
            <textarea
                placeholder={"Նկարագրություն..."}
                value={homeDescription}
                onChange={(e) => setHomeDescription(e.target.value.trim())}
            ></textarea>
                    </div>

                    <div className={"div_textarea"}>
            <textarea
                placeholder={"Լրացուցիչ դաշտ..."}
                value={detailedHomeDescription}
                onChange={(e) =>
                    setDetailedHomeDescription(e.target.value.trim())
                }
            ></textarea>
                    </div>
                </div>

                {thisTimeType !== "Կոմերցիոն" &&
                    thisTimeType !== "Առանձնատուն" &&
                    thisTimeType !== "Հողատարածք" && (
                        <div className={"nkaragrutyun_himnakan"}>
                            <div className={"div_selects"}>
                                <div>
                                    <span>ԳԻՆ</span>
                                    <div>
                                        <input
                                            type="number"
                                            value={price}
                                            onChange={(e) => setPrice(+e.target.value)}
                                            placeholder={"Թիվ"}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <span>ՇԻՆՈՒԹՅԱՆ ՏԻՊԸ</span>
                                    <div>
                                        <select
                                            value={buildingTypeState}
                                            onChange={(e) => setBuildingTypeState(e.target.value)}
                                        >
                                            {buildingType.map((element) => {
                                                return (
                                                    <option key={element.id} value={element.title}>
                                                        {element.title}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className={"div_selects"}>
                                <div>
                                    <span>ԸՆԴՀԱՆՈՒՐ ՄԱԿԵՐԵՍ</span>
                                    <div>
                                        <input
                                            type="number"
                                            value={allSqare}
                                            onChange={(e) => setAllSqare(+e.target.value)}
                                            placeholder={"մետր քառակուսի"}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <span>ՍԵՆՅԱԿՆԵՐ</span>
                                    <div>
                                        <input
                                            type="number"
                                            value={rooms}
                                            onChange={(e) => setRooms(+e.target.value)}
                                            placeholder={"Թիվ"}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={"div_selects"}>
                                <div>
                                    <span>ՀԱՐԿ</span>
                                    <div>
                                        <input
                                            type="number"
                                            value={floor}
                                            onChange={(e) => setFloor(+e.target.value)}
                                            placeholder={"Թիվ"}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <span>ՀԱՐԿԱՅՆՈՒԹՅՈՒՆ</span>
                                    <div>
                                        <input
                                            type="number"
                                            value={floornes}
                                            onChange={(e) => setFloornes(+e.target.value)}
                                            placeholder={"Թիվ"}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={"div_selects"}>
                                <div className={"div_inputs"}>
                                    <span>ՍԱՆՀԱՆԳՈՒՅՑ</span>
                                    <div>
                                        <input
                                            type="number"
                                            value={sanuzel}
                                            max={20}
                                            onChange={(e) => setSanuzel(+e.target.value)}
                                            placeholder={"Թիվ"}
                                        />
                                    </div>
                                </div>

                                <div className={"div_inputs"}>
                                    <span>ԱՌԱՍՏԱՂԻ ԲԱՐՁՐՈՒԹՅՈՒՆ</span>
                                    <div>
                                        <select
                                            value={roomHeightState}
                                            onChange={(e) => setRoomHeightState(e.target.value)}
                                        >
                                            {roomHeight.map((element) => {
                                                return (
                                                    <option key={element.id} value={element.title}>
                                                        {element.title}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className={"div_inputs"}>
                                    <span>ՎԻՃԱԿԸ</span>
                                    <div>
                                        <select
                                            value={renovationState}
                                            onChange={(e) => setRenovationState(e.target.value)}
                                        >
                                            {renovation.map((element) => {
                                                return (
                                                    <option key={element.id} value={element.title}>
                                                        {element.title}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                {thisTimeType === "Առանձնատուն" && (
                    <div className={"nkaragrutyun_himnakan"}>
                        <div className={"div_selects"}>
                            <div>
                                <span>ԳԻՆ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(+e.target.value)}
                                        placeholder={"Թիվ"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>ՇԻՆՈՒԹՅԱՆ ՏԻՊԸ</span>
                                <div>
                                    <select
                                        value={buildingTypeState}
                                        onChange={(e) => setBuildingTypeState(e.target.value)}
                                    >
                                        {buildingType.map((element) => {
                                            return (
                                                <option key={element.id} value={element.title}>
                                                    {element.title}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className={"div_selects"}>
                            <div>
                                <span>Հողի մակ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={landSquare}
                                        onChange={(e) => setLandSquare(+e.target.value)}
                                        placeholder={"Թիվ"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>Հողի լայն</span>
                                <div>
                                    <input
                                        type="number"
                                        value={landLayn}
                                        onChange={(e) => setLandLayn(+e.target.value)}
                                        placeholder={"Թիվ"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>Հողի երկ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={landErk}
                                        onChange={(e) => setLandErk(+e.target.value)}
                                        placeholder={"Թիվ"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={"div_selects"}>
                            <div>
                                <span>ԸՆԴՀԱՆՈՒՐ ՄԱԿԵՐԵՍ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={allSqare}
                                        onChange={(e) => setAllSqare(+e.target.value)}
                                        placeholder={"մետր քառակուսի"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>ՍԵՆՅԱԿՆԵՐ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={rooms}
                                        max={30}
                                        onChange={(e) => setRooms(+e.target.value)}
                                        placeholder={"Թիվ"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={"div_selects"}>
                            <div>
                                <span>ՀԱՐԿ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={floor}
                                        onChange={(e) => setFloor(+e.target.value)}
                                        placeholder={"Թիվ"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>ՀԱՐԿԱՅՆՈՒԹՅՈՒՆ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={floornes}
                                        onChange={(e) => setFloornes(+e.target.value)}
                                        placeholder={"Թիվ"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={"div_selects"}>
                            <div className={"div_inputs"}>
                                <span>ՍԱՆՀԱՆԳՈՒՅՑ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={sanuzel}
                                        onChange={(e) => setSanuzel(+e.target.value)}
                                        placeholder={"Թիվ"}
                                    />
                                </div>
                            </div>

                            <div className={"div_inputs"}>
                                <span>ԱՌԱՍՏԱՂԻ ԲԱՐՁՐՈՒԹՅՈՒՆ</span>
                                <div>
                                    <select
                                        value={roomHeightState}
                                        onChange={(e) => setRoomHeightState(e.target.value)}
                                    >
                                        {roomHeight.map((element) => {
                                            return (
                                                <option key={element.id} value={element.title}>
                                                    {element.title}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className={"div_inputs"}>
                                <span>ՎԻՃԱԿԸ</span>
                                <div>
                                    <select
                                        value={renovationState}
                                        onChange={(e) => setRenovationState(e.target.value)}
                                    >
                                        {renovation.map((element) => {
                                            return (
                                                <option key={element.id} value={element.title}>
                                                    {element.title}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {thisTimeType === "Կոմերցիոն" && (
                    <div className={"nkaragrutyun_himnakan"}>
                        <div className={"div_selects"}>
                            <div>
                                <span>ԳԻՆ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(+e.target.value)}
                                        placeholder={"Թիվ"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>Նշանակություն</span>
                                <div>
                                    <select
                                        value={buildingTypeState}
                                        onChange={(e) => setBuildingTypeState(e.target.value)}
                                    >
                                        {meaning.map((element: string, index: number) => {
                                            return (
                                                <option key={index} value={element}>
                                                    {element}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className={"div_selects"}>
                            <div>
                                <span>Հողի ՄԱԿԵՐԵՍ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={landSquare}
                                        onChange={(e) => setLandSquare(+e.target.value)}
                                        placeholder={"մետր քառակուսի"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>Հողի լայն</span>
                                <div>
                                    <input
                                        type="number"
                                        value={landLayn}
                                        onChange={(e) => setLandLayn(+e.target.value)}
                                        placeholder={"մետր քառակուսի"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>Հողի երկ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={landErk}
                                        onChange={(e) => setLandErk(+e.target.value)}
                                        placeholder={"մետր քառակուսի"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={"div_selects"}>
                            <div>
                                <span>Սրահի ՄԱԿԵՐԵՍ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={hallSquare}
                                        onChange={(e) => setHallSquare(+e.target.value)}
                                        placeholder={"մետր քառակուսի"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>Պահեստի լայն</span>
                                <div>
                                    <input
                                        type="number"
                                        value={storageLength}
                                        onChange={(e) => setStorageLength(+e.target.value)}
                                        placeholder={"մետր քառակուսի"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>Վիտչաժ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={vitrage}
                                        onChange={(e) => setVitrage(+e.target.value)}
                                        placeholder={"մետր քառակուսի"}
                                    />
                                </div>
                            </div>
                        </div>

                        {thisTimeDescription !== "Վաճառք" &&
                            thisTimeType === "Կոմերցիոն" && (
                                <div className={"div_selects"}>
                                    <div>
                                        <span>Ազատվում է</span>
                                        <div>
                                            <input
                                                type="date"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                placeholder={"մետր քառակուսի"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                )}

                {thisTimeType === "Հողատարածք" && (
                    <div className={"nkaragrutyun_himnakan"}>
                        <div className={"div_selects"}>
                            <div>
                                <span>Հողի ՄԱԿԵՐԵՍ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={allSqare}
                                        onChange={(e) => setAllSqare(+e.target.value)}
                                        placeholder={"մետր քառակուսի"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>Հողի լայն</span>
                                <div>
                                    <input
                                        type="number"
                                        value={allSqare}
                                        onChange={(e) => setAllSqare(+e.target.value)}
                                        placeholder={"մետր քառակուսի"}
                                    />
                                </div>
                            </div>

                            <div>
                                <span>Հողի երկ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={allSqare}
                                        onChange={(e) => setAllSqare(+e.target.value)}
                                        placeholder={"մետր քառակուսի"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={"div_selects"}>
                            <div>
                                <span>ԳԻՆ</span>
                                <div>
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(+e.target.value)}
                                        placeholder={"Թիվ"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={"owner_contact_posting"}>
                <h2>Կոնտակտներ</h2>

                <div>
                    <div className={"contact_input_posting"}>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={"Անուն"}
                        />
                        <input
                            type="text"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder={"Հեռախոսահամար"}
                        />
                        <input
                            type="text"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            placeholder={"Մաիլ"}
                        />
                    </div>
                </div>

                <div></div>
            </div>

            <div className={"information_posting"}>
                <div className={"div_checkboxes"}>
                    <div>ԿՈՄՈՒՆԱԼ</div>
                    <div>
                        {comunal.map((element) => {
                            return (
                                <label key={element.id}>
                                    <input
                                        checked={element.checked}
                                        onChange={() => setComunalChecks(setComunal, element.id)}
                                        type="checkbox"
                                    />
                                    {element.title}
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className={"div_checkboxes"}>
                    <div>ԼՐԱՑՈՒՑԻՉ ՀԱՐՄԱՐՈՒԹՅՈՒՆՆԵՐ</div>
                    <div>
                        {convinions.map((element) => {
                            return (
                                <label key={element.id}>
                                    <input
                                        checked={element.checked}
                                        onChange={() => setComunalChecks(setConvinions, element.id)}
                                        type="checkbox"
                                    />
                                    {element.title}
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div
                className={"submit_button"}
                onClick={() => postSubmitHandler(reqObj)}
            >
                Post
            </div>
        </section>
    );
};

export default withAuthorization(HousePosting);
