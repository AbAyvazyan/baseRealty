import {FC, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";


type TMultyChecks = {
    houseTypes:string[],
    title:string
}

const MultipleChecks:FC<TMultyChecks> = ({houseTypes,title}) =>{

    const [typeNames,setTypeNames] = useState<string[]>([])

    const {t} = useTranslation()

    useEffect(()=>{
        setTypeNames(houseTypes)
    },[houseTypes])

    return(
        <div className={'multiple_checks mf_all'}>
            <div>{t(title)}</div>
            <div className={'multiple_house_types_checks'}>
                {typeNames.map((item,index)=>{
                    return (
                        <label key={index}>
                            <input type="checkbox"/>{t(item)}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

export default MultipleChecks