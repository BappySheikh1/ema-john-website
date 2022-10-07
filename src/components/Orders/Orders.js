import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
    const {products, initialCart}=useLoaderData()
//    console.log(initialCart)
const [cart, setCart]=useState(initialCart)
    return (
        <div className='Shop-container'>
            <div className='products-container'>
           
            </div>
            <div className='cart-container'>
              <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;