import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Sample achievements data
const ACHIEVEMENTS = [
  {
    id: 1,
    title: "2nd Runner-up - J'apura X-Treme Hackathon",
    organization: "IEEE Computer Society, University of Jayawardenapura",
    year: "2024",
    type: "Hackathon",
    description: "Secured 2nd runner-up position in the prestigious J'apura X-Treme Hackathon, demonstrating exceptional problem-solving skills and innovative thinking in a competitive environment.",
    image: "/images/japura.jpg",
    details: ["2nd Runner-up Position", "IEEE Competition", "Problem Solving", "Team Collaboration"]
  },
  {
    id: 2,
    title: "6th Place - CODE RUSH",
    organization: "INTECS, Faculty of IT, University of Moratuwa",
    year: "2024", 
    type: "Programming",
    description: "Achieved 6th place in CODE RUSH programming competition, showcasing strong coding skills and algorithmic thinking among top participants.",
    image: "/images/coderush.jpg",
    details: ["6th Place Winner", "Programming Contest", "Algorithmic Thinking", "Coding Excellence"]
  },
  {
    id: 3,
    title: "Top 10 Finalists - SLIoT",
    organization: "CS Engineering, UoM, SLT-Mobitel, IESL",
    year: "2025",
    type: "IoT Competition",
    description: "Selected as top 10 finalist in Sri Lanka IoT Challenge, recognized for innovative IoT solutions and technical excellence in emerging technologies.",
    image: "/images/sliot.jpg",
    details: ["Top 10 Finalist", "IoT Innovation", "Technical Excellence", "Emerging Technologies"]
  },
  {
    id: 4,
    title: "Top 20 Finalists - CodeX 2024",
    organization: "CS Engineering, University of Moratuwa",
    year: "2025",
    type: "Competition",
    description: "Reached top 20 finalists in CodeX 2024 competition, demonstrating strong programming fundamentals and competitive coding abilities.",
    image: "/images/codex.jpg",
    details: ["Top 20 Finalist", "Competitive Programming", "Technical Skills", "Programming Excellence"]
  },
  {
    id: 5,
    title: "Top 10 Finalists - HackMoral 7.0",
    organization: "INTECS, Faculty of IT, University of Moratuwa",
    year: "2025",
    type: "Hackathon",
    description: "Achieved top 10 finalist position in HackMoral 7.0, showcasing innovative solutions and collaborative development skills in hackathon environment.",
    image: "/images/hackmoral.jpg",
    details: ["Top 10 Finalist", "Hackathon Excellence", "Innovation", "Collaborative Development"]
  }
];

export default function Achievements() {
  const { isDarkMode } = useTheme();

  return (
    <section 
      id="achievements" 
      className={`py-20 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              My
            </span>
            <span className={` ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {' '}Achievements
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Recognitions and milestones that highlight my journey in architecture and design
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((achievement) => (
            <div 
              key={achievement.id}
              className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Achievement Header */}
              <div className={`p-6 border-b min-h-[150px] flex flex-col justify-between ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-xl font-bold leading-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {achievement.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-3 ${
                    isDarkMode 
                      ? 'bg-amber-900/30 text-amber-400 border border-amber-800/30' 
                      : 'bg-amber-100 text-amber-700 border border-amber-200'
                  }`}>
                    {achievement.type}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {achievement.organization}
                  </span>
                  <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {achievement.year}
                  </span>
                </div>
              </div>

              {/* Achievement Content */}
              <div className="flex flex-col">
                {/* Image section - full width */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className={`w-full h-full flex items-center justify-center ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`} style={{ display: 'none' }}>
                    <div className="text-center p-6">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                        isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                      }`}>
                        <svg className={`w-6 h-6 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <p className={`text-xs ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Image not found
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content section - below image */}
                <div className="p-6">
                  <div className="space-y-4">
                    <p className={`text-sm leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {achievement.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className={`text-xs font-semibold uppercase tracking-wide ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Highlights
                      </h5>
                      <ul className="space-y-1">
                        {achievement.details.slice(0, 3).map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex-shrink-0"></div>
                            <span className={`text-xs ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
