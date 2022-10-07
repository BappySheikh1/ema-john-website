import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderReview from "../OrderReview/OrderReview";
import Cart from '../Cart/Cart';
import './Orders.css';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const {initialCart}=useLoaderData()
//    console.log(initialCart)
const [cart, setCart]=useState(initialCart)

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
            </div>
            <div className='cart-container'>
              <Cart 
              cart={cart}
              ></Cart>
            </div>

        </div>
    );
};

export default Orders;