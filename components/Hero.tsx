'use client'

import Image from 'next/image'
import { FiArrowDown } from 'react-icons/fi'

export default function Hero({ config }: { config: any }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const personal = config?.personal || {}
  const stats = config?.stats || {}

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 relative overflow-hidden pt-20 transition-all duration-300"
    >
      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Circular Profile Image */}
          <div className="flex justify-center mb-6 md:mb-8 animate-slide-up">
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden ring-4 ring-blue-200 dark:ring-blue-500/50 shadow-xl shadow-blue-500/20 dark:shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105">
              <Image
                src="/images/num.png"
                alt={personal.name || "Profile"}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Large name with proper spacing */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 animate-slide-up tracking-tight leading-tight" style={{ animationDelay: '0.1s' }}>
            <span className="font-extrabold">
              <span className="font-[family-name:var(--font-dancing-script)] text-blue-600 text-7xl md:text-9xl lg:text-[10rem]">{personal.firstName || "Portfolio"}</span>{' '}
              <span className="font-[family-name:var(--font-dancing-script)] text-teal-600 text-7xl md:text-9xl lg:text-[10rem]">{personal.lastName || "Owner"}</span>
            </span>
          </h1>
          
          {/* Title with proper spacing */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-5 md:mb-6 animate-slide-up leading-tight transition-colors duration-300" style={{ 
            animationDelay: '0.2s'
          }}>
            {personal.title || "Professional"}
          </h2>
          
          {/* Tagline with proper spacing - improved readability */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 md:mb-12 animate-slide-up leading-relaxed max-w-3xl mx-auto font-light px-4 transition-colors duration-300" style={{ animationDelay: '0.4s' }}>
            {personal.tagline || "Building amazing things"}
          </p>
          
          {/* CTA Buttons with proper gap */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-slide-up mb-12 md:mb-16" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-lg text-base md:text-lg font-semibold hover:from-blue-400 hover:via-teal-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-lg md:text-xl">💌</span>
                <span>Get In Touch</span>
              </span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="border-2 border-blue-500 text-blue-600 dark:text-blue-400 px-8 md:px-10 py-4 md:py-5 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 shadow-md shadow-blue-500/5 dark:shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/30 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              View My Work
            </button>
          </div>

          {/* Scroll indicator with proper spacing */}
          <div className="mb-8 md:mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors group"
              aria-label="Scroll down"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors font-medium">Scroll</span>
                <FiArrowDown size={28} className="group-hover:scale-110 transition-transform animate-bounce" />
              </div>
            </button>
          </div>

          {/* Stats badges with proper spacing */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 animate-slide-up px-4" style={{ animationDelay: '1s' }}>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-500/50 rounded-full px-6 md:px-8 py-3 md:py-4 text-blue-600 dark:text-blue-400 font-semibold shadow-md shadow-blue-500/10 dark:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap">
                <span className="text-base">📈</span>
                <span>{stats.trafficGrowthBadge || "0% Growth"}</span>
              </div>
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-teal-200 dark:border-teal-500/50 rounded-full px-6 md:px-8 py-3 md:py-4 text-teal-600 dark:text-teal-400 font-semibold shadow-md shadow-teal-500/10 dark:shadow-teal-500/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap">
                <span className="text-base">👥</span>
                <span>{stats.subscribersBadge || "0 Subscribers"}</span>
              </div>
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-emerald-200 dark:border-emerald-500/50 rounded-full px-6 md:px-8 py-3 md:py-4 text-emerald-600 dark:text-emerald-400 font-semibold shadow-md shadow-emerald-500/10 dark:shadow-emerald-500/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap">
                <span className="text-base">⭐</span>
                <span>{stats.yearsExperienceBadge || "0+ Years Experience"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
