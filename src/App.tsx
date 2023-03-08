import React, {ReactNode} from 'react';
import {FC} from "react";
import './App.css';
import AppBar from "./Components/AppBar/AppBar";
import {Routes,Route} from "react-router";


import HomePage from "./Components/HomePage";
console.log(15)


const routes = [
    {
        path:'/',
        component:HomePage
    },

]


const App=()=>{
  return (
    <>
      <AppBar/>
      <Routes>
          {routes.map(({path, component:Component},index)=>{
              return <Route path={path} key={index} element={<Component/>}/>
          })}
      </Routes>
    </>
  );
}

export default App;
