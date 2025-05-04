
import * as React from "react"

const MOBILE_BREAKPOINT = 768 // Matches with Tailwind's md breakpoint

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Default to desktop for SSR
    if (typeof window === 'undefined') return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Handler to call on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Set size on load
    handleResize();

    // Add event listener
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    mql.addEventListener("change", onChange);
    window.addEventListener('resize', handleResize);
    
    // Remove event listeners on cleanup
    return () => {
      mql.removeEventListener("change", onChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures effect is only run on mount

  return isMobile;
}
