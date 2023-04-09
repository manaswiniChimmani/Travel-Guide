import './index.css'

const TravelItem = props => {
  const {data} = props

  const {id, imageUrl, name, description} = data
  return (
    <li className="card">
      <img src={imageUrl} alt={name} className="img" />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </li>
  )
}
export default TravelItem
