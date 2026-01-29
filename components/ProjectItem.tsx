'use client'

import { FiExternalLink, FiFileText } from 'react-icons/fi'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ProjectItem({ sample, index }: { sample: any, index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg shadow-blue-500/5 dark:shadow-blue-500/20 p-6 md:p-8 card-hover border-2 border-blue-100 dark:border-blue-500/30 group transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center gap-3 mb-5 md:mb-6">
        <FiFileText className="w-6 h-6 md:w-8 md:h-8 text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
          {sample.title}
        </h3>
      </div>
      <div className="space-y-3 md:space-y-4">
        {sample.links.map((link: any, linkIndex: number) => (
          <a
            key={linkIndex}
            href={link.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-4 md:p-5 rounded-lg border-2 transition-all duration-300 group ${
              link.url
                ? 'border-blue-200 dark:border-blue-500/50 hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-blue-700 dark:text-blue-300 hover:shadow-md hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transform hover:scale-105'
                : 'border-gray-200 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'
            }`}
          >
            <span className="font-semibold text-base md:text-lg leading-relaxed">{link.label}</span>
            {link.url && (
              <FiExternalLink className="text-blue-500 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
            )}
          </a>
        ))}
      </div>
    </div>
  )
}
