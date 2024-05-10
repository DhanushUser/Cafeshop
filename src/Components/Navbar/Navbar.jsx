import React, { useState, useEffect } from 'react'
import './nav.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(true);
    const [sticky, setSticky] = useState(false);
    

    const navigate = useNavigate();

  const menuBar = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }


  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);


  const handleLogin = ()=>{
    navigate('/login');
  }

  return (
    <div className={`navbar ${sticky ? 'dark-nav' : '' }`}>
        <div className="container mt-2 ">
            <div className="logo">
                <h3>Desire cafe</h3>
            </div>
            <ul className={mobileMenu ? '' : 'hide-menu'}>
              <AnchorLink className=' text-decoration-none text-light' offset={50} href='#home'>  <li className='mx-3'>Home</li> </AnchorLink>
              <AnchorLink className=' text-decoration-none text-light' offset={-30} href='#cofee'>   <li className='mx-3'>Coffee</li> </AnchorLink>
              <AnchorLink className=' text-decoration-none text-light' offset={-200} href='#review'>   <li className='mx-3'>Reviews</li></AnchorLink>
              <AnchorLink className=' text-decoration-none text-light' offset={50} href='#login'>   <li onClick={handleLogin} className='mx-3'>Login</li></AnchorLink>
            </ul>
            <div className="search d-flex ">
                <h3><i class='bx bxs-cart '></i></h3>
                <h4 className='mx-4'><i class='bx bx-search'></i></h4>
                <input type="search" className='  '/>
            </div>
            <div className="menu">
                <h2 ><i class='bx bxs-coffee-alt' onClick={menuBar}></i></h2>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar