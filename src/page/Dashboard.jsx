import React from 'react';
import {Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useGlobal } from '../context/GlobalContext';
const Dashboard = () => {
  const [state] = useGlobal();
  const data = state.post;
  const token = localStorage.getItem('accesToken');
  const user = jwt_decode(token);
  const filterData = data.filter((dt)=> dt.user_id === Number(user.id));
  
  return (
    
      <div>
        <table className='table container'>
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
                    
                    <th>{data.title}</th>
                    <th>{data.body}</th>
                    <th>{data.image}</th>
                    <th>
                      <button>delete</button>
                      <Link to={`/post/edit/${data.id}`}><button>edit</button></Link>
                    </th>
                </tr>
                ))}
                
            </thead>
        </table>
    </div>
  
  )
}

export default Dashboard;