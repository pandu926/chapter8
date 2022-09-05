import React from 'react';
import {Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useGlobal } from '../context/GlobalContext';
import Button from '../component/Button';
const Dashboard = () => {
  const [state] = useGlobal();
  const data = state.post;
  const token = sessionStorage.getItem('accessToken'); 
  const user = jwt_decode(token);
  const filterData = data.filter((dt)=> dt.user_id === Number(user.id));
  
  return (
    
      <div className='container mt-5'>
        <Link to={'/post/add'}><Button name={"add post"} class={'btn btn-primary'}/></Link>
        <table className='table'>
            <thead>
                <tr>
                    
                    <th>title</th>
                    <th>body</th>
                    <th>image</th>
                    <th>action</th>
                </tr>
            </thead>
            <thead>
                {filterData.map((data)=> (
                <tr>
                    
                    <th>{data?.title}</th>
                    <th>{data?.body}</th>
                    <th>{data?.image}</th>
                    <th>
                      <Link to={`/post/edit/${data.id}`}><Button name={"Edit"} /></Link>
                    </th>
                </tr>
                ))}
                
            </thead>
        </table>
    </div>
  
  )
}

export default Dashboard;