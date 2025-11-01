import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth cursor follow
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      dotX += (mouseX - dotX) * 0.4;
      dotY += (mouseY - dotY) * 0.4;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      
      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;

      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.borderColor = '#9BC8FF';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = '#8FB3F5';
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Don't show custom cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
