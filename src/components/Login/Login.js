import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css'

const Login = () => {
  const {signIn}=useContext(AuthContext)

  const navigate =useNavigate()
  const handleSubmit=(event)=>{
    event.preventDefault();
    const form=event.target
    const email=form.email.value
    const password=form.password.value
    signIn(email,password)
    .then(result =>{
      const user=result.user
      console.log(user);
      form.reset()
      navigate('/')
    })
    .catch(error =>{
      console.log(error);
    })
  }

    return (
        <div className='from-container'>
            <h2 className='form-title'>Log In</h2>
        <form onSubmit={handleSubmit}>
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