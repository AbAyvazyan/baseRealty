import "./Filtering.css";

import HouseButtons from "./HouseBottons/HouseButtons";
import InputFilterField from "./InputFilterField";
import MoreFilter from "./MoreFilter/MoreFlter";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import uuid from "react-uuid";
import {Tstate} from "./InputFilterField/InputFilterField";

const initialState: Tstate[] = [
    {
        _id: uuid(),
        holder: "Property_Type",
        models: [
            {
                title: "Բնակարան",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Առանձնատուն",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Կոմերցիոն",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Հողատարածք",
                isChecked: false,
                _id: uuid(),
            },
        ],
        fromTo: false,
        isOpen: false,
        singleCheck: false,
    },
    {
        _id: uuid(),
        holder: "Place",
        models: [
            {
                title: "Երևան",
                isChecked: false,
                state: true,
                _id: uuid(),
            },
            {
                title: "Կենտրոն",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Արաբկիր",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Աջափնյակ",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Ավան",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Քանաքեռ Զեյթուն",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Դավթաշեն",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "էրեբունի",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Մալաթիա Սեբաստիա",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Նոր Նորք",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Նորք Մարաշ",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Շենգավիթ",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Նուբարաշեն",
                isChecked: false,
                _id: uuid(),
            },
        ],
        fromTo: false,
        isOpen: false,
        singleCheck: false,
    },
    {
        _id: uuid(),
        holder: "Rooms",
        fromTo: true,
        isOpen: false,
        singleCheck: false,
    },
    {
        _id: uuid(),
        holder: "Area",
        fromTo: true,
        isOpen: false,
        singleCheck: false,
    },
    {
        _id: uuid(),
        holder: "Price",
        fromTo: true,
        isOpen: false,
        singleCheck: false,
    },
    {
        _id: uuid(),
        holder: "newly_built",
        fromTo: false,
        isOpen: false,
        singleCheck: true,
    },
];

const Filtering = () => {
    const [typeDirectrion, setTypeDirection] = useState("");
    const [searched, setSearched] = useState(false);
    const [moreFilterModal, setMoreFilterModal] = useState(false);
    const {t} = useTranslation();
    const navigate = useNavigate();

    const moreFilterModalOpenHandler = () => {
        setMoreFilterModal(true);
    };

    const moreFilterModalCloseHandler = () => {
        setMoreFilterModal(false);
    };

    const getTypeDirection = (type: string) => {
        setTypeDirection(type);
    };

    const onSearchHandler = () => {
        setSearched(true);
        window.scrollTo({top: 0});
        navigate(`/${typeDirectrion.toLowerCase()}`);
        return setSearched(false);
    };

    return (
        <>
            <div className="home_page_filtering">
                <div>
                    <HouseButtons getTypeDirection={getTypeDirection}/>
                </div>

                <div>
                    <InputFilterField searched={searched} initialState={initialState}/>
                </div>

                <div>
                    <div
                        className="single_button filter_button"
                        onClick={() => moreFilterModalOpenHandler()}
                        style={{marginRight: "5px"}}
                    >
                        <i className="fa fa-solid fa-filter"></i>
                    </div>
                    <div
                        className="single_button search_button"
                        onClick={onSearchHandler}
                    >
                        {" "}
                        {t("Search")}{" "}
                    </div>
                </div>
            </div>

            {moreFilterModal && (
                <MoreFilter closeModalHandler={moreFilterModalCloseHandler}/>
            )}
        </>
    );
};

export default Filtering;
