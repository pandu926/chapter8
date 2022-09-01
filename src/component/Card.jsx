import React from 'react';

function Card(props) {
  const players = props.player;
  return (
    <div className="card" style={{ width: "10rem" }}>
        <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/34/posts/29003/preview_image/react.js.png" className="card-img-top" alt="..." />
        <div className="card-body\">
            <p className="card-text">{players.title} </p>
        </div>
    </div>
  )
}

export default Card;