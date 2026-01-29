'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Contact({ config }: { config: any }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const personal = config?.personal || {}
  const email = personal.email || ""
  const linkedin = personal.linkedin || ""

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      <div className="container-custom relative z-10">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-5 md:mb-6">
            <span className="text-4xl md:text-5xl lg:text-6xl animate-heartbeat">💬</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <span className="gradient-text">Let's Work Together</span>
            <span className="ml-3 text-3xl md:text-4xl lg:text-5xl">🤝</span>
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 mx-auto mb-8 md:mb-10"></div>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 text-gray-700 dark:text-gray-300 leading-relaxed font-light transition-colors duration-300">
            Ready to grow your healthcare content? Let's discuss how I can help
            improve your SEO, engage your audience, and drive results.
            <span className="inline-block ml-2">📈✨</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            {email && (
              <a
                href={`mailto:${email}`}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold md:font-bold text-base md:text-lg hover:from-blue-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="text-lg md:text-xl">📧</span>
                <span>Email Me</span>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold md:font-bold text-base md:text-lg hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="text-lg md:text-xl">💼</span>
                <span>LinkedIn</span>
              </a>
            )}
          </div>

          {!email && !linkedin && (
            <div className="mt-8 md:mt-10 p-6 md:p-8 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-lg">
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                Please add your contact information in the config file to enable
                contact links.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
