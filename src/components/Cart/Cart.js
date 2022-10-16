import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const {cart,clearCart}=props;
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity ;
        shipping=shipping + product.shipping
    }
    const tax =total * 0.1;
    const grandTotal=total + parseFloat(tax) +shipping;
   
    return (
        <div className='cart-container'>
            <h3>Order summary</h3>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h5>Grand Total: ${grandTotal}</h5>
                <button onClick={clearCart} className='btn-clear'>
                    Clear Cart
                </button>
        </div>
    );
};

export default Cart;