import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './OrderReview.css'

const OrderReview = ({product}) => {
    // console.log(product);
    const {img,name,price,quantity,shipping}=product
    return (
        <div className='review-item'>
            <div>
               <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
               <div className='review-details'>
                 <p>{name}</p>
                 <p><small>Price: ${price}</small></p>
                 <p><small>Shipping: ${shipping}</small></p>
                 <p><small>Quantity: {quantity}</small></p>    
               </div>
               <div className="delete-button">
                  <button className='btn-delete'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                  </button>
               </div>
            </div>
        </div>
    );
};

export default OrderReview;