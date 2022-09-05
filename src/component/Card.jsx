import React from 'react';

function Card(props) {
  const players = props.player;
  
  return (
    <div className="card" style={{ width: "10rem" }}>
        <img src={`https://pencarikhuntul.lol/upload/${players.image}`} className="card-img-top" alt="..." />
        <div className="card-body\">
            <p className="card-text">{players.title} </p>
        </div>
    </div>
  )
}

export default Card;