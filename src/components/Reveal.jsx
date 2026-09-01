
import React, { useRef, useState, useEffect } from "react";

export default function Reveal({
  children,
  className = "",
  delay = "",
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'zoom'
  threshold = 0.12
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold });

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const directionClass = direction ? `reveal-${direction}` : "reveal-up";

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass} ${isVisible ? "is-visible" : ""} ${delay} ${className}`}
    >
      {children}
    </div>
  );
}

