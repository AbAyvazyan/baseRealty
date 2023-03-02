import './HouseButtons.css'

type ThouseAction={
    type:string
}

const houseActionTypes:ThouseAction[]=[
    {
        type:'Buy'
    },
    {
        type:'Rent'
    }
]

const HouseButtons = () =>{

    return(

        <ul className={''}>
            {houseActionTypes.map(item=>{
                return <li>{item.type}</li>
            })
            }
        </ul>


    )
}


export default HouseButtons