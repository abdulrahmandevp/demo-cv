'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { HEADINGS } from '../constants/Headings';


export function Navbar() {
    const router = useRouter();

    return (
        <header className="w-full py-4 fixed top-0 left-0 z-50 bg-white/20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    className="text-white font-extrabold text-3xl"
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 25 }}
                >
                    {HEADINGS.name}

                </motion.div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <button
                                className="text-white hover:text-gray-300"
                                onClick={() => router.push('/')}
                            >
                                <u>Home</u>
                            </button>
                        </li>
                        <li>
                            <button
                                className="text-white hover:text-gray-300"
                                onClick={() => router.push('/pages/cv')}
                            >
                                <u>CV</u>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}