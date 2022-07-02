import React from 'react'

function Card({image,description,date,title}) {
  return (
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{date.toISOString()}</p>
        <img scr={image} alt="card Image"/>
    </div>
  )
}

export default Card