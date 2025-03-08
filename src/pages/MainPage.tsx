'use client';

import { HomePageNew } from '../components/HomePageNew/HomePageNew';

export default function Portfolio() {
  return (
    <section className="min-h-screen h-screen bg-black text-white relative overflow-hidden">
      {/* <CombinedBackground />

      <main className="relative z-10 min-h-full flex flex-col items-center justify-center text-center px-4">
        <Title />

        <motion.div
          className="flex gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        ></motion.div>


        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
          }}
        >
          <div className="w-5 h-9 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-500 rounded-full mt-2" />
          </div>
        </motion.div>
      </main> */}
      <HomePageNew />
    </section>
  );
}
