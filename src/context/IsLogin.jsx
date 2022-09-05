import React from 'react'
import Navbar from '../Navbar';
import { Navigate, Outlet } from 'react-router-dom';
const IsLogin = () => {
    const login = sessionStorage.getItem('accessToken');
    if(login) {return <Navbar  id={"notactive"} value={"active"}/>}
    
    if(!login){ 
        return <Navbar  id={"active"} value={"notactive"}/>  
    }
}

export default IsLogin