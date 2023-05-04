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
    models?:Tmodels[];
    singleCheck:boolean;

}

const initialState:Tstate[] = [
    {
        _id:uuid(),
        holder:'Property_Type',
        models:[
            {
                title:'Apartment',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'House',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Commercial',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Land',
                isChecked:false,
                _id:uuid()
            }
        ],
        fromTo:false,
        isOpen:false,
        singleCheck:false
    },
    {
        _id:uuid(),
        holder:'Place',
        models:[
            {
                title:'Yerevan',
                isChecked:false,
                state:true,
                _id:uuid()
            },
            {
                title:'Kentron',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Arabkir',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Achapnyak',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Avan',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Qanaqer-Zeytun',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Davtashen',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Erebuni',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Malatia-Sebastia',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Nor-Nork',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Norq-Marash',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Shengavit',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'Nubarashen',
                isChecked:false,
                _id:uuid()
            }
        ],
        fromTo:false,
        isOpen:false,
        singleCheck:false

    },
    {
        _id:uuid(),
        holder:'Rooms',
        models:[
            {
                title:'1',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'2',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'3',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'4',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'5',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'6',
                isChecked:false,
                _id:uuid()
            },
            {
                title:'7+',
                isChecked:false,
                _id:uuid()
            }
        ],
        fromTo:false,
        isOpen:false,
        singleCheck:false
    },
    {
        _id:uuid(),
        holder:'Area',
        fromTo:true,
        isOpen:false,
        singleCheck:false

    },
    {
        _id:uuid(),
        holder:'Price',
        fromTo:true,
        isOpen:false,
        singleCheck:false

    },
    {
        _id:uuid(),
        holder:'',
        fromTo:false,
        isOpen:false,
        singleCheck:true

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