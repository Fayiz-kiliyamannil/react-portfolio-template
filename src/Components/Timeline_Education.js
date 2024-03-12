import React from 'react'

function Timeline_Education() {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-300 to-red-200 px-6  pb-[50px] w-full h-full z-0 ">
                <h1 className=' text-center border-b border-gray-600 text-2xl uppercase px-10 text-2xl  pb-6  font-medium text-gray-700 '> My Education </h1>
                <ol className="relative border-s border-gray-200  mt-10 dark:border-gray-700">
                <li className="ms-4 mb-16 ">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-purple-700">2023 - present</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-950">SOFTWARE DEVELOPER</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-700"> Dubai </p>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-700">full Stack Developer - Training program</p>
                    </li>
                   
                    <li className="mb-16 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-purple-700">2019 - 2022</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-950"> Lorem Ipsum is simply dummy text</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-700">location,Dubai</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-purple-700">2017 - 2019</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-950">Lorem Ipsum is simply dummy text</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-700">Lorem Ipsum,dubai</p>
                    </li>
                </ol>

            </div>

        </>
    )
}

export default Timeline_Education