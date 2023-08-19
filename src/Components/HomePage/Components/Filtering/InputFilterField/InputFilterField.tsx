import './InputFilterField.css'

import MultipleSelectCheckmarks, {Tmodels} from "./MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import uuid from "react-uuid";
import * as React from "react";
import {FC, useCallback, useEffect, useState} from "react";

export type Tstate = {
    _id:string;
    holder:string;
    fromTo:boolean;
    isOpen:boolean;
    models?:Tmodels[];
    singleCheck:boolean;

}

type InputFilterField = {
    initialState:any
    searched:boolean
}


const InputFilterField:FC<InputFilterField> = ({initialState,searched}) =>{
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
                    <MultipleSelectCheckmarks {...val} searched={searched}  openModalHandler={openModalHandler} key={val._id} />
                )}
            </div>

        </form>

        </>
    )
}

export default InputFilterField