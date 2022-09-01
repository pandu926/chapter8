import React from 'react';
import "../style/login.css"; 
import {useState} from 'react';
import { useGlobal } from '../context/GlobalContext';

const Login = () => {
  const [state ,dispatch] = useGlobal();
  const loginSubmit = (e) => {
    e.preventDefault();
    const data = {
      'email': email,
      'password': password
    }
    fetch('http://localhost:8000/auth/login',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
                'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(st => localStorage.setItem('accesToken', st.accessToken));
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(state);
  
  return (
    <div className="container mt-5">
        <form onSubmit={loginSubmit}>
        <div className="mb-3 col-sm-12 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
            </label>
            <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e)=> setEmail(e.target.value)}
            />

        </div>
        <div className="mb-3 col-sm-12 col-md-6">
            <label htmlFor="exampleInputPassword1" className="form-label">
            Password
            </label>
            <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary">
            Login
        </button>

        </form>
    </div>
  )
}

export default Login