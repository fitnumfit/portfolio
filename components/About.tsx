'use client'

import { FiActivity, FiTrendingUp, FiAward } from 'react-icons/fi'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About({ config }: { config: any }) {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={sectionRef}
            className={`transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 leading-tight">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 mx-auto mb-10 md:mb-12"></div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8 font-light">
                {config.about.description}
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-blue-500 p-6 md:p-8 rounded-r-lg my-6 md:my-8 shadow-md shadow-blue-500/5 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10">
                <p className="text-blue-700 text-xl md:text-2xl italic font-medium leading-relaxed">
                  "{config.about.approach}"
                </p>
              </div>
            </div>
          </div>

          {/* Stats with scroll animation */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20 transition-all duration-1000 delay-200 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl card-hover border-2 border-blue-100 shadow-lg shadow-blue-500/5 group transform transition-all duration-500 hover:scale-105">
              <div className="flex justify-center mb-4">
                <FiTrendingUp className="w-10 h-10 md:w-12 md:h-12 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2 md:mb-3">52%</div>
              <div className="text-gray-600 font-semibold text-sm md:text-base">Organic Traffic Growth</div>
            </div>
            <div className="text-center p-6 md:p-8 bg-gradient-to-br from-teal-50 to-white rounded-2xl card-hover border-2 border-teal-100 shadow-lg shadow-teal-500/5 group transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: '100ms' }}>
              <div className="flex justify-center mb-4">
                <FiActivity className="w-10 h-10 md:w-12 md:h-12 text-teal-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2 md:mb-3">100K</div>
              <div className="text-gray-600 font-semibold text-sm md:text-base">Subscribers Scaled</div>
            </div>
            <div className="text-center p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl card-hover border-2 border-emerald-100 shadow-lg shadow-emerald-500/5 group transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: '200ms' }}>
              <div className="flex justify-center mb-4">
                <FiAward className="w-10 h-10 md:w-12 md:h-12 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2 md:mb-3">5+</div>
              <div className="text-gray-600 font-semibold text-sm md:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
