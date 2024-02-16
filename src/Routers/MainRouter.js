import React from 'react'
import { Route,Routes } from 'react-router';
import Home from '../Pages/Home';
import About from '../Pages/About';


function User() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
  </Routes>
  </>
  )
}

export default User
