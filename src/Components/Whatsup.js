import React from 'react'
import { Link } from 'react-router-dom'

function Whatsup() {
  return (
   <>
   
   <div className='fixed w-16 max-sm:bottom-24 transition-transform hover:scale-105 bottom-10 right-7 ' >
    <Link to='https://wa.me/9645039900' target='_blank' >
    <img className='hover:w-18' src='whatsup.png' alt='whatsup' />
    </Link>
   </div>
   </>
  )
}

export default Whatsup