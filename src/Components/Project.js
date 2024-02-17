import React from 'react'
import { NavLink } from 'react-router-dom';

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
            <div className=" py-20 ">
                <div className="px-5 lg:px-10">
                    <p className="text-2xl text-center  leading-8 border-b  border-gray-700 pb-6 text-gray-600">
                        MY LATEST FEATURED PROJECTS
                    </p>
                    <div className="flex justify-center mt-12  ">
                        <div className='grid grid-cols-1 md:grid-cols-2 ' >
                            {
                                websites.map((obj) => (
                                    <article className="transition-transform  m-4 p-3 hover:scale-105 max-w-[400px] bg-gray-100 rounded-lg  ">

                                        <div className="rounded-xl mb-3 ">
                                            <NavLink to={obj.link} target='_blank'  >
                                                <img className="rounded-lg " src={obj.image} alt="img" />
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




                </div>
            </div>

        </>
    )
}

export default project