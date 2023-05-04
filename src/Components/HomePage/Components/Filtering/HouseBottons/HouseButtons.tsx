import './HouseButtons.css'
import {useState} from "react";
import {useTranslation} from "react-i18next";

type ThouseAction={
    position:number,
    type:string,
    active:boolean
}

const houseActionTypes:ThouseAction[]=[
    {
        position:1,
        type:'BUY',
        active:true
    },
    {
        position: 2,
        type:'RENTING',
        active: false
    },
    {
        position: 3,
        type:'DAILY',
        active: false
    }
]

const HouseButtons = () =>{

    const {t} = useTranslation()

    const [houses,setHouses] = useState(houseActionTypes)

    const codePlaceHolder = t('Code')

    const activeTypeHandler = (num:number) =>{
        setHouses(prevState => {
            return prevState.map(elem=>{
                elem.active = elem.position === num;
                return elem
            })
        })
    }

    return(

        <ul className={'house_types'}>
            <div style={{display:'flex'}}>
            {houses.map(({active,position,type})=>{
                return <li className={active ? 'activeLi' : 'disactiveLi'} key={position}  onClick={()=>activeTypeHandler(position)}>{t(type)}</li>
            })
            }
            </div>

            <label style={{margin:'0'}}>
            <li className={' codeSearchLi'} ><input type="text" placeholder={codePlaceHolder}/></li>
            </label>
        </ul>


    )
}


export default HouseButtons