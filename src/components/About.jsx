import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
    { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
    { name: "Python", level: 75, color: "from-indigo-500 to-slate-500" },
    { name: "Java", level: 70, color: "from-blue-600 to-blue-400" },
    { name: "MongoDB", level: 95, color: "from-teal-500 to-cyan-500" },
  ];

  return (
    <section id="about" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg tracking-wide uppercase">
              Get to know me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  I'm a passionate{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 bg-clip-text text-transparent">
                    Full-Stack Developer
                  </span>
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating clean, efficient, and user-friendly applications that solve real-world problems.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey in software development started with curiosity and has evolved into a 
                  commitment to continuous learning and improvement. I enjoy working with teams to 
                  build innovative solutions that make a difference.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects</div>
                </div>
                
                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a 
                  href="#projects"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  View My Work
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Skills */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/20 dark:border-gray-700/20 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Skills & Expertise
                </h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform transition-all duration-1000 delay-${(index + 1) * 100} ${isVisible ? 'scale-x-100' : 'scale-x-0'} origin-left`}
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Skills Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200/30 dark:border-gray-700/30">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {['MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git', 'REST APIs', 'GraphQL', 'Next.js'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
