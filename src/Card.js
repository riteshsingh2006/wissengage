import React from 'react'
import './Card.css';

const Card = ({ title, image, description }) => (
 
  <div className="card">
    <div className="container">
      <h2>{title}</h2>
      <div class="centered-image">
      <img src={image} alt={title} />
    </div>
      <p>{description}</p>
    </div>
  </div>
)

export default Card