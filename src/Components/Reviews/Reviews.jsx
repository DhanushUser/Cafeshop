import React from 'react'
import './reviews.css'
import bg from '../../assets/bg3.jpg'
import r1 from '../../assets/r1.jpg'
import r2 from '../../assets/r2.jpg'
import r3 from '../../assets/r3.jpg'
import Slider from 'react-slick';


const Reviews = () => {

  


  return (
    <div className='review' id='review'>
        <div className="bg d-flex flex-column   my-4 ">
          <h2 className='my-4'>Check out our best <br /> coffee Betans</h2>
          <button className='btn btn-danger my-4'>Explore Our items</button>
        </div>
        <div className="bg-slider d-flex justify-content-center align-items-center flex-column my-5 ">
          
          <h3 className='my-4'>Our Happy Customer</h3>

          <div className="slider d-flex my-5">
          
              <div className="review1">
                <div className="rename d-flex">
                <img width={50} src={r1} alt="" />
                <div className="para flex-column my-3 mx-0 ">
                <h5 className=' mx-0 my-0'>Jennifer</h5>
                <p>Youtuber</p>
                </div>
                <div className="star float-end  my-4 text-warning">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                </div>
                </div>
                
                <div className="rdetails">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis quia error debitis, rem sed tempora amet voluptates unde laudantium? Esse omnis dicta ratione vero cumque. Expedita consequatur dolorem quis.</p>
              </div>
              </div>
              <div className="review1">
                <div className="rename d-flex">
                <img width={50} src={r2} alt="" />
                <div className="para flex-column my-3">
                <h5 className='my-0'>Mark</h5>
                <p>Ambassodor</p>
                </div>
                <div className="star float-end  my-4 text-warning">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
                </div>
                </div>
                
                <div className="rdetails">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis quia error debitis, rem sed tempora amet voluptates unde laudantium? Esse omnis dicta ratione vero cumque. Expedita consequatur dolorem quis.</p>
              </div>
              </div>
              <div className="review1">
                <div className="rename d-flex">
                <img width={50} src={r3} alt="" />
                <div className="para flex-column my-3">
                <h5 className='my-0'>Heisenberg</h5>
                <p>Manager</p>
                </div>
                <div className="star float-end  my-4 text-warning">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bx-star'></i>
                </div>
                </div>
                
                <div className="rdetails">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis quia error debitis, rem sed tempora amet voluptates unde laudantium? Esse omnis dicta ratione vero cumque. Expedita consequatur dolorem quis.</p>
              </div>
              </div>
          {/* </Slider> */}
            
          </div>
        </div>
    </div>
  )
}

export default Reviews