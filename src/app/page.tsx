'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../app/components/Button';
import { motion } from 'framer-motion';
import { HEADINGS } from '../app/constants/headings';
import { Counter } from './counter/Counter';


export default function Home() {
  const router = useRouter();

  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="text-center p-8 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-md w-full text-gray-800">
          <div className="overflow-hidden relative w-full">
            <motion.h1
              className="text-4xl font-extrabold text-gray-900 mb-4 whitespace-nowrap"
              animate={{ x: ['100%', '-100%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 10,
                  ease: 'linear',
                },
              }}
            >
              {HEADINGS.name}
            </motion.h1>
          </div>
          <p className="text-xl mb-6"><u>{HEADINGS.about}</u></p>
          {/* <Button onClick={() => router.push('/pages/cv')}>View My CV</Button> */}
          <Counter/>
        </div>
      </div>
  );
}