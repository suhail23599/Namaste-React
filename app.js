import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
  return (
    <h1 id="title">
      Food Villa
    </h1>
  )
}

const Header = () => {
  return (
    <div className='header'>
      <Title />
       <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>  
          <li>Contact</li>
          <li>Cart</li>
        </ul>
       </div>
    </div>
  )
}

/**
    * Header
     -logo
     -navbar
     -cart
    * Body
      -Search
      -Reastaurant list
       -Resto card
        -image
        -name
        -rating
        -cuisines
    * Footer
       -reference links
       -contacts
       -copywrite
*/

const restaurantList = [
  {
    name: 'Bangalore kitchen',
    food: 'Burger',
    rating: '4.2',
    cuisines: ['American', 'italian'],
    imgUrl: 'https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg'
  },
  {
    name: 'kitchen 1',
    food: 'Biriyano',
    rating: '4',
    cuisines: ['Indian', 'italian'],
    imgUrl: 'https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg'
  }
]

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

const Body = () => {
  return (
    <div className="list">
      Body
      {
        restaurantList.map ((rest,index) => {
          return <RestaurantCard {...rest} key={index}></RestaurantCard>
        })
      }
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Foter
    </div>
  )
}

const AppLayout = () => {
  return (
   <>
      <></>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
   </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout></AppLayout>)