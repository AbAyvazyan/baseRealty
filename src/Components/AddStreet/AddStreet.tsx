import './AddStreet.css'
import * as React from "react";
import {useNavigate} from "react-router";


const AddStreet = () =>{

    const navigate = useNavigate()

    return(
        <section className={'add_street_section'}>

            <div className={'go_back'} style={{marginLeft:'auto'}} onClick={()=>navigate('/admin--panel')}>Admin Panel</div>


            <div className={'add_street_part'}>
                <div>
                    <div><input type="text" placeholder={'Street'}/></div>
                    <div><div className={'add_button_panel'}>Add</div></div>
                </div>
                <div className={'street_shower'}>
                    <div>
                        <div className={'single_street_panel'}><div>Poxoci Anun</div> <span>X</span></div>
                        <div className={'single_street_panel'}><div>Poxoci Anun</div> <span>X</span></div>
                        <div className={'single_street_panel'}><div>Poxoci Anun</div> <span>X</span></div>
                        <div className={'single_street_panel'}><div>Poxoci Anun</div> <span>X</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddStreet