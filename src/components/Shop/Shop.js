import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([])
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[]);
    const handlerAddToCart=(product)=>{
        console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
        
    }
    

    return (
        <div className='Shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                    product={product}
                    key={product.id}
                handlerAddToCart={handlerAddToCart}
                    ></Product>)
                }
            </div>
            <div>
                <h3>Order summary</h3>
                <p>Seleted item {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;