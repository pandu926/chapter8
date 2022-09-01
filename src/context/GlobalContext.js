
import React from 'react';
import {  useEffect, createContext, useReducer, useContext } from 'react';
import  {AppReducer}  from './AppReducer';

const initialState = {
    user: [],
    post: [],
    accessToken: '',
}

export const Global = createContext({});
export function useGlobal(){
    return useContext(Global);
}




const GlobalContext = ({children}) => { 
    const [state , dispatch] = useReducer(AppReducer, initialState);
    useEffect(() => {
       fetchDataPost();
       fetchDataUser();
       tokenJWT();
    }, []);

    const fetchDataPost = async() => {
        const response = await fetch("http://localhost:8000/post");
        const data = await response.json();
        dispatch({
            type: "LIST_POST",
            payload: data
           });
    }
    const fetchDataUser = async() => {
        const response = await fetch("http://localhost:8000/user");
        const data = await response.json();
        dispatch({
            type: "LIST_USER",
            payload: data
           });
    }
    const tokenJWT = () => {
        dispatch({
            type: "LOGIN",
            payload: localStorage.getItem('accesToken')
           });
    }
    
    const globalValue = [state, dispatch];

   
  return (

    <Global.Provider value={globalValue}>
        {children}
    </Global.Provider>
  )
}

export default GlobalContext;