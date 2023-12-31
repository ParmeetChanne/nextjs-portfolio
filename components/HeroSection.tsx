import React from 'react'

const HeroSection = () => {
    return (
        <>
          <div className="px-8 flex flex-col items-start justify-center max-w-2xl mx-auto mt-5 mb-8 md:mb-12">
            <h1
            className="mb-3 md:mb-5 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-light-white">
              Hey, I’m <span className="text-transparent bg-gradient-to-br bg-clip-text md:bg-gradient-to-r from-gradient-purple to-gradient-pink">Parmeet Channe</span>
            </h1>
            <h2
            className="mb-5 text-lg prose text-gray-600 dark:text-gray-400">
              A passionate student at York University utilizing technology to craft enduring, sustainable solutions that create a significant impact.
            </h2>
            <div>
            <button className='px-6 py-3 mr-3 text-white rounded-full bg-gradient-to-r border-2 border-black hover:border-white from-gradient-purple to-gradient-pink bg-theme-green focus:outline-none'>Connect</button>
            <button className='px-6 py-3 rounded-full bg-transparent hover:bg-white hover:text-black text-white border-2 border-white'>Resume</button>
            </div>
          </div>
        </>
      );
}

export default HeroSection