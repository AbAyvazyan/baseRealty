import './InputFilterField.css'

import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import uuid from "react-uuid";
import * as React from "react";
import {useCallback, useEffect, useState} from "react";

export type Tstate = {
    _id:string;
    holder:string;
    fromTo:boolean;
    isOpen:boolean;
    models?:{title:string}[]
}

const initialState:Tstate[] = [
    {
        _id:uuid(),
        holder:'Apartment',
        models:[
            {
                title:'Newly Built'
            }
        ],
        fromTo:false,
        isOpen:false
    },
    {
        _id:uuid(),
        holder:'Rooms',
        fromTo:true,
        isOpen:false

    },
    {
        _id:uuid(),
        holder:'Floor',
        fromTo:true,
        isOpen:false

    },
    {
        _id:uuid(),
        holder:'Price',
        fromTo:true,
        isOpen:false

    },
    {
        _id:uuid(),
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
        fromTo:false,
        isOpen:false

    },
]

const InputFilterField = () =>{
    const [multipleSelect,setMultipleSelect] = useState<Tstate[]>(initialState)
    const openModalHandler = useCallback((_id:string | undefined) =>{
        setMultipleSelect((p)=>p.map((val)=>{
            if(val._id === _id){
                val.isOpen = !val.isOpen
            } else{
                val.isOpen = false
            }
            return val;
        }))
    },[multipleSelect])



    return(
        <>

    <form  className='input_filter_form'>
            <div className='input_filtering_field'>
                {multipleSelect.map((val)=>
                    <MultipleSelectCheckmarks {...val}  openModalHandler={openModalHandler} key={val._id} />
                )}
            </div>

        </form>

        </>
    )
}

export default InputFilterField