import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system for stars
    const stars = [];
    const numStars = 150;
    
    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * Math.PI * 2
      });
    }

    // Floating particles for aurora effect
    const particles = [];
    const numParticles = 30;
    
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.3,
        hue: Math.random() * 60 + 180, // Blue to cyan range
        opacity: Math.random() * 0.6 + 0.2,
        life: Math.random() * 100
      });
    }

    // Shooting stars
    const shootingStars = [];
    
    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.3,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 10 + 5,
        angle: Math.random() * Math.PI / 6 + Math.PI / 6, // 30-60 degrees
        opacity: 1,
        life: 60
      });
    };

    // Create shooting stars periodically
    const shootingStarInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        createShootingStar();
      }
    }, 3000);

    let animationId;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw stars with twinkling effect
      stars.forEach(star => {
        ctx.save();
        
        // Twinkling effect
        star.twinkle += 0.02;
        const twinkleOpacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinkle));
        
        ctx.globalAlpha = twinkleOpacity;
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = star.size * 2;
        ctx.shadowColor = '#ffffff';
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move stars slowly
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
        
        ctx.restore();
      });

      // Draw aurora particles
      particles.forEach((particle, index) => {
        ctx.save();
        
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life += 1;
        
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Create aurora effect with sine wave movement
        const waveOffset = Math.sin(time + particle.life * 0.01) * 20;
        const currentX = particle.x + waveOffset;
        
        // Gradient for aurora effect
        const gradient = ctx.createRadialGradient(
          currentX, particle.y, 0,
          currentX, particle.y, particle.size * 3
        );
        
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 60%, ${particle.opacity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue + 20}, 70%, 50%, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${particle.hue + 40}, 60%, 40%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentX, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Update hue for color shifting
        particle.hue += 0.2;
        if (particle.hue > 240) particle.hue = 180;
        
        ctx.restore();
      });

      // Draw shooting stars
      shootingStars.forEach((star, index) => {
        ctx.save();
        
        // Calculate trail positions
        const endX = star.x + Math.cos(star.angle) * star.length;
        const endY = star.y + Math.sin(star.angle) * star.length;
        
        // Create gradient for trail
        const gradient = ctx.createLinearGradient(star.x, star.y, endX, endY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.3, `rgba(120, 200, 255, ${star.opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        // Move shooting star
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        
        // Fade out
        star.life--;
        star.opacity = star.life / 60;
        
        // Remove dead shooting stars
        if (star.life <= 0 || star.x > canvas.width + 100 || star.y > canvas.height + 100) {
          shootingStars.splice(index, 1);
        }
        
        ctx.restore();
      });

      // Draw nebula clouds
      const nebulaCount = 3;
      for (let i = 0; i < nebulaCount; i++) {
        const nebulaX = (canvas.width / nebulaCount) * i + (canvas.width / nebulaCount) / 2;
        const nebulaY = canvas.height / 2;
        const nebulaSize = 200 + Math.sin(time + i) * 50;
        
        const nebulaGradient = ctx.createRadialGradient(
          nebulaX, nebulaY, 0,
          nebulaX, nebulaY, nebulaSize
        );
        
        const hue = (time * 10 + i * 60) % 360;
        nebulaGradient.addColorStop(0, `hsla(${hue}, 70%, 50%, 0.05)`);
        nebulaGradient.addColorStop(0.5, `hsla(${hue + 30}, 60%, 40%, 0.03)`);
        nebulaGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = nebulaGradient;
        ctx.beginPath();
        ctx.arc(nebulaX + Math.sin(time + i) * 30, nebulaY + Math.cos(time + i) * 20, nebulaSize, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
