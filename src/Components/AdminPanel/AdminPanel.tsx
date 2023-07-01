import './AdminPanel.css'
import {useNavigate} from "react-router";
import withAuthorization from "../../hoc/autorization";

const AdminPanel = () =>{

    const navigate = useNavigate()

    return(
        <section className={'admin_panel'}>
            <div className={'navigation_panel'}>
                <div onClick={()=>navigate('/admin-dashboard')}>Open Dashboard</div>
            </div>
        </section>
    )
}

export default withAuthorization(AdminPanel)