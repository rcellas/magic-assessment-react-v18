import { useParams } from 'react-router-dom'
import CardInfo from '../../components/CardInfo/CardInfo'

function CardsDetailsPages() {
    const {cardId}= useParams()
    return (
        <CardInfo cardId={cardId}/>
    )
}

export default CardsDetailsPages