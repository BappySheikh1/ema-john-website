import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
const Header = () => {

    const {user,LogOut}=useContext(AuthContext)
//    console.log(user);
    return (
        <div className='products'>

           <Link to="/"> <img src={logo} alt="" /></Link>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ?
                <button className='btn-logOut' onClick={()=>LogOut()}>Log Out</button>
                :
                <>
                 <Link to="/login">Log In</Link>
                 <Link to="/signup">Sign Up</Link>
                </>
                }
                
            </div>
        </div>
    );
};

export default Header;