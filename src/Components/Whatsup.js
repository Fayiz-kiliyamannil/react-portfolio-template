import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Whatsup() {

  const [isVisible,setIsVisible] = useState(2);



  useEffect(()=>{

    window.addEventListener('scroll',()=>{
      if(window.scrollY > 300){
        setIsVisible(false)
      }else{
        setIsVisible(true)
      }
      
    },[])

  })

  return (
   <>
   
   <div id='whatsup' className={`fixed  w-16 max-sm:bottom-20 transition-transform hover:scale-105 bottom-10 right-2  ${isVisible ? "" : 'opacity-10 invisible'}  `} >
    <Link to='https://wa.me/9645039900' target='_blank' >
    <img className='hover:w-18' src='whatsup.png' alt='whatsup' />
    </Link>
   </div>
   </>
  )
}

export default Whatsup