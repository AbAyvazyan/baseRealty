import React from 'react';
import './App.css';
import AppBar from "./Components/AppBar/AppBar";
import {Routes,Route} from "react-router";


import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import SalePage from "./Components/SalePage";
import RentPage from "./Components/RentPage";
import ContactPage from "./Components/ContactPage";
import SingleHouse from "./Components/SingleHouse";
import Login from './Components/Login'
import HousePosting from "./Components/HousePosting";
import AdminPanel from "./Components/AdminPanel";
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";
import EditPost from "./Components/EditPost";
import DailyPage from "./Components/Daily";


const routes = [
    {
        path:'/',
        component:HomePage
    },
    {
        path:'/sale',
        component:SalePage
    },
    {
        path:'/rent',
        component:RentPage
    },
    {
        path:'/contact',
        component:ContactPage
    },
    {
        path:'/house/:code',
        component:SingleHouse
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/housePosting',
        component:HousePosting
    },
    {
        path:'/editPost/:id',
        component:EditPost
    },
    {
        path:'/admin-panel',
        component:AdminPanel
    },
    {
        path:'/admin-dashboard',
        component:Dashboard
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/daily',
        component:DailyPage
    },
]


const App=()=>{
  return (
    <>
      <AppBar/>

      <main>
            <Routes>
                {routes.map(({path, component:Component},index)=>{
                    return <Route path={path} key={index} element={<Component/>}/>
                })}
            </Routes>
      </main>

      <Footer/>
    </>
  );
}

export default App;
