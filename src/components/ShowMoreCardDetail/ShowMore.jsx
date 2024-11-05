
import { useNavigate } from "react-router-dom"
import "./ShowMore.css"
function ShowMore(cardId) {
  console.log(cardId)
  const navigate = useNavigate();
  
  const handleRedirect = (productId) => {
    navigate(`/cards/${productId}`);
  };

  return (
    <button className='btn-showMore' onClick={()=>handleRedirect(cardId.cardId)}>Show More</button>
  )
}

export default ShowMore