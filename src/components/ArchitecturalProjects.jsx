import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Sample architectural projects data
const ARCHITECTURAL_PROJECTS = [
  {
    id: 1,
    title: "Modern Residential Complex",
    location: "Colombo, Sri Lanka",
    year: "2024",
    type: "Residential",
    cards: [
      {
        id: 1,
        type: "overview",
        title: "Project Overview",
        description: "A sustainable residential complex featuring 50 modern units with eco-friendly design principles.",
        image: "/images/arch1-overview.jpg",
        details: ["50 residential units", "Sustainable design", "LEED certified", "Smart home integration"]
      },
      {
        id: 2,
        type: "exterior",
        title: "Exterior Design", 
        description: "Contemporary facade with natural materials and energy-efficient features.",
        image: "/images/arch1-exterior.jpg",
        details: ["Glass curtain walls", "Natural stone cladding", "Green roof systems", "Solar panel integration"]
      },
      {
        id: 3,
        type: "interior",
        title: "Interior Spaces",
        description: "Open-plan living spaces designed for modern lifestyle with premium finishes.",
        image: "/images/arch1-interior.jpg",
        details: ["Open floor plans", "Premium materials", "Natural lighting", "Smart storage solutions"]
      },
      {
        id: 4,
        type: "amenities",
        title: "Amenities",
        description: "Community spaces and amenities designed for residents' comfort and recreation.",
        image: "/images/arch1-amenities.jpg",
        details: ["Swimming pool", "Fitness center", "Community garden", "Co-working spaces"]
      }
    ]
  },
  {
    id: 2,
    title: "Cultural Arts Center",
    location: "Kandy, Sri Lanka",
    year: "2023",
    type: "Cultural",
    cards: [
      {
        id: 1,
        type: "overview",
        title: "Cultural Vision",
        description: "A landmark arts center celebrating Sri Lankan culture through contemporary architecture.",
        image: "/images/arch2-overview.jpg",
        details: ["Multi-purpose halls", "Exhibition galleries", "Traditional elements", "Modern interpretation"]
      },
      {
        id: 2,
        type: "architecture",
        title: "Architectural Form",
        description: "Inspired by traditional Sri Lankan architecture with modern interpretations.",
        image: "/images/arch2-architecture.jpg",
        details: ["Traditional motifs", "Contemporary materials", "Cultural symbolism", "Sustainable features"]
      },
      {
        id: 3,
        type: "performance",
        title: "Performance Spaces",
        description: "State-of-the-art auditoriums and performance venues with excellent acoustics.",
        image: "/images/arch2-performance.jpg",
        details: ["Main auditorium (800 seats)", "Studio theater", "Acoustic design", "Professional lighting"]
      },
      {
        id: 4,
        type: "community",
        title: "Community Impact",
        description: "Designed to serve as a cultural hub for the local community and visitors.",
        image: "/images/arch2-community.jpg",
        details: ["Educational programs", "Local artist showcase", "Cultural workshops", "Community events"]
      }
    ]
  },
  {
    id: 3,
    title: "Sustainable Office Tower",
    location: "Galle, Sri Lanka",
    year: "2023",
    type: "Commercial",
    cards: [
      {
        id: 1,
        type: "overview",
        title: "Green Innovation",
        description: "A 15-story office tower setting new standards for sustainable commercial architecture.",
        image: "/images/arch3-overview.jpg",
        details: ["15 floors", "Net-zero energy", "Green building certification", "Innovative design"]
      },
      {
        id: 2,
        type: "sustainability",
        title: "Sustainability Features",
        description: "Cutting-edge green technologies integrated throughout the building design.",
        image: "/images/arch3-sustainability.jpg",
        details: ["Solar energy system", "Rainwater harvesting", "Natural ventilation", "Energy-efficient systems"]
      },
      {
        id: 3,
        type: "workspace",
        title: "Modern Workspaces",
        description: "Flexible office spaces designed for productivity and employee wellbeing.",
        image: "/images/arch3-workspace.jpg",
        details: ["Flexible layouts", "Natural lighting", "Collaboration spaces", "Wellness features"]
      },
      {
        id: 4,
        type: "technology",
        title: "Smart Building Systems",
        description: "Integrated smart building technologies for optimal performance and user experience.",
        image: "/images/arch3-technology.jpg",
        details: ["IoT integration", "Smart HVAC", "Automated systems", "Real-time monitoring"]
      }
    ]
  }
];

// Individual Project Component with Slideshow
function ProjectSlideshow({ project, isDarkMode }) {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % project.cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + project.cards.length) % project.cards.length);
  };

  const currentCardData = project.cards[currentCard];

  return (
    <div className={`rounded-2xl overflow-hidden shadow-xl mb-16 ${
      isDarkMode 
        ? 'bg-gray-800 border border-gray-700' 
        : 'bg-white border border-gray-200'
    }`}>
      {/* Project Header */}
      <div className={`p-8 border-b ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title}
        </h3>
        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.location}
          </span>
          <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.year}
          </span>
          <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            isDarkMode 
              ? 'bg-amber-900/30 text-amber-400 border border-amber-800/30' 
              : 'bg-amber-100 text-amber-700 border border-amber-200'
          }`}>
            {project.type}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image side */}
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <div className={`w-full h-full flex items-center justify-center ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
          }`}>
            <div className="text-center p-8">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
              }`}>
                <svg className={`w-8 h-8 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {currentCardData.image}
              </p>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <h4 className={`text-2xl lg:text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {currentCardData.title}
              </h4>
              <p className={`text-base lg:text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {currentCardData.description}
              </p>
            </div>

            <div className="space-y-3">
              <h5 className={`text-sm font-semibold uppercase tracking-wide ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Key Features
              </h5>
              <ul className="space-y-2">
                {currentCardData.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex-shrink-0"></div>
                    <span className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={prevCard}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              <div className="flex gap-2">
                {project.cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCard(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentCard
                        ? 'bg-amber-500 scale-125'
                        : isDarkMode 
                          ? 'bg-gray-600 hover:bg-gray-500' 
                          : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextCard}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArchitecturalProjects() {
  const { isDarkMode } = useTheme();

  return (
    <section 
      id="architectural-projects" 
      className={`py-20 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Architectural
            </span>
            <span className={` ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {' '}Projects
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Explore my architectural designs through interactive project showcase
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {ARCHITECTURAL_PROJECTS.map((project) => (
            <ProjectSlideshow 
              key={project.id} 
              project={project} 
              isDarkMode={isDarkMode} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
