'use client'

import { FiMail, FiLinkedin, FiHeart } from 'react-icons/fi'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Contact({ config }: { config: any }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-blue-500 via-teal-500 to-emerald-500 text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-5 md:mb-6">
            <FiHeart className="w-12 h-12 md:w-16 md:h-16 text-white animate-heartbeat" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Let's Work Together
          </h2>
          <div className="h-1 w-24 md:w-32 bg-white mx-auto mb-8 md:mb-10"></div>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 text-blue-50 leading-relaxed font-light">
            Ready to grow your healthcare content? Let's discuss how I can help
            improve your SEO, engage your audience, and drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            {config.personal.email && (
              <a
                href={`mailto:${config.personal.email}`}
                className="group flex items-center justify-center gap-3 bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold md:font-bold text-base md:text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl shadow-blue-900/30 hover:shadow-2xl hover:shadow-blue-900/40 transform hover:-translate-y-1 hover:scale-105"
              >
                <FiMail size={20} />
                Email Me
              </a>
            )}
            {config.personal.linkedin && (
              <a
                href={config.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border-2 border-white text-white px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold md:font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm shadow-lg transform hover:-translate-y-1 hover:scale-105"
              >
                <FiLinkedin size={20} />
                LinkedIn
              </a>
            )}
          </div>

          {!config.personal.email && !config.personal.linkedin && (
            <div className="mt-8 md:mt-10 p-6 md:p-8 bg-white/10 rounded-lg backdrop-blur-sm border-2 border-white/20 shadow-lg">
              <p className="text-blue-50 text-base md:text-lg leading-relaxed">
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
