import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import OrderReview from "../OrderReview/OrderReview";
import Cart from '../Cart/Cart';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const {initialCart}=useLoaderData()
//    console.log(initialCart)
const [cart, setCart]=useState(initialCart)

const clearCart=()=>{
  setCart([])
  deleteShoppingCart()
}

const handleRemoveItem = (id) =>{
  const remainingProduct=cart.filter(product => product.id !== id)
  setCart(remainingProduct)
  removeFromDb(id)
}


    return (
        <div className='Shop-container'>
            <div className='orders-container'>
              {
                cart.map(product => <OrderReview 
                key={product.id}
                product={product}
                handleRemoveItem = {handleRemoveItem}
                ></OrderReview>)
              }
              {
                cart.length === 0 && <h2>You Have No Items For Review. <Link to="/shop">Please Shop More</Link></h2>
              }
            </div>
            <div className='cart-container'>
              <Cart 
              clearCart={clearCart}
              cart={cart}>
               <Link to='/shipping'><button className='btn-clear'>Procced Shipping </button></Link>
              </Cart>
            </div>

        </div>
    );
};

export default Orders;