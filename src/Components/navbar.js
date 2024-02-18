import React from 'react'
// import Link from "react-dom"
import { NavLink } from 'react-router-dom';


function navbar() {

    const navigation = [
        // { name: 'home', to: '/' },
        // { name: 'about', to: 'about' },
        // { name: 'contact', to: "contact" },
        // { name: 'projects', to: 'project' }
    ]


    return (
        <>
            <div className='flex h-[50px] sticky top-0 w-[100%] list-none justify-between max-lg:justify-center items-center max-sm:hidden bg-gray-200 z-10 ' >
                <div className='flex ml-16 max-lg:hidden '  >
                    <div className='w-12 mr-1' >
                        <img src='logo.png' alt='logo' />
                    </div>

                    <h1 className='font-bold text-2xl  mt-2' >Fayiz Kiliyamannil</h1>
                </div>
                <div className='flex items-center space-x-12 font-bold lg:mr-24' >
                    {
                        navigation.map((item) => (
                            <NavLink
                                to={item.to}
                                key={item.name}
                                className={({ isActive }) =>
                                    isActive ? " bg-gradient-to-br from-blue-500  to-red-500 bg-clip-text text-transparent  border-b px-1 uppercase "
                                        : 'hover:font-bold  hover:bg-gradient-to-br from-blue-500 to-red-500 hover:bg-clip-text hover:text-transparent  border-b px-1 uppercase'
                                }
                            >
                                {item.name}
                            </NavLink>

                        ))
                    }
                </div>
            </div>

            <div className='bg-gray-200 sm:hidden  w-[100%] h-[80px] bottom-0 fixed flex items-center z-10 ' >
                <div className='flex list-none  justify-center  w-[100%]  px-[12vw]  ' >

                    {/* project----------------------------link */}
                    {/* <NavLink to='project'>
                        <svg className="w-6 h-6 text-gray-900  mt-3.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.4 7.7c2 .5 2.4 2.8 3.2 3.8 1 1.4 2 1.3 3.2 2.7 1.8 2.3 1.3 5.7 1.3 6.7M20 15h-1a4 4 0 0 0-4 4v1M8.6 4c0 .8.1 1.9 1.5 2.6 1.4.7 3 .3 3 2.3 0 .3 0 2 1.9 2 2 0 2-1.7 2-2 0-.6.5-.9 1.2-.9H20m1 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className='text-sm pt-1' >Projects</p>
                      
                    </NavLink> */}
                    <NavLink to='/' >
                        <img className='w-10 border border-gray-400 rounded-full ' src='logo.png' alt='logo' />
                        {/* <p className='pt-1 pl-1 text-sm'> Home </p> */}
                    </NavLink>
                    {/* contact-----------------------------Link */}
                    {/* <NavLink to='/contact'>
                        <svg className="w-6 h-6 text-gray-900 mt-3.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M5 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clip-rule="evenodd" />
                        </svg>
                        <p className='pt-1 text-sm' >Contact</p>

                    </NavLink> */}
                </div>

            </div>

        </>






    )
}

export default navbar
