import React from "react";
import "./Card.css";
import { useNavigate } from 'react-router';


function Card ({ title, image,path}){
  
  const navigate = useNavigate();
  const handleRedirect = () => {
    console.log(path);
    navigate('/'+path);
  };

  return (
  <div className="card">
    <div className="container">
    <h2 style={{ color: 'blue', cursor: 'pointer' }} onClick={handleRedirect}>
          {title}
        </h2>
      <div class="centered-image">
        <img src={image} alt={title} />
      </div>
    </div>
  </div>
);
}

export default Card;
