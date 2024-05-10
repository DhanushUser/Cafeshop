import { useState } from 'react'
import './index.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Cofee from './Components/Coffee/Cofee'
import Reviews from './Components/Reviews/Reviews'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'

function App() {
  

  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={  <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
      </Routes>
     
      <Cofee />
      <Reviews />
      <Footer />

      
    </div>
  )
}

export default App
