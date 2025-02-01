"use client"; // Needed in Next.js App Router

import { motion } from "framer-motion";

type ButtonProps = {
//  children: React.ReactNode;
  title: string;
  onClick: () => void;
};

export function Button({ title, onClick }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="px-6 py-3 mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      {title}
    </motion.button>
  );
}
