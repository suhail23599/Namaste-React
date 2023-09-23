import { restaurantList } from '../constants'
import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'

const Body = () => {
  // fetch -> Dont call Api HERE, because on every rerender it will call api 
  const [searchText, setSearchText] = useState('') // returns [variable name, setVariable method]
  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  // call back will be called only once if array is empty, it is called only when any of the depency satate variable changes 
  useEffect(() => {
  //  API
  getRestaurants()
  }, [])

  async function getRestaurants () {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json()
    const result = json.data?.cards[5].card.card.gridElements.infoWithStyle.restaurants
    setRestaurants(result)
    setFilteredRestaurants(result)
  }
  function filterData (keyword) {
    console.log(restaurants, 'res')
    const result = restaurants.filter(rest => rest.info.name.includes(keyword))
    setFilteredRestaurants(result)
  }
  if(!restaurants) {
    return null // early return
  }

  if(filteredRestaurants.length === 0) {
    return (
      <>
      <h1> No restaurant match </h1>
      </>
    )
  }

  return (restaurants.length === 0) ? <Shimmer></Shimmer> : (
    <>
      <div className='search-container'>
        <input
          type='text'
          placeholder='text'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        >
        </input>
        <button className='search-btn' onClick={() => {
          // filter data
          filterData(searchText)
        }}>
          Search
        </button>
      </div>
      <div className="list">
        {
          filteredRestaurants.map((rest, index) => {
            return <RestaurantCard {...rest.info} key={index}></RestaurantCard>
          })
        }
      </div>
    </>
    
  )
}

export default Body