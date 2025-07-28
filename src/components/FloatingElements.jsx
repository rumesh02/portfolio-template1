export default function FloatingElements() {
  return (
    <>
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large floating circles with aurora effect */}
        <div className="absolute top-20 left-10 w-96 h-96 aurora-animation">
          <div className="w-full h-full bg-gradient-to-r from-blue-400/10 via-indigo-500/20 to-purple-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="absolute top-60 right-20 w-80 h-80 aurora-animation" style={{ animationDelay: '-5s' }}>
          <div className="w-full h-full bg-gradient-to-r from-cyan-400/15 via-blue-500/25 to-indigo-600/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="absolute bottom-40 left-1/3 w-72 h-72 aurora-animation" style={{ animationDelay: '-10s' }}>
          <div className="w-full h-full bg-gradient-to-r from-purple-400/10 via-pink-500/20 to-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-32 left-1/4 geometric-spin">
          <div className="w-16 h-16 border-2 border-blue-400/30 transform rotate-45"></div>
        </div>
        
        <div className="absolute top-80 right-1/3 geometric-spin" style={{ animationDelay: '-8s' }}>
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 transform rotate-12"></div>
        </div>
        
        <div className="absolute bottom-60 right-10 geometric-spin" style={{ animationDelay: '-15s' }}>
          <div className="w-20 h-20 border-2 border-cyan-400/30 rounded-full"></div>
        </div>
        
        <div className="absolute top-1/2 left-10 geometric-spin" style={{ animationDelay: '-20s' }}>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500/30 to-indigo-600/30 transform rotate-45"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-40 left-1/2 floating-element">
          <div className="w-3 h-3 bg-blue-400/50 rounded-full pulse-glow"></div>
        </div>
        
        <div className="absolute top-96 left-2/3 floating-element">
          <div className="w-2 h-2 bg-indigo-400/60 rounded-full pulse-glow"></div>
        </div>
        
        <div className="absolute bottom-80 left-1/5 floating-element">
          <div className="w-4 h-4 bg-cyan-400/40 rounded-full pulse-glow"></div>
        </div>

        {/* Drifting elements */}
        <div className="absolute top-24 right-1/4 drift-animation">
          <div className="w-6 h-6 border border-blue-300/40 rounded-full"></div>
        </div>
        
        <div className="absolute top-2/3 left-3/4 drift-animation" style={{ animationDelay: '-7s' }}>
          <div className="w-8 h-8 border border-indigo-300/30 transform rotate-45"></div>
        </div>

        {/* Orbiting elements */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="orbit-animation">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400/60 to-cyan-400/60 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Tech-themed icons floating */}
        <div className="absolute top-48 right-1/5 floating-element" style={{ animationDelay: '-3s' }}>
          <div className="text-blue-400/30 text-2xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        </div>
        
        <div className="absolute bottom-32 right-2/3 floating-element" style={{ animationDelay: '-6s' }}>
          <div className="text-indigo-400/25 text-xl">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        {/* Line connections effect */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="#6366F1" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path
              d="M10,20 Q30,5 50,20 T90,20"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.2"
              className="animate-pulse"
            />
            <path
              d="M5,60 Q25,45 45,60 T85,60"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.15"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <path
              d="M15,80 Q35,65 55,80 T95,80"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.1"
              className="animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </svg>
        </div>
      </div>
    </>
  );
}
