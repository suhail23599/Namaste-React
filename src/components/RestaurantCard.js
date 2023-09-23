const RestaurantCard = ({ name, cuisines, avgRating }) => {
  return (
    <div className='card'>
      {/* <img src={imgUrl}></img> */}
      <h2>{name}</h2>
      <h3 className="word-break">{cuisines?.join(',')}</h3>
      <h4>{avgRating}</h4>
    </div>
  )
}


export default RestaurantCard