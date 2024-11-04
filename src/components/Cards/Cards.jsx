import React from 'react'
import CardDetail from '../CardDetail/CardDetail'

function Cards() {
      const [cards, setCards]=useState([])
  useEffect(()=>{
     getData()
  },[])
  const getData = () => {
    fetch("https://api.magicthegathering.io/v1/cards")
    .then(response => response.json())
    .then((data)=>setCards(data.cards))
    .catch(error => console.log("Mensaje de error: ", error))
    }
  return (
    <div>
        {
            cards.map((card)=>{
                <CardDetail card={card}/>
            })
        }
        </div>
  )
}

export default Cards