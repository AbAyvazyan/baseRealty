import './SingleHouse.css'
import {FC} from "react";
import {useParams} from "react-router";


const SingleHouse = () =>{

    const routeParameter = useParams()

    console.log(routeParameter.code)
    return(
        <>
        Hello Single House Page
        </>
    )
}


export default SingleHouse