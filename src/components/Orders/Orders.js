import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderReview from "../OrderReview/OrderReview";
import Cart from '../Cart/Cart';
import './Orders.css';

const Orders = () => {
    const {products, initialCart}=useLoaderData()
//    console.log(initialCart)
const [cart, setCart]=useState(initialCart)
    return (
        <div className='Shop-container'>
            <div className='orders-container'>
              {
                cart.map(product => <OrderReview 
                key={product.id}
                product={product}
                ></OrderReview>)
              }
            </div>
            <div className='cart-container'>
              <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;