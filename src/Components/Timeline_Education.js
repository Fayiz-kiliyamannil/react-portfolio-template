import React from 'react'

function Timeline_Education() {
    return (
        <>
            <div className="bg-gradient-to-b from-gray-200 from-blue-400 to-red-200 w-full h-full">
                <h1 className='text-center text-2xl pt-6 font-bold  text-gray-300 '> My Education </h1>
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2 border-opacity-20 border-gray-700 h-full absolute border" style={{ left: '50%' }}></div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 rounded-full">
                        </div>
                        <div className="order-1  w-5/12 px-6 py-4">
                            <time className="font-bold text-red-400 text-sm" > 2024 - present  </time>
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">SOFTWARE DEVELOPER</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Brototype-Brocamp</p>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">MERN Stack Developer-Training program</p>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 rounded-full">
                        </div>
                        <div className="order-1  w-5/12 px-6 py-4">
                            <time className="font-bold text-red-400 text-sm" >2019 - 2022</time>
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">DIPLOMA</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Electrical and Electronics Engineering</p>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Government Polytechnic College,Palakkad</p>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 rounded-full">

                        </div>
                        <div className="order-1 w-5/12 px-6 py-4">
                            <time className="font-bold text-red-400 text-sm" >2017 - 2019</time>
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">HSE</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Kerala syllabus</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Timeline_Education