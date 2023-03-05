import './InputFilterField.css'

import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import uuid from "react-uuid";
import {useId} from "react";

const multipleSelect = [
    {
        holder:'Apartment',
        models:[
            {
                title:'Newly Built'
            }
        ],
        fromTo:false
    },
    {
        holder:'Rooms',
        fromTo:true
    },
    {
        holder:'Floor',
        fromTo:true
    },
    {
        holder:'Price',
        fromTo:true
    },
    {
        holder:'Place',
        models:[
            {
                title:'Arabkir'
            },
            {
                title:'Kentron'
            },
            {
                title:'Ajapnyak'
            }
        ],
        fromTo:false
    },

]

const InputFilterField = () =>{
    return(
        <form action="" className={'input_filter_form'}>
            <div className={'input_filtering_field'}>
                {multipleSelect.map(item=>{
                    return <MultipleSelectCheckmarks fromTo={item.fromTo} key={uuid()} holder={item.holder} models={item.models}/>
                })}
            </div>
        </form>
    )
}

export default InputFilterField