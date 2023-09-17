import { restaurantList } from '../constants'
import RestaurantCard from './RestaurantCard'
import { useState } from 'react'

const Body = () => { 
  const [searchText, setSearchText] = useState('KFC') // returns [variable name, setVariable method]
  const [restaurants, setRestaurants] = useState(restaurantList)

  function filterData (keyword, restaurants) {
    const result = restaurants.filter(rest => rest.food.includes(keyword))
    setRestaurants(result)
  }
  return (
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
          filterData(searchText, restaurants)
        }}>
          Search
        </button>
      </div>
      <div className="list">
        {
          restaurants.map((rest, index) => {
            return <RestaurantCard {...rest} key={index}></RestaurantCard>
          })
        }
      </div>
    </>
    
  )
}

export default Body