import './HouseButtons.css'
import {useState} from "react";

type ThouseAction={
    position:number,
    type:string,
    active:boolean
}

const houseActionTypes:ThouseAction[]=[
    {
        position:1,
        type:'Buy',
        active:true
    },
    {
        position: 2,
        type:'Rent',
        active: false
    }
]

const HouseButtons = () =>{

    const [houses,setHouses] = useState(houseActionTypes)

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
            {houses.map(({active,position,type})=>{
                return <li className={active ? 'activeLi' : 'disactiveLi'} key={position}  onClick={()=>activeTypeHandler(position)}>{type}</li>
            })
            }
        </ul>


    )
}


export default HouseButtons