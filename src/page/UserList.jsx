import React from 'react'
import { useGlobal } from '../context/GlobalContext'
const UserList = () => {
    const [state] = useGlobal();
    const users = state.user;
    
  return (
    <div>
        <table className='table container'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>fullname</th>
                    <th>email</th>
                    <th>password</th>
                </tr>
            </thead>
            <thead>
                {users.map((players)=> (
                <tr>
                    <th>{players.id}</th>
                    <th>{players.fullname}</th>
                    <th>{players.email}</th>
                    <th>{players.password}</th>
                </tr>
                ))}
                
            </thead>
        </table>
    </div>
  )
}

export default UserList