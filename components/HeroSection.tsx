import React from 'react'

const HeroSection = () => {
    return (
        <>
          <div className="px-8 flex flex-col items-start justify-center max-w-2xl mx-auto mt-5 mb-8 md:mb-12">
            <h1
            className="mb-3 md:mb-5 text-4xl font-bold tracking-tight md:text-5xl text-light-white">
              Hey, I’m <span className="text-transparent bg-gradient-to-br bg-clip-text md:bg-gradient-to-r from-gradient-purple to-gradient-pink">Parmeet Channe</span>
            </h1>
            <h2
            className="mb-5 text-lg prose text-gray-400">
              Enthusiastic student at York University, driven by a passion for merging technology and finance to craft enduring, impactful solutions. 
            </h2>
            <div>
            <a href="#contact"><button className='px-6 py-3 mr-3  rounded-full bg-gradient-to-r border-2 border-black hover:border-white from-gradient-purple to-gradient-pink bg-theme-green focus:outline-none'>Connect</button></a>
            <button className='px-6 py-3 rounded-full bg-transparent hover:bg-white hover:text-black text-white border-2 border-white'>Resume</button>
            </div>
          </div>
        </>
      );
}

export default HeroSection