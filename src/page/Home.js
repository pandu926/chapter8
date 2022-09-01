import React from 'react';

import Card from '../component/Card';
import {Link} from "react-router-dom";
import { useGlobal } from '../context/GlobalContext';

const Home = () => {
    const [state] = useGlobal();
    const data = state.post;

  return (
    <div className="container mt-5">
    <div className='d-flex row'>
       
            { data.map((player) => (
            <div className="col-2 mt-5">
                <Link to={`/post/${player.id}`}> <Card player={player}/></Link>
             </div>
            ))}
    </div>
    </div>
  )
}

export default Home;