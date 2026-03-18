import React from 'react'
import NavBar from './Navbar.jsx'
import ProductDisplay from './ProductDisplay.jsx'
import './App.css'
import CartDisplay from './CartDisplay.jsx'
import { useState } from 'react'

const App = () => {
  const [cartItems, setCartItems] = useState([])
  //Add to cart function for the productCard.jsx add to cart button.
  const addToCart = (product) => {
    setCartItems(prev => {

      const existingItem = prev.find(item => item.name === product.name)

      if (existingItem) {
        // increase quantity if already exists
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }
  //increaseQty function to increase the quantity of the already addded item in Productinfo.jsx
  const increaseQty = (name) => {
    setCartItems(prev =>
      prev.map(item =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }
  //decreaseQty function for the ProductInfo.jsx to decrease the already added item in the cart.
  const decreaseQty = (name) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }
  return (
    <>
      <NavBar />
      <div className='mainSection'>
        <div className='products'><ProductDisplay addToCart={addToCart} /></div>
        <div className='cart'>
          <CartDisplay cartItems={cartItems} increaseQty={increaseQty} decreaseQty={decreaseQty} />
        </div>
      </div>

    </>
  )
}

export default App
