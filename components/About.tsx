'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About({ config }: { config: any }) {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 })

  const about = config?.about || {}
  const stats = config?.stats || {}

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={sectionRef}
            className={`transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 leading-tight">
              <span className="gradient-text">About Me</span>
              <span className="ml-3 text-3xl md:text-4xl lg:text-5xl">👋</span>
            </h2>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 mx-auto mb-8 md:mb-10"></div>
            
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8 font-light transition-colors duration-300">
                {about.description || "Add your description here."}
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 border-l-4 border-blue-500 p-6 md:p-8 rounded-r-lg shadow-md shadow-blue-500/5 dark:shadow-blue-500/20 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/30">
                <p className="text-blue-700 dark:text-blue-300 text-xl md:text-2xl italic font-medium leading-relaxed transition-colors duration-300">
                  "{about.approach || "Add your approach here."}"
                </p>
              </div>
            </div>
          </div>

          {/* Stats with scroll animation */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20 transition-all duration-1000 delay-200 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl card-hover border-2 border-blue-100 dark:border-blue-500/30 shadow-lg shadow-blue-500/5 dark:shadow-blue-500/20 group transform transition-all duration-500 hover:scale-105">
              <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
                <span className="text-4xl md:text-5xl font-black gradient-text">{stats.trafficGrowth || "0%"}</span>
                <span className="text-2xl md:text-3xl">📈</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold text-sm md:text-base transition-colors duration-300">{stats.trafficGrowthLabel || "Growth"}</div>
            </div>
            <div className="text-center p-6 md:p-8 bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl card-hover border-2 border-teal-100 dark:border-teal-500/30 shadow-lg shadow-teal-500/5 dark:shadow-teal-500/20 group transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
                <span className="text-4xl md:text-5xl font-black gradient-text">{stats.subscribers || "0"}</span>
                <span className="text-2xl md:text-3xl">👥</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold text-sm md:text-base transition-colors duration-300">{stats.subscribersLabel || "Subscribers"}</div>
            </div>
            <div className="text-center p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl card-hover border-2 border-emerald-100 dark:border-emerald-500/30 shadow-lg shadow-emerald-500/5 dark:shadow-emerald-500/20 group transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
                <span className="text-4xl md:text-5xl font-black gradient-text">{stats.yearsExperience || "0+"}</span>
                <span className="text-2xl md:text-3xl">⭐</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold text-sm md:text-base transition-colors duration-300">{stats.yearsExperienceLabel || "Years Experience"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
