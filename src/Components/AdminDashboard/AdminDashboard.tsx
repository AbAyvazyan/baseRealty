import './AdminDashboard.css'
import * as React from "react";
import {useNavigate} from "react-router";

const AdminDashboard = () =>{

    const navigate = useNavigate()


    return(
        <section className={'admin_dashboard'}>

            <div className={'dashboard_sidebar'}>
                    <div>
                        <label><input type="radio"/>Վարձ</label>
                        <label><input type="radio"/>Օրավարձ</label>
                        <label><input type="radio"/>Վաճառք</label>
                    </div>
                    <div>Բնակարան</div>
                    <div>Տուն</div>
                    <div>Կոմերցիոն</div>
                    <div style={{borderBottom:'1px solid rgb(var(--text-color))'}}>Հող</div>

                    <span className={'go_back go_admin_button'} onClick={()=>navigate('/admin--panel')}>Admin Panel</span>
            </div>

            <div className={'dash_part'}>
                <div className={'dashboard_input_part'}>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>

                    <label>
                        <span>Marz</span>
                        <input type="text"/>
                    </label>
                </div>

                <div className={'main_dashboard_part'}>

                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(item=>{
                        return  <div key={item} className={'single_dash_item'}>
                            <div></div>
                            <div></div>
                        </div>
                    })}



                </div>
            </div>

        </section>
    )
}

export default AdminDashboard