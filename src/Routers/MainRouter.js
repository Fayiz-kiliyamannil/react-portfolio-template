import React from 'react'
import { Route,Routes } from 'react-router';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Notfound from '../Components/Not_found';


function User() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>} />
    {/* <Route path='/about' element={<About/>} /> */}
    <Route path='*' element={<Notfound/>}/>
  </Routes> 
  </>
  )
}

export default User
