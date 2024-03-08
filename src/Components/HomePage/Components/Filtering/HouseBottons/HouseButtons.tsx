import './HouseButtons.css'
import {FC, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useFilterContext} from "../../../../../Contexts/FilterContext";

type THouseButtons = {
    getTypeDirection: (type: string) => void
}

type ThouseAction = {
    position: number,
    type: string,
    active: boolean
}

const houseActionTypes: ThouseAction[] = [
    {
        position: 1,
        type: 'SALE',
        active: true
    },
    {
        position: 2,
        type: 'RENT',
        active: false
    },
    {
        position: 3,
        type: 'DAILY',
        active: false
    }
]

const HouseButtons: FC<THouseButtons> = ({getTypeDirection}) => {

    const [code, setCode] = useState('')

    const {t} = useTranslation()
    const {filterState, updateFilterState} = useFilterContext()

    const [houses, setHouses] = useState(houseActionTypes)

    const codePlaceHolder = t('Code')

    const activeTypeHandler = (num: number) => {
        setHouses(prevState => {
            return prevState.map(elem => {
                elem.active = elem.position === num;
                return elem
            })
        })
    }

    useEffect(() => {
        houses.forEach(element => {
            element.active && getTypeDirection(element.type)
        })
    }, [houses])

    useEffect(() => {
        updateFilterState({...filterState, code: code.trim()})
    }, [code])

    return (

        <ul className={'house_types'}>
            <div style={{display: 'flex'}}>
                {houses.map(({active, position, type}) => {
                    return <li className={active ? 'activeLi' : 'disactiveLi'} key={position}
                               onClick={() => activeTypeHandler(position)}>{t(type) === 'Վարձակալություն' ? 'Վարձ' : t(type)}</li>
                })
                }
            </div>

            <label style={{margin: '0'}}>
                <li className={'codeSearchLi'}><input type="text" value={code}
                                                      onChange={(e) => setCode(e.target.value)}
                                                      placeholder={codePlaceHolder}/></li>
            </label>
        </ul>


    )
}


export default HouseButtons