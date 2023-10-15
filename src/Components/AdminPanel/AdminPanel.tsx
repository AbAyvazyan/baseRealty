import './AdminPanel.css'
import {useNavigate} from "react-router";
import withAuthorization from "../../hoc/autorization";
import {useEffect, useState} from "react";

const AdminPanel = () => {
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);

    useEffect(() => {
        const storageUser = localStorage.getItem('user');

        if (storageUser) {
            const user = JSON.parse(storageUser);
            setIsSuperAdmin(user.role === 'Super Admin');
        }
    }, []);

    const navigate = useNavigate()

    const logOutHandler = () => {
        localStorage.removeItem('userToken')
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <section className={'admin_panel'}>
            <div className={'navigation_panel'}>
                <div onClick={() => navigate('/admin-dashboard')}>Open Dashboard</div>
                <div onClick={() => navigate('/housePosting')}>Post a house</div>
                {isSuperAdmin ? <div onClick={() => navigate('/register')}>Register</div> : <></>}
                <div onClick={logOutHandler}>Log Out</div>

            </div>
        </section>
    )
}

export default withAuthorization(AdminPanel)