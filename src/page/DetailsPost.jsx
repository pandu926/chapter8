import React from 'react'
import {useParams} from "react-router-dom";
import { useGlobal } from '../context/GlobalContext';


const DetailsPost = () => {
    const {id} = useParams();
    const [state] = useGlobal();
    const data = state.post;
    const [players] = data.filter((dt) => dt.id === id)
    console.log(data, players);
    
  return (
    <div>
        <table className='table container'>
            <thead>
                <tr>
                    <th>id</th>
                    <th> penulis id</th>
                    <th>title</th>
                    <th> body</th>
                    <th>image</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    {/* <th>{players.id}</th>
                    <th>{players.user_id}</th>
                    <th>{players.title}</th>
                    <th>{players.body}</th>
                    <th>{players.image}</th> */}
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default DetailsPost