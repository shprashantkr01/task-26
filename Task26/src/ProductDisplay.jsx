
import ProductCard from './components/ProductCard'
import './ProductDisplay.css'
export const productDetails = [
    {
        imgUrl:"https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png",
        name:"Sports shoes",
        price:"2100",
    },
    {
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSo6Hs8Vrr9ZtWHw1vQ7L7Ggp-EaYv0OOvMw&s",
        name:"Running shoes",
        price:"3000",
    },
    {
        imgUrl:"https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/10/r9453WdD_d2f882f02b1841578672bc737e562893.jpg",
        name:"Casula leather shoes",
        price:"1800",
    },
    {
        imgUrl:"https://5.imimg.com/data5/SELLER/Default/2023/7/323356025/UR/EQ/WS/192140499/safeimagekit-resized-img-3--500x500.png",
        name:"sneakers",
        price:"4000",
    },
    {
        imgUrl:"https://admin.mochishoes.com/product/19-752/660/19-752LA23.jpg",
        name:"Premium leather shoes",
        price:"3999",
    },
    {
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Mu33_gxt2x8Y8RzJy1-3VSoJrGmmSIflQw&s",
        name:"Green transparent running shoes",
        price:"2000",
    },
    {
        imgUrl:"https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png",
        name:"Sports shoes",
        price:"2100",
    },
    {
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSo6Hs8Vrr9ZtWHw1vQ7L7Ggp-EaYv0OOvMw&s",
        name:"Running shoes",
        price:"3000",
    },
    {
        imgUrl:"https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/10/r9453WdD_d2f882f02b1841578672bc737e562893.jpg",
        name:"Casula leather shoes",
        price:"1800",
    },
    {
        imgUrl:"https://5.imimg.com/data5/SELLER/Default/2023/7/323356025/UR/EQ/WS/192140499/safeimagekit-resized-img-3--500x500.png",
        name:"sneakers",
        price:"4000",
    },
    {
        imgUrl:"https://admin.mochishoes.com/product/19-752/660/19-752LA23.jpg",
        name:"Premium leather shoes",
        price:"3999",
    },
    {
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Mu33_gxt2x8Y8RzJy1-3VSoJrGmmSIflQw&s",
        name:"Green transparent running shoes",
        price:"2000",
    }
];

const ProductDisplay = ({addToCart}) => {
  return (
    <div className='ProductDisplay'>
      {productDetails.map((product,index)=>
      (
        <ProductCard
        key={index}
        imgUrl={product.imgUrl}
        name={product.name}
        price={product.price}
        addToCart={addToCart}
        />
      ))}
    </div>
  )
}

export default ProductDisplay
