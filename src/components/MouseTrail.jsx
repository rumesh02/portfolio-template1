import { useEffect, useRef } from 'react';

export default function MouseTrail() {
  const trail = useRef([]);
  const cursor = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Add current position to trail
      trail.current.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now()
      });

      // Keep trail length manageable
      if (trail.current.length > 10) {
        trail.current.shift();
      }
    };

    const animate = () => {
      const cursorElement = cursor.current;
      if (!cursorElement) return;

      // Clear old trail points
      const now = Date.now();
      trail.current = trail.current.filter(point => now - point.time < 500);

      // Create trail elements
      cursorElement.innerHTML = '';
      
      trail.current.forEach((point, index) => {
        const dot = document.createElement('div');
        const age = now - point.time;
        const opacity = Math.max(0, 1 - age / 500);
        const size = 4 + (index * 2);
        
        dot.style.cssText = `
          position: fixed;
          left: ${point.x - size/2}px;
          top: ${point.y - size/2}px;
          width: ${size}px;
          height: ${size}px;
          background: radial-gradient(circle, rgba(59, 130, 246, ${opacity * 0.6}) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: screen;
        `;
        
        cursorElement.appendChild(dot);
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={cursor}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
