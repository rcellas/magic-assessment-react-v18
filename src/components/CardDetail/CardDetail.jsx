import ShowMore from "../ShowMoreCardDetail/ShowMore"
import "./CardDetail.css"

function CardDetail({ card }) {
  return (
    card.imageUrl ? (
      <div className="card">
        <img src={card.imageUrl} alt={card.name} />
        <h2>{card.name}</h2>
        <div className="type">
          <p>{card.type}</p>
        </div>
        <div className="setName">
          <p>{card.setName}</p>
        </div>
        <ShowMore/>
      </div>
    ) : null
  )
}

export default CardDetail