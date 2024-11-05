import { useState,useEffect } from 'react'
import CardDetail from '../CardDetail/CardDetail'
import "./Card.css"
import { useLoaderData } from 'react-router-dom'

function Cards() {
  const cards = useLoaderData()
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