import { useEffect, useRef } from 'react';

export default function ParticleEffects() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    `;

    // Create particles
    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const speedX = (Math.random() - 0.5) * 2;
      const speedY = (Math.random() - 0.5) * 2;
      const hue = Math.random() * 60 + 200; // Blue to cyan range
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, hsla(${hue}, 70%, 60%, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        filter: blur(1px);
        animation: particleFloat ${5 + Math.random() * 10}s linear infinite;
      `;

      particles.push({
        element: particle,
        x: x,
        y: y,
        speedX: speedX,
        speedY: speedY,
        size: size,
        hue: hue
      });

      particleContainer.appendChild(particle);
    }

    container.appendChild(particleContainer);

    // Animation loop
    let animationId;
    const animate = () => {
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;

        // Update position
        particle.element.style.left = particle.x + 'px';
        particle.element.style.top = particle.y + 'px';

        // Update color
        particle.hue += 0.5;
        if (particle.hue > 260) particle.hue = 200;
        
        particle.element.style.background = `radial-gradient(circle, hsla(${particle.hue}, 70%, 60%, 0.6) 0%, transparent 70%)`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      if (container.contains(particleContainer)) {
        container.removeChild(particleContainer);
      }
    };
  }, []);

  return <div ref={mountRef} className="particle-effects" />;
}
