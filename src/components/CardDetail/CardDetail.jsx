import React from 'react'

function CardDetail({card}) {
  return (
    <div>
        <img src={card.imageUrl} alt={card.name} />
        <h2>{card.name}</h2>
        <h3>Type</h3>
        <p>{card.type}</p>
        <h3>Description</h3>
        <p>{card.text}</p>
    </div>
  )
}

export default CardDetail