import React from 'react'
import ProductInfo from './components/ProductInfo'
import './CartDisplay.css'
const CartDisplay = ({cartItems, increaseQty, decreaseQty}) => {
  return (
    <div className='cartCard'>
      <h2 className='heading'>CART</h2>
      <div className='cartItemsList'>
        {cartItems.length === 0 && <p className='emptyCartText'>Your cart is sad because it is empty inside😭</p>}
      {
        cartItems.map((product, index) => (<ProductInfo key = {index} imgUrl={product.imgUrl} name={product.name} price={product.price} quantity={product.quantity} increaseQty={increaseQty} decreaseQty={decreaseQty} />))
      }
      </div>
      <button className='buyNow'>Buy Now</button>
    </div>
  )
}

export default CartDisplay
