import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

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