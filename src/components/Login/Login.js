import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='from-container'>
            <h2 className='form-title'>Log In</h2>
        <form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder='Your Email' required />
          </div>
          <div className="form-control">
            <label htmlFor="password">password</label>
            <input type="password" name="password" placeholder='Your password' required />
          </div>
          <div className="form-control" >
           <input className='btn-submit' type="submit" value='Login' />
          </div>
        </form>
        <div className="form-control">
        <p className=''>New to ema john <Link to='/signup'>Create a New Account</Link></p>
        </div>
        </div>
    );
};

export default Login;