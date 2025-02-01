'use client';

import { motion } from 'framer-motion';
import { HEADINGS } from './utils/constants/Headings';
import { Counter } from './components/counter/Counter';
import { headingAnimation, headingTransition } from "./theme/Animation";


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="text-center p-8 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-md w-full text-gray-800">
        <div className="overflow-hidden relative w-full">
          <motion.h1
            className="text-4xl font-extrabold text-gray-900 mb-4 whitespace-nowrap"
            animate={headingAnimation}
            transition={headingTransition}
          >
            {HEADINGS.name}

          </motion.h1>
        </div>
        <p className="text-xl mb-6"><u>{HEADINGS.about}</u></p>
        <Counter />
      </div>
    </div>
  );
}