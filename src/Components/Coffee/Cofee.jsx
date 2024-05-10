import React, { useState } from 'react'
import './coffee.css'
import data from '../../assets/data.js'
import one from  '../../assets/1.jpg'
import two from  '../../assets/2.jpg'
import three from  '../../assets/3.jpg'
import four from  '../../assets/4.jpg'
import five from  '../../assets/5.jpg'
import six from  '../../assets/6.jpg'
import seven from  '../../assets/7.jpg'
import eight from  '../../assets/8.jpg'

import d1 from  '../../assets/d1.jpg'
import d2 from  '../../assets/d2.jpg'
import d3 from  '../../assets/d3.jpg'
import d4 from  '../../assets/d4.jpg'

const Cofee = () => {

  const [btnState, setBtnState] = useState(true); 


  function myFunction() {
    setBtnState(btnState => !btnState);
  }

  let stateCheck = btnState ? 'bx bx-heart' : "bx bxs-heart";

  return (
    <div className='cofee' id='cofee'>
      <div className="icons">
        <i className='bx bxs-coffee'></i>
        <i className='bx bx-coffee-togo'></i>
      </div>
     
      <div className="container">
      <h3 className='d-flex justify-content-center my-5'>Our special coffee</h3>
       <div className="row my-2 ">
      

      

        <div className="col-md-3">
          <div className="card overflow-hidden ">
            <span  className='heart'><i onClick={myFunction} class={stateCheck} ></i></span>
            <img width={280} height={300} src={one} alt="" />
            <div className="card-body">
              <h5 className='fw-bold'>Cold Coffee</h5>
              <p>Coffee is the precious thing in this world</p>
              <div className="price d-flex ">
                <h6 className=' my-2 fw-bold '>Rs.190</h6>
                <a className='mx-2 btn  btn-danger '>Order Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card overflow-hidden ">
            <span  className='heart'><i onClick={myFunction} class={stateCheck} ></i></span>
            <img width={280} height={300} src={two} alt="" />
            <div className="card-body">
              <h5 className='fw-bold'>Cold Coffee</h5>
              <p>Coffee is the precious thing in this world</p>
              <div className="price d-flex ">
                <h6 className=' my-2 fw-bold '>Rs.190</h6>
                <a className='mx-2 btn  btn-danger '>Order Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card overflow-hidden ">
          <span  className='heart'><i onClick={myFunction} class={stateCheck} ></i></span>
            <img width={280} height={300} src={three} alt="" />
            <div className="card-body">
              <h5 className='fw-bold'>Cold Coffee</h5>
              <p>Coffee is the precious thing in this world</p>
              <div className="price d-flex ">
                <h6 className=' my-2 fw-bold '>Rs.190</h6>
                <a className='mx-2 btn  btn-danger '>Order Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card overflow-hidden ">
          <span  className='heart'><i onClick={myFunction} class={stateCheck} ></i></span>
            <img width={280} height={300} src={four} alt="" />
            <div className="card-body">
              <h5 className='fw-bold'>Cold Coffee</h5>
              <p>Coffee is the precious thing in this world</p>
              <div className="price d-flex ">
                <h6 className=' my-2 fw-bold '>Rs.190</h6>
                <a className='mx-2 btn  btn-danger '>Order Now</a>
              </div>
            </div>
          </div>
        </div>
        
       </div>

      </div>

       <h3 className='d-flex justify-content-center my-5'>Our special Dessert</h3>
       <div className="row my-2 ">

      {/* Heart */}

      <span className='heart'><i class='bx bx-heart'></i></span>

        <div className="col-md-3">
          <div className="card overflow-hidden ">
          <span  className='heart'><i onClick={myFunction} class={stateCheck} ></i></span>
            <img width={280} height={300} src={d1} alt="" />
            <div className="card-body">
              <h5 className='fw-bold'>Biscuits</h5>
              <p>Dessert is the precious thing in this world</p>
              <div className="price d-flex ">
                <h6 className=' my-2 fw-bold '>Rs.190</h6>
                <a className='mx-2 btn  btn-danger '>Order Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card overflow-hidden ">
          <span  className='heart'><i onClick={myFunction} class={stateCheck} ></i></span>
            <img width={280} height={300} src={d2} alt="" />
            <div className="card-body">
              <h5 className='fw-bold'>Creamy Nuts</h5>
              <p>Dessert is the precious thing in this world</p>
              <div className="price d-flex ">
                <h6 className=' my-2 fw-bold '>Rs.190</h6>
                <a className='mx-2 btn  btn-danger '>Order Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card overflow-hidden ">
          <span  className='heart'><i onClick={myFunction} class={stateCheck} ></i></span>
            <img width={280} height={300} src={d3} alt="" />
            <div className="card-body">
              <h5 className='fw-bold'>Strawberry Cake</h5>
              <p>Dessert is the precious thing in this world</p>
              <div className="price d-flex ">
                <h6 className=' my-2 fw-bold '>Rs.190</h6>
                <a className='mx-2 btn  btn-danger '>Order Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card overflow-hidden ">
            <span  className='heart'><i onClick={myFunction} class={stateCheck} ></i></span>
            <img width={280} height={300} src={d4} alt="" />
            <div className="card-body">
              <h5 className='fw-bold'>Jamum</h5>
              <p>Dessert is the precious thing in this world</p>
              <div className="price d-flex ">
                <h6 className=' my-2 fw-bold '>Rs.190</h6>
                <a className='mx-2 btn  btn-danger '>Order Now</a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Cofee