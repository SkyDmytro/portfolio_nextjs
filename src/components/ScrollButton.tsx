'use client';

import Image from 'next/image';

import arrow from '../../public/up-arrow-button-svgrepo-com.svg';

export const ScrollButton = () => {
  const handleScrollOnTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      onClick={handleScrollOnTop}
      className="fixed sm:bottom-12 sm:right-5 md:bottom-5 md:right-5 h-8  w-8 cursor-pointer hover:bg-primaryFont hover:text-blue transition duration-500 bg-lightBlue bg-opacity-50 rounded-full "
    >
      <Image src={arrow} alt="arrow" />
    </div>
  );
};
