import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="offers d-flex justify-content-center align-items-center flex-column my-3">
            <h2>Join in and Get 15% off!</h2>
            <p>subscribe to our newsletter and get 15% off discount code</p>
        </div>
        <div className="form d-flex justify-content-center align-items-center ">
            <form >
                <span><i class='bx bx-envelope'></i></span>
                <input type="search" placeholder='Email address' required/>
                <button className='btn btn-danger  rounded mx-3'>Subscribe</button>
            </form>
        </div>

        <div className="footer-details d-flex my-5">
            <h4 className='mx-5 my-5 fw-bold fs-2 '>Desire</h4>
            <div className="footer-tags d-flex my-5">
                <div className="tags">
                    <h5>PRIVACY</h5>
                    <p>Terms of use</p>
                    <p>Privacy policy </p>
                    <p>Cookies</p>
                </div>
                <div className="tags">
                    <h5>PRIVACY</h5>
                    <p>Terms of use</p>
                    <p>Privacy policy </p>
                    <p>Cookies</p>
                </div>
                <div className="tags">
                    <h5>PRIVACY</h5>
                    <p>Terms of use</p>
                    <p>Privacy policy </p>
                    <p>Cookies</p>
                </div>
                <div className="tags">
                    <h5>PRIVACY</h5>
                    <p>Terms of use</p>
                    <p>Privacy policy </p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer