const RestaurantCard = ({ imgUrl, food, cuisines, rating }) => {
  return (
    <div className='card'>
      <img src={imgUrl}></img>
      <h2>{food}</h2>
      <h3>{cuisines.join(',')}</h3>
      <h4>{rating}</h4>
    </div>
  )
}

export default RestaurantCard