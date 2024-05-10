import React from 'react'
import './login.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();


  const handleHome = ()=>{
    navigate('/');
  }

  return (
    <form className="login d-flex  justify-content-center  align-items-center flex-column " id='login'>
      <div className="login-details">
      <h3 className=' text-center my-3 fs-2'>Log In</h3>
      <div className='login-search d-flex  flex-column '>
      <input type="text" placeholder=' Your Email' className='my-4' required/>
      <input type="password" placeholder='Password' required/>
      </div>

      <div className="check d-flex  my-2 justify-content-between ">
        <input type="checkbox" /> <p>Remember me!</p>
        <a href="">Forget password?</a>
      </div>
      <div className="navigate-home">
      <AnchorLink >  <a onClick={handleHome} className=' pointer-event float-end mx-1 '>Home</a> </AnchorLink>
      </div>
      <button className='btn btn-primary rounded  w-100  '>Log In</button>
      </div>
    </form>
  )
}

export default Login