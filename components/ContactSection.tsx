import Image from 'next/image'
import React from 'react'

const ContactSection = () => {
  return (
    <div className="px-8 flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h3 className=" text-2xl font-bold tracking-tight text-dark-200 md:text-4xl dark:text-light-white">
            Get In Touch
        </h3>
        <a href="https://www.linkedin.com/in/parmeet-singh-channe/">
        <div className="flex flex-row items-center justify-between w-full max-w-2xl p-5 pb-0 mx-auto rounded-lg bg-light-white dark:bg-transparent">
            <Image className='' src="/linkedin.svg" alt="linkedin" width={30} height={30} />
            <h4 className="w-full ml-4 text-sm font-medium text-gray-900 md:text-xl dark:text-gray-100 dark:hover:text-dark-200 hover:text-dark-200 ">
              LinkedIn: Parmeet Singh
            </h4>
        </div>
        </a>

        <a href="https://github.com/ParmeetChanne">
        <div className="flex flex-row items-center justify-between w-full max-w-2xl p-5 pb-0 mx-auto mb-6 rounded-lg bg-light-white dark:bg-transparent">
            <Image className='' src="/github_icon_white.png" alt="github" width={30} height={30} />
            <h4 className="w-full ml-4 text-sm font-medium text-gray-900 md:text-xl dark:text-gray-100 dark:hover:text-dark-200 hover:text-dark-200 ">
              Github: Parmeet Channe
            </h4>
        </div>
        </a>

        <a href="mailto:parmeetchanne@gmail.com?subject=Reaching out from your portfolio!">
        <div className="flex flex-row items-center justify-between w-full max-w-2xl p-5 pt-0 mx-auto rounded-lg bg-light-white dark:bg-transparent">
            <Image className='' src="/gmail_icon.svg" alt="gmail" width={30} height={30} />
            <h4 className="w-full ml-4 text-sm font-medium text-gray-900 md:text-xl dark:text-gray-100 dark:hover:text-dark-200 hover:text-dark-200 ">
              Mail: parmeetchanne@gmail.com
            </h4>
        </div>
        </a>
        {/*<button className="flex items-center justify-center w-64 px-4 py-2 mt-6 mb-8 text-white rounded bg-gradient-to-r from-gradient-purple to-gradient-pink bg-theme-green focus:outline-none focus:shadow-outline">
            Send
        </button>*/}
  </div>
  )
}

export default ContactSection