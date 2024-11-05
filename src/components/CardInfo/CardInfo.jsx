import { useLoaderData, useParams } from 'react-router-dom';
import "./CardInfo.css"

function CardInfo() {
  const { cardId } = useParams();
  const cards = useLoaderData();

  const card = cards.find((c) => c.id === cardId);

  return (
    <section className='cardInfo'>
      <div className='cardInfo-img'>
        <img src={card.imageUrl} alt={card.name} />
      </div>
      <article>
        <h1>{card.name}</h1>
        <div className='cardInfo-box'>
            <h2>Type</h2>
            <p>{card.type}</p>
        </div>
        <div className='cardInfo-box'>
            <h2>Edition</h2>
            <p>{card.setName}</p>
        </div>
        <div className='cardInfo-box'>
            <h2>Artist</h2>
            <p>{card.artist}</p>
        </div>
        <div className='cardInfo-box'>
            <h2>Description</h2>
            <p>{card.text}</p>
        </div>
      </article>
    </section>
  );
}

export default CardInfo;
