import Link from 'next/link';
import {motion} from 'framer-motion'
import Image from 'next/image';

// 15 17 18 19

const ProjectsSection = () => {

  return (
    <div className="px-8 flex flex-col items-start justify-start max-w-2xl mx-auto mt-5 mb-10">
        <h3 className="mb-8 text-2xl font-bold tracking-tight text-dark-200 md:text-4xl dark:text-light-white">
                  Favourite Projects
          </h3>
    {/*<div>
      <a className="w-full" href="https://github.com/ParmeetChanne/foodsecure">
        <div className="flex flex-col items-center justify-center w-full max-w-2xl p-5 mx-auto mb-6 rounded-lg bg-light-white dark:bg-transparent border-4 border-white hover:border-x-dark-200">
        <Image className="mb-4" src="/foodsecure_r.png" alt="foodsecure" width={400} height={200} />
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg text-center font-medium text-gray-900 md:text-xl dark:text-gray-100 dark:hover:text-dark-200 hover:text-dark-200 ">
              FoodSecure - Food Sharing Platform
            </h4>
          </div>
          <p className="w-full md:text-center text-left text-gray-600 dark:text-gray-400">This full-stack project utilizes modern technologies like NextJS, Stripe, TypeScript and Vercel to facilitate the sharing of surplus food.</p>
        </div>
      </a>
  </div>*/}

    <div>
      <a className="w-full flex flex-col-reverse md:flex-row-reverse items-center justify-center" href="https://github.com/ParmeetChanne/foodsecure">
        <div className="flex flex-col items-start justify-start w-full max-w-2xl mb-4 p-5 md:pr-0 mx-auto rounded-lg bg-light-white dark:bg-transparent">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg text-left font-medium text-gray-900 md:text-xl dark:text-gray-100 dark:hover:text-dark-200 hover:text-dark-200 ">
            FoodSecure - Food Sharing Platform
            </h4>
          </div>
          <p className="w-full text-left text-gray-600 dark:text-gray-400">This full-stack project utilizes modern technologies like NextJS, Stripe, TypeScript and Vercel to facilitate the sharing of surplus food.</p>
        </div>
        <Image className="mb-4" src="/foodsecure_r.png" alt="foodsecure" width={300} height={300} />
      </a>
    </div>

    <div>
      <a className="w-full flex flex-col-reverse md:flex-row-reverse items-center justify-center" href="https://github.com/ParmeetChanne/Analysing-Economic-Factors-Python">
        <div className="flex flex-col items-start justify-start w-full max-w-2xl p-5 md:pr-0 mx-auto rounded-lg bg-light-white dark:bg-transparent">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg text-left font-medium text-gray-900 md:text-xl dark:text-gray-100 dark:hover:text-dark-200 hover:text-dark-200 ">
              Economic Analysis With Python
            </h4>
          </div>
          <p className="w-full text-left text-gray-600 dark:text-gray-400">A Jupyter notebook created for the analysis of economic factors with python and pandas using the FRED dataset.</p>
        </div>
        <Image className="mb-4" src="/economic_factors.png" alt="economic_factors" width={300} height={300} />
      </a>
    </div>

    <div>
      <a className="w-full flex flex-col-reverse md:flex-row-reverse items-center justify-center" href="https://github.com/ParmeetChanne/credit-fraud-detection/">
        <div className="flex flex-col items-start justify-start w-full max-w-2xl p-5 md:pr-0 mx-auto rounded-lg bg-light-white dark:bg-transparent">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg text-left font-medium text-gray-900 md:text-xl dark:text-gray-100 dark:hover:text-dark-200 hover:text-dark-200 ">
              Credit Card Fraud Detection
            </h4>
          </div>
          <p className="w-full text-left text-gray-600 dark:text-gray-400">A Jupyter Notebook to demonstrate the building of a machine learning model to detect credit card fraud using logistic regression and evaluation metrics in Python and Scikit-Learn.</p>
        </div>
        <Image className="mb-4" src="/credit-fraud-2.png" alt="credit-fraud" width={300} height={300} />
      </a>
    </div>

    <div>
      <a className="w-full flex flex-col-reverse md:flex-row-reverse items-center justify-center" href="https://github.com/ParmeetChanne/Stock-Prediction-Streamlit">
        <div className="flex flex-col items-start justify-start w-full max-w-2xl p-5 md:pr-0 mx-auto rounded-lg bg-light-white dark:bg-transparent">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg text-left font-medium text-gray-900 md:text-xl dark:text-gray-100 dark:hover:text-dark-200 hover:text-dark-200 ">
              Stock Price Prediction Webapp
            </h4>
          </div>
          <p className="w-full text-left text-gray-600 dark:text-gray-400">This project is a stock prediction webapp created with Python using Metas Prophet for modeling and Streamlit for Frontend.</p>
        </div>
        <Image className="mb-4" src="/streamlit.png" alt="foodsecure" width={300} height={300} />
      </a>
    </div>

    </div>
  );
};


export default ProjectsSection;