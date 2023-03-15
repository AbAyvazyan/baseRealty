import * as React from 'react';
import './MultipleSelectCheckmarks.css'
import {FC, useEffect, useId, useRef, useState} from "react";

import uuid from "react-uuid";




type Tmodels={
    title:string
}




interface TSelect {
    holder:string,
    models?:Tmodels[],
    fromTo:boolean
}

const MultipleSelectCheckmarks:FC<TSelect> = ({holder,models,fromTo}) => {

    const [checkboxesModal,setcheckboxesModal] = useState<Tmodels[]>()

    useEffect(()=>{
        setcheckboxesModal(models)
    },[])

    const [arrowPos,setArrowPos] = useState(false)
    const [modal,setModal] = useState(false)

    const modalRef = useRef(null)
    const arrowRef = useRef(null)
    const spanRef = useRef(null)



    const openModalHandler = (e:React.MouseEvent) =>{
        if (modalRef.current  === e.target || arrowRef.current ===e.target || spanRef.current ===e.target){
            setArrowPos(!arrowPos)
            setModal(!modal)
        }else{
            return false
        }

    }

    return(<>

        <div className={'multiple_select'} onClick={(e)=>openModalHandler(e)} ref={modalRef}>
            {holder}
            <span ref={spanRef} className={arrowPos ? 'select_arrow_clicked' : 'select_arrow'} ><i className="fa fa-angle-down" ref={arrowRef}></i></span>

            {modal && <div className={'multiple_select_modal'}>


                    { !fromTo &&( checkboxesModal && checkboxesModal.map((item,index)=>{
                        return <div key={index} className={'checkobox_modal_selects'}>

                            <label className="form-control" >
                                <input type="checkbox" name="checkbox"/>
                                {item.title}
                            </label>
                        </div>
                    }))
                    }

                {
                    fromTo && <div className={'from_to_modal'}>

                        <input type="number" placeholder={'from'}/>
                        <input type="number" placeholder={'to'}/>

                    </div>
                }





            </div>}
        </div>


        </>
    )
}

export default MultipleSelectCheckmarks;