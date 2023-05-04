import {useTranslation} from "react-i18next";


const SingleCheck = () =>{
    const {t} = useTranslation()

    return(
        <div className={'mf_single_check mf_all'}>
            <div>{t("Lift")}</div>
            <div>
                <label>
                    <input type="checkbox" style={{width:'20px',height:'20px'}}/>
                </label>

            </div>
        </div>
    )
}

export default SingleCheck