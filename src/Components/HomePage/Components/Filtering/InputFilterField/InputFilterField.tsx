import './InputFilterField.css'

import MultipleSelectCheckmarks, {Tmodels} from "./MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import uuid from "react-uuid";
import * as React from "react";
import {useCallback, useEffect, useState} from "react";

export type Tstate = {
    _id:string;
    holder:string;
    fromTo:boolean;
    isOpen:boolean;
    models?:Tmodels[]
}

const initialState:Tstate[] = [
    {
        _id:uuid(),
        holder:'Apartment',
        models:[
            {
                title:'Newly Built',
                isChecked:false,
                _id:uuid()
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
                title:'Arabkir',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Kentron',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Ajapnyak',
                isChecked:false,
                _id:uuid()
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