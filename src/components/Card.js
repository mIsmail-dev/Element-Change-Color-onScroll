import './card.scss'
const Card = ({ color }) => {
  return (
    <div className='card-container' style={{ backgroundColor: color }}></div>
  )
}

export default Card
