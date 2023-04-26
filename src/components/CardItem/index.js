// Write your code here.
import './index.css'

const CardItem = props => {
  const {elements} = props
  const {title, description, imgUrl, className} = elements
  return (
    <li className={`bg-card-container ${className}`}>
      <h1 className="card-header">{title}</h1>
      <p className="card-description">{description}</p>

      <div>
        <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
