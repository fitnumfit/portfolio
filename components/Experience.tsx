'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import ExperienceItem from './ExperienceItem'
import WorkItem from './WorkItem'

export default function Experience({ config }: { config: any }) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: workHeaderRef, isVisible: workHeaderVisible } = useScrollAnimation({ threshold: 0.2 })

  const experience = config?.experience || []
  const additionalWork = config?.additionalWork || []

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      <div className="container-custom relative z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerRef}
            className={`transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 leading-tight">
              <span className="gradient-text">Work Experience & Impact</span>
              <span className="ml-3 text-3xl md:text-4xl lg:text-5xl">💼</span>
            </h2>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 mx-auto mb-12 md:mb-16"></div>
          </div>

          {experience.length > 0 && (
            <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">
              {experience.map((exp: any, index: number) => (
                <ExperienceItem key={index} exp={exp} index={index} config={config} />
              ))}
            </div>
          )}

          {/* Additional Work Section */}
          {additionalWork.length > 0 && (
            <div className="mt-16 md:mt-24">
              <div 
                ref={workHeaderRef}
                className={`transition-all duration-1000 ${workHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-gray-900 dark:text-gray-100 leading-tight transition-colors duration-300">
                  Additional Work
                  <span className="ml-2 text-2xl md:text-3xl">📚</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                {additionalWork.map((work: any, index: number) => (
                  <WorkItem key={index} work={work} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
