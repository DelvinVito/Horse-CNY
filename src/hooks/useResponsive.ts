import { useState, useEffect } from 'react';

interface UseResponsiveReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  coinCount: number;
}

export const useResponsive = (): UseResponsiveReturn => {
  const [windowWidth, setWindowWidth] = useState(
    typeof globalThis !== 'undefined' ? globalThis.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(globalThis.innerWidth);
    };
    
    handleResize();
    globalThis.addEventListener('resize', handleResize);
    return () => globalThis.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowWidth < 640,
    isTablet: windowWidth >= 640 && windowWidth < 1024,
    isDesktop: windowWidth >= 1024,
    coinCount: windowWidth < 640 ? 6 : 15,
  };
};
