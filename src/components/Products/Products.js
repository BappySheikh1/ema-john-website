import React from 'react';
import './Products.css'
import logo from '../../images/Logo.svg'
const Products = () => {
    return (
        <div className='products'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Products;