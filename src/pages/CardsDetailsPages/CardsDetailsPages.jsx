import { useParams } from 'react-router-dom'
import CardInfo from '../../components/CardInfo/CardInfo'

function CardsDetailsPages() {
    const {cardId}= useParams()
    return (
        <CardInfo card={cardId}/>
    )
}

export default CardsDetailsPages