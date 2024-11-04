import "./CardDetail.css"

function CardDetail({ card }) {
  return (
    card.imageUrl ? (
      <div className="card">
        <img src={card.imageUrl} alt={card.name} />
        <h2>{card.name}</h2>
        <div className="type">
          <h3>Type</h3>
          <p>{card.type}</p>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{card.text}</p>
        </div>
      </div>
    ) : null
  )
}

export default CardDetail