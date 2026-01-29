'use client'

import { FiArrowDown, FiHeart, FiActivity } from 'react-icons/fi'

export default function Hero({ config }: { config: any }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden pt-20"
    >
      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Large name with proper spacing */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 animate-slide-up tracking-tight leading-tight">
            <span className="gradient-text font-extrabold">
              {config.personal.name}
            </span>
          </h1>
          
          {/* Title with proper spacing */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-5 md:mb-6 animate-slide-up leading-tight" style={{ 
            animationDelay: '0.2s'
          }}>
            {config.personal.title}
          </h2>
          
          {/* Tagline with proper spacing - improved readability */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 md:mb-12 animate-slide-up leading-relaxed max-w-3xl mx-auto font-light px-4" style={{ animationDelay: '0.4s' }}>
            {config.personal.tagline}
          </p>
          
          {/* CTA Buttons with proper gap */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-slide-up mb-12 md:mb-16" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-lg text-base md:text-lg font-semibold hover:from-blue-400 hover:via-teal-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FiHeart className="w-4 h-4 md:w-5 md:h-5" />
                Get In Touch
              </span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="border-2 border-blue-500 text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-50 hover:border-blue-600 hover:text-blue-700 transition-all duration-300 shadow-md shadow-blue-500/5 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              View My Work
            </button>
          </div>

          {/* Scroll indicator with proper spacing */}
          <div className="mb-8 md:mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="text-blue-500 hover:text-blue-600 transition-colors group"
              aria-label="Scroll down"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors font-medium">Scroll</span>
                <FiArrowDown size={28} className="group-hover:scale-110 transition-transform animate-bounce" />
              </div>
            </button>
          </div>

          {/* Stats badges with proper spacing */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 animate-slide-up px-4" style={{ animationDelay: '1s' }}>
            <div className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-full px-6 md:px-8 py-3 md:py-4 text-blue-600 font-semibold shadow-md shadow-blue-500/10 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 text-sm md:text-base">
                <FiActivity className="w-4 h-4 md:w-5 md:h-5" />
                52% Growth
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm border-2 border-teal-200 rounded-full px-6 md:px-8 py-3 md:py-4 text-teal-600 font-semibold shadow-md shadow-teal-500/10 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 text-sm md:text-base">
                <FiHeart className="w-4 h-4 md:w-5 md:h-5" />
                100K+ Subscribers
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm border-2 border-emerald-200 rounded-full px-6 md:px-8 py-3 md:py-4 text-emerald-600 font-semibold shadow-md shadow-emerald-500/10 hover:scale-105 transition-transform">
              <span className="text-sm md:text-base">5+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
