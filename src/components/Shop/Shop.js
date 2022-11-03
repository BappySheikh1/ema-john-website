import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart,  } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


// Count
// perPage data
// page

const Shop = () => {
    // const {products,count} =useLoaderData()
    const [products,setProducts]=useState([]);
    const [count,setCount]=useState(0);
    const [cart,setCart]=useState([]);
    const [page,setPage]=useState(0);
    const [size,setSize]=useState(20);

    useEffect(()=>{
     fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
     .then(res => res.json())
     .then(data => {
        setCount(data.count)
        setProducts(data.products)
    })
    },[page , size])

    const pages=Math.ceil(count / size)

    const clearCart=()=>{
        setCart([])
        deleteShoppingCart()
    }

    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(res=>res.json())
    //     .then(data => setProducts(data))
    // },[]);

    useEffect(()=>{
        const storedCart=getStoredCart()
        const savedCart= [];
        for(const id in storedCart){
            const addedProduct=products.find(product => product._id === id)
            if(addedProduct){
                const quantity =storedCart[id]
                addedProduct.quantity=quantity
                savedCart.push(addedProduct)
            }  
        } 
        setCart(savedCart)
    },[products])

    const handlerAddToCart=(seletedProduct)=>{
        // console.log(product)
        let newCart =[];
       const exists=cart.find(product => product._id === seletedProduct._id)
       if(!exists){
        seletedProduct.quantity = 1;
        newCart =[...cart,seletedProduct]
       }
       else{
        const rest =cart.filter(product => product._id !== seletedProduct._id)
        exists.quantity =exists.quantity + 1 ;
        newCart =[...rest,exists]
       }
       
        setCart(newCart)
        addToDb(seletedProduct._id)
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
            <div className='cart-container'>
                <Cart clearCart={clearCart}   cart={cart}>
                <Link to='/orders'>
                    <button className='btn-clear'>Review Orders</button> 
                 </Link>
                </Cart>
            
            </div>
            <div className="pagination">
                <p>Currently selected page: {page}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                    className={page === number && "selected"}
                    key={number}
                    onClick={()=> setPage(number)}
                    >
                        {number}
                    </button>)
                }
                <select name="" id="" onChange={(event)=>setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20" selected>20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                </select>
            </div>
            
        </div>
    );
};

export default Shop;