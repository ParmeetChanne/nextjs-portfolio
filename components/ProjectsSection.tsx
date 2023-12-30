import Link from 'next/link';
import {motion} from 'framer-motion'
import Image from 'next/image';

// 15 17 18 19

const ProjectsSection = () => {

  return (
    <div>
    <div>
      <a className="w-full" href="https://github.com/ParmeetChanne/foodsecure">
        <div className="flex flex-col items-center justify-center w-full max-w-2xl p-5 mx-auto mb-6 rounded-lg bg-light-white dark:bg-transparent border border-white">
        <Image className='mb-4' src="/foodsecure_r.png" alt="foodsecure" width={400} height={200} />
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100 dark:hover:text-dark-200 hover:text-dark-200 ">
              FoodSecure - Food Sharing Platform
            </h4>
          </div>
          <p className="w-full text-center text-gray-600 dark:text-gray-400">This full-stack project utilizes modern technologies like NextJS, Stripe, TypeScript and Vercel to facilitate the sharing of surplus food.</p>
        </div>
      </a>
    </div>

    <div>
      <a className="w-full" href="https://github.com/ParmeetChanne/Analysing-Economic-Factors-Python">
        <div className="flex flex-col items-center justify-center w-full max-w-2xl p-5 mx-auto mb-6 rounded-lg bg-light-white dark:bg-transparent border border-white">
        <Image className='mb-4' src="/economic_factors.png" alt="foodsecure" width={300} height={300} />
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100 dark:hover:text-dark-200 hover:text-dark-200 ">
              Analyzing Economic Factors Using Python
            </h4>
          </div>
          <p className="w-full text-center text-gray-600 dark:text-gray-400">A Jupyter notebook created for the analysis of economic factors with python and pandas using the FRED dataset.</p>
        </div>
      </a>
    </div>

    <div>
      <a className="w-full" href="https://github.com/ParmeetChanne/Stock-Prediction-Streamlit">
        <div className="flex flex-col items-center justify-center w-full max-w-2xl p-5 mx-auto mb-6 rounded-lg bg-light-white dark:bg-transparent border border-white">
        <Image className='mb-4' src="/streamlit.png" alt="foodsecure" width={300} height={300} />
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100 dark:hover:text-dark-200 hover:text-dark-200 ">
              Stock Prediction Web Application
            </h4>
          </div>
          <p className="w-full text-center text-gray-600 dark:text-gray-400">This project is a stock prediction webapp created with Python using Meta's Prophet for modeling and Streamlit for Frontend.</p>
        </div>
      </a>
    </div>
    </div>
  );
};


export default ProjectsSection;