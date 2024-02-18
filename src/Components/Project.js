import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function project() {

    const websites = [
        {
            name: 'Healthy-Life - Fitness Training Website', link: 'https://healthy-life-pi.vercel.app/',
            description: 'Led the development of the "Healthy-Life" project, showcasing expertise in creating a feature-richfitness training website',
            image: "fitness.png"
        },
        {
            name: 'ARANOZ (E-Commerce website)', link: '',
            description: "Successfully developed a feature-rich e-commerce platform using Node.js and Handlebars (HBS) templates, resulting in a seamless shopping experience for a diverse user base. Showcased proficiencyin both front-end and back-end development.",
            image: 'ecommerce.png',
        },
    ]


    return (
        <>
            <div className=" py-20 bg-gradient-to-b from-gray-200 to-blue-300 ">
                <div className="px-5 lg:px-10">
                    <p className="text-2xl text-center  leading-8 border-b  border-gray-700 pb-6 font-medium text-gray-700">
                        MY LATEST FEATURED PROJECTS
                    </p>
                    <div className="flex justify-center mt-12  ">
                        <div className='grid grid-cols-1 md:grid-cols-2 ' >
                            {
                                websites.map((obj,index) => (
                                    <article key={index} className="transition-transform  m-4 p-3 transform  hover:translate-y-2 max-w-[400px] bg-gradient-to-bl shadowrounded-2xl  ">

                                        <div className="rounded-xl mb-3 ">
                                            <NavLink to={obj.link} target='_blank'  >
                                                <img className="rounded-lg w-[4000px] h-[300px] mx-auto  " src={obj.image} alt="img" />
                                            </NavLink>
                                        </div>
                                        <div className="group  mt-4 ">
                                            <h3 className=" text-lg font-semibol text-center font-bold leading-6 text-gray-950  group-hover:text-gray-700">{obj.name}
                                                <NavLink to={obj.link} target='_blank'  >
                                                    <span className=" inset-0" />

                                                </NavLink>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm leading-6  text-gray-800">{obj.description}</p>
                                        </div>

                                    </article>
                                ))
                            }
                        </div>
                    </div>

                    <div className='items-center  text-center mt-10 ' >

                        <Link to='project' >
                            <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-xl text-sm px-6 py-1 text-center me-2 mb-2">More...</button>

                        </Link>
                    </div>

                </div>
            </div>

        </>
    )
}

export default project