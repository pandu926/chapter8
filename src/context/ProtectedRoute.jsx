import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


 const ProtectedRoute = (props) => {
    
    const isAuth = sessionStorage.getItem('accessToken');

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

// export const IsLogin = (props) => {
//     const login = true;
     
//     if(login) return <Navbar value={}/>
// }
export default ProtectedRoute;
