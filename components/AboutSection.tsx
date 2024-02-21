const AboutSection = () => {
    return (
        <>
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mt-5 mb-4 md:mb-12 px-8">
          <h3 className="mb-4 text-2xl font-bold tracking-tight  md:text-4xl text-light-white">
                  About Me
          </h3>
            <h2
            className="mb-5 text-lg prose text-gray-400">
              I have a particular love for finance, capital markets, and corporate finance. I get satisfaction from making sense of seemingly meaningless data to strategically evolve businesses.
            </h2>
            
            <h2
            className="mb-5 text-lg prose text-gray-400">              
              Alongside, I love to learn new things and share that knowledge through teaching. Leadership and volunteering are integral to my ethos, reflecting my commitment to making a positive impact.
            </h2>
          </div>
        </>
      );
}

export default AboutSection