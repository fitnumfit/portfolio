'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Skills({ config }: { config: any }) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: strengthsRef, isVisible: strengthsVisible } = useScrollAnimation({ threshold: 0.15 })
  const { ref: formatsRef, isVisible: formatsVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <section id="skills" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerRef}
            className={`transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 leading-tight">
              <span className="gradient-text">Core Strengths</span>
            </h2>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 mx-auto mb-12 md:mb-16"></div>
          </div>

          <div 
            ref={strengthsRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-16 md:mb-20 transition-all duration-1000 ${
              strengthsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {config.coreStrengths.map((skill: string, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-5 md:p-6 rounded-xl border-2 border-blue-100 card-hover text-center group hover:border-blue-300 transition-all duration-500 shadow-md shadow-blue-500/5 hover:shadow-lg hover:shadow-blue-500/10 transform hover:scale-105"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <p className="text-gray-800 font-semibold text-base md:text-lg group-hover:text-blue-600 transition-colors leading-relaxed">{skill}</p>
              </div>
            ))}
          </div>

          <div 
            ref={formatsRef}
            className={`transition-all duration-1000 ${formatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-gray-900 leading-tight">
              Content Formats I Work On
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
              {config.contentFormats.map((format: string, index: number) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-white p-4 md:p-5 rounded-lg text-center border-2 border-blue-100 card-hover group hover:border-blue-300 hover:bg-blue-50 transition-all duration-500 shadow-sm transform hover:scale-105"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <p className="text-gray-700 text-xs md:text-sm font-medium group-hover:text-blue-600 transition-colors">{format}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
