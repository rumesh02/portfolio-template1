import { useEffect, useRef } from 'react';

export default function Enhanced3DEffects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating 3D elements
    const elements = [];
    const elementCount = 20;

    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement('div');
      element.className = 'floating-3d-element';
      
      const size = Math.random() * 40 + 10;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const depth = Math.random() * 100 + 50;
      const rotationSpeed = (Math.random() - 0.5) * 2;
      const floatSpeed = Math.random() * 2 + 1;
      
      const hue = Math.random() * 60 + 200; // Blue to cyan range
      
      element.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: linear-gradient(45deg, 
          hsla(${hue}, 70%, 60%, 0.1) 0%, 
          hsla(${hue + 30}, 80%, 70%, 0.2) 50%, 
          hsla(${hue}, 70%, 60%, 0.1) 100%);
        border: 1px solid hsla(${hue}, 60%, 70%, 0.3);
        border-radius: 50%;
        backdrop-filter: blur(10px);
        transform-style: preserve-3d;
        transform: perspective(1000px) translateZ(${depth}px);
        box-shadow: 
          0 0 ${size/2}px hsla(${hue}, 70%, 60%, 0.3),
          inset 0 0 ${size/4}px hsla(${hue}, 80%, 80%, 0.2);
        animation: float3DComplex ${8 + Math.random() * 10}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
      `;

      elements.push({
        element,
        x: x,
        y: y,
        depth: depth,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        rotationSpeed: rotationSpeed,
        floatSpeed: floatSpeed,
        hue: hue
      });

      container.appendChild(element);
    }

    // Create CSS animation for complex 3D floating
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float3DComplex {
        0%, 100% { 
          transform: perspective(1000px) 
                     translateY(0px) 
                     translateZ(var(--depth, 50px)) 
                     rotateX(0deg) 
                     rotateY(0deg) 
                     rotateZ(0deg);
        }
        25% { 
          transform: perspective(1000px) 
                     translateY(-30px) 
                     translateZ(calc(var(--depth, 50px) + 20px)) 
                     rotateX(15deg) 
                     rotateY(15deg) 
                     rotateZ(5deg);
        }
        50% { 
          transform: perspective(1000px) 
                     translateY(-50px) 
                     translateZ(calc(var(--depth, 50px) + 40px)) 
                     rotateX(0deg) 
                     rotateY(30deg) 
                     rotateZ(10deg);
        }
        75% { 
          transform: perspective(1000px) 
                     translateY(-30px) 
                     translateZ(calc(var(--depth, 50px) + 20px)) 
                     rotateX(-15deg) 
                     rotateY(15deg) 
                     rotateZ(-5deg);
        }
      }

      .floating-3d-element {
        pointer-events: none;
        will-change: transform;
      }

      .floating-3d-element:hover {
        transform: perspective(1000px) 
                   translateZ(calc(var(--depth, 50px) + 50px)) 
                   scale(1.2);
        box-shadow: 
          0 0 40px rgba(59, 130, 246, 0.6),
          inset 0 0 20px rgba(59, 130, 246, 0.4);
      }
    `;
    document.head.appendChild(style);

    // Animation loop for interactive effects
    let animationId;
    const animate = () => {
      elements.forEach(item => {
        item.rotationX += item.rotationSpeed * 0.5;
        item.rotationY += item.rotationSpeed;
        item.rotationZ += item.rotationSpeed * 0.3;
        
        // Update hue for color shifting
        item.hue += 0.5;
        if (item.hue > 260) item.hue = 200;
        
        // Apply 3D transformations
        item.element.style.setProperty('--depth', `${item.depth}px`);
        item.element.style.background = `
          linear-gradient(45deg, 
            hsla(${item.hue}, 70%, 60%, 0.1) 0%, 
            hsla(${item.hue + 30}, 80%, 70%, 0.2) 50%, 
            hsla(${item.hue}, 70%, 60%, 0.1) 100%)
        `;
        item.element.style.borderColor = `hsla(${item.hue}, 60%, 70%, 0.3)`;
        item.element.style.boxShadow = `
          0 0 ${parseInt(item.element.style.width)/2}px hsla(${item.hue}, 70%, 60%, 0.3),
          inset 0 0 ${parseInt(item.element.style.width)/4}px hsla(${item.hue}, 80%, 80%, 0.2)
        `;
        
        // Wrap around screen
        if (item.y > window.innerHeight + 100) {
          item.y = -100;
          item.element.style.top = item.y + 'px';
        } else {
          item.y += item.floatSpeed * 0.2;
          item.element.style.top = item.y + 'px';
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      document.head.removeChild(style);
      elements.forEach(item => {
        if (container.contains(item.element)) {
          container.removeChild(item.element);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[1] pointer-events-none overflow-hidden"
      style={{ perspective: '1000px' }}
    />
  );
}
