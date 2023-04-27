import './AdminPanel.css'
import {useNavigate} from "react-router";

const AdminPanel = () =>{

    const navigate = useNavigate()

    return(
        <section className={'admin_panel'}>
            <div className={'navigation_panel'}>
                <div onClick={()=>navigate('/admin--add--street')}>Add Street</div>
                <div onClick={()=>navigate('/admin--dashboard')}>Open Dashboard</div>
            </div>
        </section>
    )
}

export default AdminPanel