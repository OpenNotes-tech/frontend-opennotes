import { useState, useEffect } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

function useScreenSize() {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  function getScreenSize() {
    const windowWidth = window.innerWidth;
    const screenSizeKeys = Object.keys(breakpoints);

    for (let i = screenSizeKeys.length - 1; i >= 0; i--) {
      const breakpoint = screenSizeKeys[i];
      if (windowWidth >= breakpoints[breakpoint]) {
        return breakpoint;
      }
    }

    return 'sm'; // Default to the smallest breakpoint
  }

  useEffect(() => {
    function handleResize() {
      setScreenSize(getScreenSize());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
}

export default useScreenSize;
