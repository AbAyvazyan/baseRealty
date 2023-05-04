import * as React from "react";
import {useTranslation} from "react-i18next";


const MoreFilterButtonGroup = () =>{

    const {t} = useTranslation()
    return(
        <div className={'more_filter_button_group mf_all'}>
            <div>{t("Height")}</div>
            <div className={'mf_button_part'}>
                <button>{t("2.45m")}</button>
                <button>{t("2.55m")}</button>
                <button>{t("2.75m")}</button>
                <button>{t("3m")}</button>
                <button>{t("3.20m")}</button>
            </div>
        </div>
    )
}

export default MoreFilterButtonGroup