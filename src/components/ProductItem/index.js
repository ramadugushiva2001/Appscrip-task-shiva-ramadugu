
import { FaStar } from 'react-icons/fa';
import './index.css'

const Productitem=props=>{
const {product}=props
const {image,title,price,description,rating}=product
console.log(rating.rate)

return(
    <li className='product-item'>
        <div>
        <img src={image} alt={title} className="product-image"/>
        <h1 className='product-name'>{title}</h1>
        <p className='product-description'>{description}</p>
        <div className='rating-and-price'>
            <p>{price} $</p>
            <p>{rating.rate} <FaStar size={20} /> </p>
        </div>
        </div>
        <button type="button" className='add-to-cart-button'>ADD TO CART</button>
    </li>
)
}

export default Productitem
