import { useEffect, useState } from 'react';

const useMediaQuery = (width: number) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const handleResize = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth <= width);
        timeoutId = null;
      }, 500);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return isMobile;
};

export default useMediaQuery;
