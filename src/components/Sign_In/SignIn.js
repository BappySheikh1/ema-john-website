import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignIn.css'

const SignIn = () => {
  const [error,setError]=useState(null)
  const {createUser}=useContext(AuthContext)

  const handleSubmit=(event)=>{
    event.preventDefault();
    const form =event.target;
    const email=form.email.value
    const password=form.password.value
    const confirm=form.confirm.value
    // password validition
    
    if(password.length < 6){
      setError('password Should be 6 characters or more')
    }
    if(password !== confirm){
      setError('Your password did not match')
      return;
    }
    setError('')
    console.log(email,password,confirm);
    // create user
    createUser(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(error);
    });
    
  }


    return (
        <div> 
             <div className='from-container'>
            <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
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
        <p className='text-error'>{error}</p>
        </div>
        
        </div>
        </div>
    );
};

export default SignIn;