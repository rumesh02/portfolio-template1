import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
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
      {/* Animated Background Layers - adjust opacity based on theme */}
      <div className={isDarkMode ? 'opacity-100' : 'opacity-40'}>
        <AnimatedBackground />
        <FloatingElements />
        <ParticleEffects />
        <Enhanced3DEffects />
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
