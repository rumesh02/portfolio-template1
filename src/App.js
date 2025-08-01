import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";
import FloatingElements from "./components/FloatingElements";
import ParticleEffects from "./components/ParticleEffects";
import MouseTrail from "./components/MouseTrail";
import Enhanced3DEffects from "./components/Enhanced3DEffects";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

function AppContent() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-500 relative overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white' 
        : 'bg-gradient-to-br from-blue-100 via-white to-indigo-100 text-gray-900'
    }`}>
      {/* Animated Background Layers - reduced for performance */}
      <div className={isDarkMode ? 'opacity-60' : 'opacity-30'}>
        <AnimatedBackground />
        <FloatingElements />
        {/* Removed ParticleEffects and Enhanced3DEffects for better performance */}
      </div>
      <MouseTrail />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <NavBar />

        <main>
          <Home />
          <About />
          <Education />
          <Projects />
          <Achievements />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
