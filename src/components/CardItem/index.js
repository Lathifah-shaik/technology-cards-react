// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem

  return (
    <li className={`${className} card-container`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
