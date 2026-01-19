import { useState, useEffect } from "react";

/**
 * Custom hook for animated number counting
 * @param end - Target number to count to
 * @param duration - Animation duration in milliseconds (default: 2000)
 * @returns Object with current count and visibility setter
 */
export const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationId: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible, end, duration]);

  return { count, setIsVisible };
};
