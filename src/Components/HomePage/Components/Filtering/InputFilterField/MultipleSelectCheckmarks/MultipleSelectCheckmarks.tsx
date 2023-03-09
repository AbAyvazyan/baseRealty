import * as React from 'react';
import './MultipleSelectCheckmarks.css'
import { FC,  useEffect,  useRef, useState} from "react";




type Tmodels={
    title:string
}




interface TSelect {
    holder:string,
    models?:Tmodels[],
    fromTo:boolean,
    openModalHandler:(_id:string | undefined)=>void,
    _id:string,
    isOpen:boolean,
}

const MultipleSelectCheckmarks:FC<TSelect> = ({_id,holder,models,isOpen,fromTo,openModalHandler}) => {

    const [checkboxesModal,setcheckboxesModal] = useState<Tmodels[]>()

    useEffect(()=>{
        setcheckboxesModal(models)
    },[])


    const modalRef = useRef<HTMLDivElement>(null);


    useEffect(()=>{
        const listener = (e:MouseEvent)=>{
            if(e.target !== modalRef.current ){
                openModalHandler(undefined)
            }
        }
        window.addEventListener('click',listener)
        return ()=>{
            window.removeEventListener('click',listener);
        }
    },[])

    return(<>

        <div className={'multiple_select'} onClick={(e)=>{
            e.stopPropagation()
            openModalHandler(_id)
        }} ref={modalRef}>
            {holder}
            <span  className={isOpen ? 'select_arrow_clicked' : 'select_arrow'} ><i className="fa fa-angle-down" ></i></span>

            {isOpen ? <div className={'multiple_select_modal'}  onClick={(e)=>{
                e.stopPropagation();
            }
            }>


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
            </div> : null}

        </div>


        </>
    )
}

export default MultipleSelectCheckmarks;