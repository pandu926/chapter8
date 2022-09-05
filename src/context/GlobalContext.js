
import React from 'react';
import {  useEffect, createContext, useReducer, useContext } from 'react';
import  {AppReducer}  from './AppReducer';

const initialState = {
    user: [],
    post: [],
    accessToken: '',
}

export const Global = createContext(initialState);
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
        const response = await fetch("https://pencarikhuntul.lol/post");
        const data = await response.json();
        dispatch({
            type: "LIST_POST",
            payload: data
           });
    }
    const fetchDataUser = async() => {
        const response = await fetch("https://pencarikhuntul.lol/user");
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