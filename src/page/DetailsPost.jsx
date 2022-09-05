import React from 'react'
import {useParams} from "react-router-dom";
import { useGlobal } from '../context/GlobalContext';


const DetailsPost = () => {
    const {id} = useParams();
    const [state] = useGlobal();
    const data = state.post;
    const [players] = data.filter((dt) => dt.id === Number(id))
    
    
  return (
    <div>
        <table className='table container'>
            <thead>
                <tr>
                    <th>title</th>
                    <th> body</th>
                    <th>image</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th>{players?.title}</th>
                    <th>{players?.body}</th>
                    <th>{players?.image}</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default DetailsPost