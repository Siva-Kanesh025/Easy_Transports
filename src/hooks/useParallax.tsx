import { useEffect, useRef, useState } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, direction = "up" } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + rect.height) {
        const parallaxOffset = (scrolled - elementTop) * speed;
        setOffset(direction === "up" ? -parallaxOffset : parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return { ref, offset };
};
