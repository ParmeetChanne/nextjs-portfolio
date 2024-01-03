const AboutSection = () => {
    return (
        <>
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mt-5 mb-4 md:mb-12 px-8">
          <h3 className="mb-4 text-2xl font-bold tracking-tight  md:text-4xl text-light-white">
                  About Me
          </h3>
            <h2
            className="mb-5 text-lg prose text-gray-400">
              Passionate about both programming and finance, I thrive on their intersection. Driven by natural leadership skills, I seek to inspire growth and foster innovation in diverse environments, leading to transformative progress.              
            </h2>
            <h2
            className="mb-5 text-lg prose text-gray-400">              
              I am dedicated to crafting seamless user experiences in frontend projects but I am also on a journey to master full-stack development.
            </h2>
          </div>
        </>
      );
}

export default AboutSection