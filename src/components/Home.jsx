import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
    
    // Mouse movement effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0">
      {/* Interactive background elements that follow mouse */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`
        }}
      ></div>
      
      {/* Enhanced animated background elements - simplified */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-blue-500/10 via-indigo-500/15 to-purple-600/10 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-cyan-400/15 via-blue-500/20 to-indigo-600/15 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-32 left-40 w-48 h-48 bg-gradient-to-r from-purple-500/10 via-pink-500/15 to-blue-600/10 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] lg:min-h-[80vh]">
          {/* Left side - Text content */}
          <div className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-3 lg:space-y-4">
              <div className="inline-block">
                <span className={`text-base lg:text-lg font-medium tracking-wide ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Hi! I am,
                </span>
              </div>
              
              <div className="space-y-5">
                <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold leading-tight ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <span className={`bg-gradient-to-r ${
                    isDarkMode 
                      ? 'from-blue-400 via-cyan-300 to-indigo-400' 
                      : 'from-blue-600 via-indigo-600 to-purple-600'
                  } bg-clip-text text-transparent animate-pulse`}>
                    Rumesh Thisaranga
                  </span>
                </h1>
                
                <p className={`text-lg md:text-xl lg:text-2xl font-light mt-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className={`bg-gradient-to-r ${
                    isDarkMode 
                      ? 'from-blue-300 to-cyan-300' 
                      : 'from-blue-600 to-indigo-600'
                  } bg-clip-text text-transparent`}>
                    Full-Stack Developer & UI Designer
                  </span>
                </p>
              </div>
              
              <p className={`text-base lg:text-lg leading-relaxed max-w-lg ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                With a focus on usability and performance, I design and build digital solutions that merge software engineering with thoughtful design.
              </p>
            </div>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 border-2 border-blue-400/50 text-blue-300 rounded-lg font-medium hover:border-blue-400 hover:text-blue-200 hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links with enhanced styling */}
            <div className="flex gap-6 pt-4">
              <a 
                href="https://github.com/rumesh02" 
                target='_blank'
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-blue-500/20 transform hover:scale-110 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/rumeshthisaranga" 
                target='_blank'
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-blue-500/20 transform hover:scale-110 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
            </div>
          </div>

          {/* Right side - Photo with enhanced styling */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} order-first lg:order-last`}>
            <div className="relative flex justify-center">
              {/* Enhanced diagonal background with glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl transform rotate-3 scale-105 blur-sm opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl transform -rotate-6 scale-95 opacity-40 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl transform rotate-1 scale-100 opacity-30 animate-pulse"></div>
              
              {/* Photo container with enhanced styling */}
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-3xl p-4 lg:p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500 w-64 h-64 md:w-80 md:h-80 border border-gray-700/50">
                <div className="w-full h-full bg-gray-700/50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-4">
                    <img 
                      src="/images/rumesh.jpg"
                      alt="Rumesh Thisaranga"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
