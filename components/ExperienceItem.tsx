'use client'

import { FiCheckCircle, FiTrendingUp, FiHeart } from 'react-icons/fi'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ExperienceItem({ exp, index, config }: { exp: any, index: number, config: any }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  const stats = config?.stats || {}
  const company = exp?.company || ""
  const role = exp?.role || ""
  const description = exp?.description || ""

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg shadow-blue-500/5 dark:shadow-blue-500/20 p-6 md:p-8 lg:p-10 card-hover border-2 border-blue-100 dark:border-blue-500/30 group transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight transition-colors duration-300">
            {company}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg md:text-xl transition-colors duration-300">
            {role}
          </p>
        </div>
        {index === 0 && (
          <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border-2 border-emerald-200 dark:border-emerald-500/50 shadow-md animate-pulse-medical transition-colors duration-300">
            <FiTrendingUp /> {stats.trafficGrowthBadge || "0% Growth"}
          </div>
        )}
      </div>

      {description && (
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed font-light transition-colors duration-300">{description}</p>
      )}

      {exp.keyImprovements && (
        <div className="mb-6 md:mb-8">
          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4 flex items-center gap-2 text-base md:text-lg transition-colors duration-300">
            <FiCheckCircle className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
            Key Improvements:
          </h4>
          <ul className="space-y-2 md:space-y-3">
            {exp.keyImprovements.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <span className="text-blue-500 dark:text-blue-400 mt-1 text-lg md:text-xl flex-shrink-0">▸</span>
                <span className="text-base md:text-lg leading-relaxed font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {exp.focusAreas && (
        <div className="mb-6 md:mb-8">
          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4 flex items-center gap-2 text-base md:text-lg transition-colors duration-300">
            <FiCheckCircle className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
            Focus Areas:
          </h4>
          <ul className="space-y-2 md:space-y-3">
            {exp.focusAreas.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <span className="text-blue-500 dark:text-blue-400 mt-1 text-lg md:text-xl flex-shrink-0">▸</span>
                <span className="text-base md:text-lg leading-relaxed font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {exp.responsibilities && (
        <div className="mb-6 md:mb-8">
          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4 flex items-center gap-2 text-base md:text-lg transition-colors duration-300">
            <FiCheckCircle className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
            Responsibilities:
          </h4>
          <ul className="space-y-2 md:space-y-3">
            {exp.responsibilities.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <span className="text-blue-500 dark:text-blue-400 mt-1 text-lg md:text-xl flex-shrink-0">▸</span>
                <span className="text-base md:text-lg leading-relaxed font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {exp.approach && (
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-5 md:p-6 rounded-r-lg mb-6 md:mb-8 transition-all duration-300 hover:shadow-md">
          <p className="text-blue-700 dark:text-blue-300 italic text-base md:text-lg leading-relaxed font-light transition-colors duration-300">{exp.approach}</p>
        </div>
      )}

      {((exp?.results && exp.results.length > 0) || (exp?.impact && exp.impact.length > 0)) && (
        <div className="bg-emerald-50 dark:bg-emerald-900/30 border-l-4 border-emerald-500 p-5 md:p-6 rounded-r-lg transition-all duration-300 hover:shadow-md">
          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2 md:mb-3 text-base md:text-lg flex items-center gap-2 transition-colors duration-300">
            <FiHeart className="text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
            Results:
          </h4>
          <ul className="space-y-2">
            {(exp.results || exp.impact || []).map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <span className="text-emerald-500 dark:text-emerald-400 mt-1 text-lg md:text-xl flex-shrink-0">✓</span>
                <span className="text-base md:text-lg leading-relaxed font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
