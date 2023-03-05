import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import menuLogo from '../../assets/images/logo.png';

// import {useNavigate} from "react-router";

import Languages from "../Languages/Languages";
import {NavLink} from "react-router-dom";

type Tcategorise={
    routeTo:string,
    categorieName:string
}

const categories:Tcategorise[] = [
    {
        routeTo:'sale',
        categorieName:'For Sale'
    },

    {
        routeTo:'rent',
        categorieName:'For Rent'
    },

    {
        routeTo:'contact',
        categorieName:'Contact Us'
    },
]

let activeStyle = {
    fontWeight:'500',
    textDecoration:'underline',
    color:'rgb(12,51,58)',
    fontSize:'18    px'
};

let simpleStyle = {
    fontWeight:'400',
    textDecoration:'none',
    color:'rgb(12,51,58)',
    fontSize:'18px'
};

const AppBar = () =>{


    return (
        <>
            <Navbar bg={'white'} className="fixed-top"   style={{width:'100%'}}>
                <Container>
                    <NavLink to="/"><img src={menuLogo} width='90' height='90'/></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-5">


                            {categories.map((item,index)=>{
                                return <NavLink to={item.routeTo}
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : simpleStyle
                                                }  key={index} className={'nav_categories mr-5'}>{item.categorieName}</NavLink>
                            })}




                        </Nav>
                    </Navbar.Collapse>
                    <Languages/>
                </Container>
            </Navbar>
        </>
    );
}



export default AppBar;