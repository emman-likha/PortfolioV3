import React, { useEffect, useState } from 'react';

export const CursorEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', mouseMove);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="pointer"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main glow effect */}
      <div
        className={`absolute w-8 h-8 bg-orange-500/20 dark:bg-orange-400/30 rounded-full blur-sm transition-all duration-300 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />
      {/* Center dot */}
      <div
        className="absolute w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
    </div>
  );
};