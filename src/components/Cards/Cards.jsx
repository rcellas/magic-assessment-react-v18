import React from 'react'
import CardDetail from '../CardDetail/CardDetail'
import { useState,useEffect } from 'react'
import "./Card.css"

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
    <article>
        {
            cards.map((card)=>{
                return(
                  <CardDetail card={card}/>
                )
            })
        }
    </article>
  )
}

export default Cards