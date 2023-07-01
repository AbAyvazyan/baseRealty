import {ChangeEvent, useCallback, useState} from "react";
import './Login.css'
import {useNavigate} from "react-router";

const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onEnterHandler = useCallback(async () => {
        fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": userName,
                "password": password
            })
        }).then(res => res.json()).then(response => {
            if (!response) {
                return
            }
            response.token && localStorage.setItem('userToken', JSON.stringify(response.token))
            response.user && localStorage.setItem('user', JSON.stringify(response.user))
            navigate('/admin-panel')
        })


    }, [userName, password])

    return (
        <section style={{width: '100%', height: '82.7vh'}}>


            <form className={'login_form'}>
                <h2>Login</h2>
                <input type="text" placeholder={'username'} value={userName}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value.trim())}/>
                <input type="password" placeholder={'password'} value={password}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value.trim())}/>
                <div onClick={onEnterHandler}>Enter</div>
            </form>
        </section>
    )
}

export default Login