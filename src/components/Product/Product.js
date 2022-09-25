import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {img,name,ratings,seller,price}=props.product
const {handlerAddToCart}=props
    
    return (
        <div className='product'>
            <img src={img} alt="product img" />
            <div className='product-info'>
                <p  className='product-name'>{name}</p>
                <p>Price ${price}</p>
                <p><small>Manufacture: {seller}</small></p>
                <p><small>Ratting: {ratings} Star</small></p>
            </div>
            <button onClick={()=>handlerAddToCart(props.product)}  className='btn-cart'>
                Add To Cart
                 <FontAwesomeIcon  icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;