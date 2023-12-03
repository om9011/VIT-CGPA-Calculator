import React from 'react'
import "./Card.css"

const Card = ({heading, body}) => {
  return (
    <div className='Card'>
        <div className='card-heading'>
            <h3>{heading}</h3>
        </div>
        <div className='card-body'>
            <p>{body}</p>
        </div>
        <button className='go-to-page' onClick={"#" + heading}>Go TO {heading}</button>
    </div>
  )
}

export default Card