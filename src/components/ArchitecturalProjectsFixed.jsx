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

export default function ArchitecturalProjects() {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !isInView) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress within the section (0 to 1)
      const scrollTop = Math.max(0, -rect.top);
      const maxScroll = Math.max(1, sectionHeight - viewportHeight);
      const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));

      // Calculate total cards across all projects
      const totalCards = ARCHITECTURAL_PROJECTS.reduce((sum, project) => sum + project.cards.length, 0);
      
      // Convert progress to global card index
      const globalCardIndex = Math.floor(progress * totalCards);
      
      // Find which project and card this corresponds to
      let projectIndex = 0;
      let cardIndex = 0;
      let cardCount = 0;
      
      for (let i = 0; i < ARCHITECTURAL_PROJECTS.length; i++) {
        const projectCardCount = ARCHITECTURAL_PROJECTS[i].cards.length;
        if (globalCardIndex < cardCount + projectCardCount) {
          projectIndex = i;
          cardIndex = globalCardIndex - cardCount;
          break;
        }
        cardCount += projectCardCount;
      }
      
      // Ensure we don't exceed bounds
      cardIndex = Math.max(0, Math.min(cardIndex, ARCHITECTURAL_PROJECTS[projectIndex].cards.length - 1));
      
      setCurrentProject(projectIndex);
      setCurrentCard(cardIndex);
    };

    // Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: [0, 0.1, 0.5] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isInView]);

  const currentProjectData = ARCHITECTURAL_PROJECTS[currentProject];
  const currentCardData = currentProjectData?.cards[currentCard];

  return (
    <section 
      ref={sectionRef}
      id="architectural-projects" 
      className={`relative min-h-[300vh] ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Sticky container for the content */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Minimal background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8">
          {/* Debug progress bar */}
          <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-3 rounded-lg text-sm">
            <div>Project: {currentProject + 1}/3</div>
            <div>Card: {currentCard + 1}/{currentProjectData?.cards.length || 4}</div>
            <div>Scroll: {isInView ? 'Active' : 'Inactive'}</div>
          </div>

          {/* Section header */}
          <div className="text-center mb-12">
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
            <p className={`text-lg max-w-2xl mx-auto mb-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explore my architectural designs through interactive project showcase
            </p>
            <p className={`text-sm max-w-xl mx-auto ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              💡 Scroll down slowly to navigate through projects and cards
            </p>
          </div>

          {/* Project info */}
          {currentProjectData && (
            <div className="text-center mb-8">
              <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {currentProjectData.title}
              </h3>
              <div className="flex items-center justify-center gap-4 text-sm lg:text-base mb-4">
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {currentProjectData.location}
                </span>
                <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {currentProjectData.year}
                </span>
                <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  isDarkMode 
                    ? 'bg-amber-900/30 text-amber-400 border border-amber-800/30' 
                    : 'bg-amber-100 text-amber-700 border border-amber-200'
                }`}>
                  {currentProjectData.type}
                </span>
              </div>
              {/* Debug info - more visible */}
              <div className={`text-sm mb-4 p-3 rounded-lg ${
                isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-orange-600'
              }`}>
                <div>Project {currentProject + 1}/{ARCHITECTURAL_PROJECTS.length} - Card {currentCard + 1}/{currentProjectData.cards.length}</div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${((currentProject * currentProjectData.cards.length + currentCard + 1) / 12) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Main content card */}
          {currentCardData && (
            <div className="relative" key={`${currentProject}-${currentCard}`}>
              <div className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-700 transform ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Progress indicators - positioned relative to section */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              {/* Project indicators */}
              <div className="flex gap-2">
                {ARCHITECTURAL_PROJECTS.map((project, index) => (
                  <div
                    key={project.id}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProject
                        ? 'bg-amber-400 scale-125'
                        : isDarkMode 
                          ? 'bg-gray-500' 
                          : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <div className={`w-px h-4 ${
                isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
              }`} />
              
              {/* Card indicators for current project */}
              <div className="flex gap-1">
                {currentProjectData && currentProjectData.cards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index <= currentCard
                        ? 'bg-orange-400'
                        : isDarkMode 
                          ? 'bg-gray-600' 
                          : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
