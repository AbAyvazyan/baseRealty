import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import {useFilterContext} from "../../../../../../Contexts/FilterContext";

const buttons = [
    {
        id: 1,
        content: '2.45m',
        active: false
    },
    {
        id: 2,
        content: '2.55m',
        active: false
    },
    {
        id: 3,
        content: '2.75m',
        active: false
    },
    {
        id: 4,
        content: '3m',
        active: false
    },
    {
        id: 5,
        content: '3.20m',
        active: false
    }
];

const MoreFilterButtonGroup = () => {
    const { t } = useTranslation();
    const [buttonState, setButtonState] = useState(buttons);
    const {filterState,updateFilterState} = useFilterContext()

    const handleButtonClick = (id:number) => {
        setButtonState((prevButtons) =>
            prevButtons.map((button) =>
                button.id === id ? { ...button, active: !button.active } : button
            )
        );
    };

    useEffect(() => {
        const activeHeights = buttonState.filter((elem) => elem.active).map((elem) => elem.content);
        updateFilterState({ ...filterState, height: activeHeights });
    }, [buttonState]);


    return (
        <div className={"more_filter_button_group mf_all"}>
            <div>{t("Height")}</div>
            <div className={"mf_button_part"} style={{display:'flex',justifyContent:'space-between'}}>
                {buttonState.map((elem) => (
                    <div
                        key={elem.id}
                        className={elem.active ? "height_button active_height_button" : "height_button"}
                        onClick={() => handleButtonClick(elem.id)}
                    >
                        {t(elem.content)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreFilterButtonGroup;
