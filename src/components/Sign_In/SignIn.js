import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'

const SignIn = () => {
    return (
        <div> 
             <div className='from-container'>
            <h2 className='form-title'>Sign Up</h2>
        <form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder='Your Email' required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder='Your password' required />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" placeholder='confirm your password' required />
          </div>

          <div className="form-control" >
           <input className='btn-submit' type="submit" value='Login' />
          </div>
        </form>
        <div className="form-control">
        <p className=''>Already Have an Account <Link to='/login'>Log In</Link></p>
        </div>
        </div>
        </div>
    );
};

export default SignIn;