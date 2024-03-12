import React from 'react'

function Progress() {
    return (
        <>
            <div className='bg-gray-200 pb-[50px] max-lg:pt-[500px]  px-6 grid grid-cols-1 lg:grid-cols-2 pt-[200px]' >

                <div className='px-5 space-y-3 ' >
                    <h1 className='font-bold uppercase text-3xl' > About myself </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                    survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheet.
                    </p>

                    <div className='flex pt-10 pb-10 ' >
                        <div className=' border-2 pt-4  mr-3 rounded-xl  border-teal-700 h-32 w-52 ' >
                           <div className=' flex justify-center  ' >
                           <h1 className=' text-lg font-bold bg-clip-text text-transparent bg-gradient-to-br from-teal-500 to-gray-800  text-center italic ' >Back-end Developer </h1>
                           </div>
                            <div  className=' flex justify-between pt-2  px-2 sm:px-8  ' >
                            <img className='w-15 h-10' src='nodejs.png'  alt='node'/>
                            <img className='w-15 h-10 ' src='mongodb.png' alt='node'/>
                            </div>
                        </div>
                        <div className='  border-2 pt-4  rounded-xl ml-3 border-teal-700 h-32 w-52 ' >
                           <div className=' flex justify-center  ' >
                           <h1 className=' text-lg font-bold  italic bg-clip-text text-transparent bg-gradient-to-br from-gray-700 to-teal-500 text-center  ' >Front-end Developer </h1>
                           </div>

                            <div  className=' flex justify-between sm:px-10  px-5 pt-2   ' >
                            <img className='w-15 h-10' src='react.png'  alt='node'/>
                            <img className='w-15 h-10' src='javascript.png'  alt='node'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='space-y-3 px-5 max-lg:mt-5' >
                    <h1 className='font-bold uppercase text-3xl' > Skills </h1>
                    <div className="mb-1 text-base font-bold uppercase ">React JS 85%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-300  w-[85%]" ></div>
                    </div>

                    <div className="mb-1 text-base font-bold uppercase ">Node JS 90%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-300  w-[90%]" ></div>
                    </div>

                    <div className="mb-1 text-base font-bold uppercase ">Mongo DB 90%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-300  w-[90%]" ></div>
                    </div>

                    <div className="mb-1 text-base font-bold uppercase ">tailwind css 80%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-300  w-[75%]" ></div>
                    </div>

                    <div className="mb-1 text-base font-bold uppercase ">javascript 95%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-300  w-[95%]" ></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress