'use client';

import { motion } from 'framer-motion';
import { ReactElement } from 'react';

export const Title = (): ReactElement => {
  return (
    <>
      <motion.h1
        className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Dmytro Skydan
      </motion.h1>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-2xl sm:text-3xl text-gray-400">
          Frontend Developer
        </h2>
        <p className="text-xl sm:text-2xl text-gray-500">
          Building Scalable Web Applications
        </p>
      </motion.div>
    </>
  );
};
