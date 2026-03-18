import React from 'react'
import './ProductInfo.css';

const ProductInfo = ({ imgUrl, name, price, quantity, increaseQty, decreaseQty }) => {
    return (
        <div className='productInfoContainer'>
            <div className='imageDiv'><img src={imgUrl} alt="" /></div>
            <div className='textDiv'><h3>{name}</h3><h3>₹{price}</h3></div>
            <div className='quantityDiv'>
                <button onClick={() => decreaseQty(name)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => increaseQty(name)}>+</button>
            </div>
        </div>
    )
}

export default ProductInfo
