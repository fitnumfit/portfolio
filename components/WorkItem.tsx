'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function WorkItem({ work, index }: { work: any, index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-lg shadow-blue-500/5 p-6 md:p-8 card-hover border-2 border-blue-100 group transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors leading-tight">
        {work.title}
      </h4>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light">{work.description}</p>
    </div>
  )
}
