'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { HEADINGS } from '../../utils/constants/Headings';
import { slideInAnimation, slideInTransition } from "../../theme/Animation";
import Link from 'next/link';

export function Navbar() {
    const router = useRouter();

    return (
        <header className="w-full py-4 fixed top-0 left-0 z-50 bg-white/20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    className="text-white font-extrabold text-2xl"
                    initial={slideInAnimation.initial}
                    animate={slideInAnimation.animate}
                    transition={slideInTransition}
                >
                    {HEADINGS.name}

                </motion.div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="text-white hover:text-gray-300">
                                <u>Home</u>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/cv" className="text-white hover:text-gray-300">
                                <u>CV</u>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}