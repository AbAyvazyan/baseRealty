import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import menuLogo from '../../assets/images/logo.png';



import Languages from "../Languages/Languages";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

type Tcategorise={
    routeTo:string,
    categoryName:string
}

const categories:Tcategorise[] = [
    {
        routeTo:'sale',
        categoryName:'SALE'
    },

    {
        routeTo:'rent',
        categoryName:'RENT'
    },

    {
        routeTo:'contact',
        categoryName:'CONTACT'
    },
]

let activeStyle = {
    fontWeight:'500',
    color:'rgb(12,51,58)',
    fontSize:'20px'
};

let simpleStyle = {
    fontWeight:'400',
    textDecoration:'none',
    color:'rgb(12,51,58)',
    fontSize:'18px'
};

const AppBar = () =>{

    const {t} = useTranslation()

    const routeClickHandler = () =>{
        window.scrollTo(0,0)
    }




    return (
        <header style={{height:'100px',width:'100%'}} >
            <Navbar bg={'white'} className="fixed-top" expand={'lg'} >
                <Container>
                    <NavLink to="/" onClick={routeClickHandler}><img src={menuLogo} width='90' height='90'/></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-5 mt-3 mb-3">


                            {categories.map((item,index)=>{
                                return <NavLink to={item.routeTo}
                                                onClick={routeClickHandler}
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : simpleStyle
                                                }  key={index} className={'nav_categories mr-5 mt-1'}>{t(item.categoryName)}</NavLink>
                            })}


                        </Nav>
                    </Navbar.Collapse>
                    <Languages/>
                </Container>

            </Navbar>

         </header>
    );
}



export default AppBar;