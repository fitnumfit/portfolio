'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import ProjectItem from './ProjectItem'

export default function Projects({ config }: { config: any }) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-blue-50 to-teal-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerRef}
            className={`transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 leading-tight">
              <span className="gradient-text">Work Samples</span>
            </h2>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 mx-auto mb-12 md:mb-16"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {config.workSamples.map((sample: any, index: number) => (
              <ProjectItem key={index} sample={sample} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
