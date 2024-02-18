import React from 'react'

function Progress() {
    return (
        <>
            <div className='bg-gray-200 pb-[50px] max-lg:pt-[350px]  px-6 grid grid-cols-1 lg:grid-cols-2 pt-[200px]' >

                <div className='px-5 space-y-3 ' >
                    <h1 className='font-bold uppercase text-3xl' > About myself </h1>
                    <p>
                        Highly skilled MERN stack developer with expertise in dynamic front-end interfaces and robust back-
                        end solutions. Proficient in MongoDB, Express.js ,React.js and Node.js. Adept at crafting seamless user
                        experiences and staying current with industry trends for innovative web development.
                    </p>
                </div>

                <div className='space-y-3 px-5 max-lg:mt-5' >
                <h1 className='font-bold uppercase text-3xl' > Skills </h1>
                    <div class="mb-1 text-base font-bold uppercase ">React JS 85%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-300  w-[85%]" ></div>
                    </div>

                    <div class="mb-1 text-base font-bold uppercase ">Node JS 90%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-300  w-[90%]" ></div>
                    </div>

                    <div class="mb-1 text-base font-bold uppercase ">Mongo DB 90%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-300  w-[90%]" ></div>
                    </div>

                    <div class="mb-1 text-base font-bold uppercase ">tailwind css 80%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-300  w-[75%]" ></div>
                    </div>

                    <div class="mb-1 text-base font-bold uppercase ">javascript 95%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-300  w-[95%]" ></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress