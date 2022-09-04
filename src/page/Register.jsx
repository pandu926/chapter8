import React from 'react';
import { useState } from 'react';
import { Input } from '../component/Input';
const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            'fullname': fullname,
            'email': email,
            'password': password
        }
        fetch('http://47.89.219.170:8000/user/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data),    
        })
        .then(res => res.json())
        
    
    }


    const [fullname, setFulname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className="container mt-5">
    <form onSubmit={handleSubmit}>
    <Input id={"fullname"} title={"fullname"} set={(e) => setFulname(e.target.value)}/>
    <Input id={"email"} title={"email"} set={(e) => setEmail(e.target.value)}/>
    <Input id={"password"} title={"password"} set={(e) => setPassword(e.target.value)}/>
    <button type="submit" className="btn btn-primary">
        Login
    </button>

    </form>
</div>
  )
}

export default Register;