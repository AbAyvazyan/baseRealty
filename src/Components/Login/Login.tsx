import './Login.css'

const Login = () =>{
    return(
        <section style={{width:'100%',height:'82.7vh'}}>


            <form className={'login_form'}>
                <h2>Login</h2>
                <input type="text" placeholder={'username'}/>
                <input type="password" placeholder={'password'}/>
                <div>Enter</div>
            </form>
        </section>
    )
}

export default Login