import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const { isDarkMode } = useTheme();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      gradient: "from-blue-500 to-indigo-600",
      image: "🛒"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
      gradient: "from-green-500 to-teal-600",
      image: "📋"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather conditions and forecasts using external weather APIs.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      github: "#",
      demo: "#",
      gradient: "from-orange-500 to-red-600",
      image: "🌤️"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with dark mode support, smooth animations, and optimized performance.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      github: "#",
      demo: "#",
      gradient: "from-pink-500 to-violet-600",
      image: "💼"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, file sharing, and emoji support.",
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      github: "#",
      demo: "#",
      gradient: "from-indigo-500 to-blue-600",
      image: "💬"
    },
    {
      title: "Finance Tracker",
      description: "Personal finance management app with expense tracking, budget planning, and financial analytics.",
      technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#",
      gradient: "from-emerald-500 to-cyan-600",
      image: "💰"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-24 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900/90 via-blue-900/50 to-indigo-900/90' 
          : 'bg-gradient-to-br from-blue-50/90 via-white/50 to-indigo-50/90'
      }`}></div>
      
      {/* Floating background elements for 3D effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-300 ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl animate-pulse delay-700 ${
          isDarkMode ? 'bg-indigo-500/15' : 'bg-indigo-500/25'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-500/20'
        }`}></div>
      </div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className={`font-semibold text-lg tracking-wide uppercase ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              My Work
            </span>
            <h2 className={`text-4xl lg:text-5xl font-bold mt-4 mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Here are some of my recent projects that showcase my skills and creativity
            </p>
            <div className={`w-24 h-1 mx-auto rounded-full mt-8 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
            }`}></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 hover-3d card-3d ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  perspective: '1000px'
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Enhanced 3D Card with multiple depth layers */}
                <div className={`relative backdrop-blur-md rounded-3xl p-8 border shadow-2xl transition-all duration-500 h-full transform-gpu depth-layers ${
                  isDarkMode 
                    ? 'bg-gray-800/80 border-gray-700/50 group-hover:shadow-blue-500/25' 
                    : 'bg-white/90 border-gray-200/50 group-hover:shadow-blue-500/20'
                }`}>
                  
                  {/* Floating glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* 3D border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                  {/* Project Icon/Image with 3D effect */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 relative z-10">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-white group-hover:text-blue-300' 
                        : 'text-gray-900 group-hover:text-blue-600'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 backdrop-blur-sm border rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-700/60 border-gray-600/50 text-gray-200 hover:bg-blue-600/30 hover:border-blue-500/50' 
                              : 'bg-gray-100/80 border-gray-300/50 text-gray-700 hover:bg-blue-100/80 hover:border-blue-400/50'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons with 3D effects */}
                  <div className="flex gap-4 mt-8">
                    <a 
                      href={project.github}
                      className={`flex items-center gap-2 px-4 py-2 backdrop-blur-sm border rounded-xl font-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex-1 justify-center shadow-lg hover:shadow-xl ${
                        isDarkMode 
                          ? 'bg-gray-700/60 border-gray-600/50 text-gray-200 hover:bg-gray-600/80 hover:border-gray-500/70' 
                          : 'bg-white/80 border-gray-300/50 text-gray-700 hover:bg-gray-50/90 hover:border-gray-400/70'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex-1 justify-center shadow-lg hover:shadow-2xl`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  </div>

                  {/* Enhanced Hover Effect with 3D depth */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <a 
              href="https://github.com/rumesh02?tab=repositories"
              target='_blank'
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
