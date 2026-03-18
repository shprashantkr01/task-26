import React from 'react'
import './ProductCard.css'


const ProductCard = ({ imgUrl, name, price, addToCart }) => {
  return (
    <div className="productCard">
      <div>
        <img src={imgUrl} alt="Product image" />
      </div>

      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <button onClick={() => addToCart({ imgUrl, name, price })
        }>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard