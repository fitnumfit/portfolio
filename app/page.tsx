'use client'

import { useState, useEffect } from 'react'
import { defaultConfig } from '@/config/defaultConfig'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { FiArrowUp } from 'react-icons/fi'

// Try to import portfolio config, fallback to default if missing
let portfolioConfig = defaultConfig
try {
  // Use dynamic import for better error handling
  const importedConfig = require('@/config/portfolio')
  if (importedConfig?.portfolioConfig) {
    portfolioConfig = {
      personal: { ...defaultConfig.personal, ...(importedConfig.portfolioConfig.personal || {}) },
      stats: { ...defaultConfig.stats, ...(importedConfig.portfolioConfig.stats || {}) },
      about: { ...defaultConfig.about, ...(importedConfig.portfolioConfig.about || {}) },
      experience: Array.isArray(importedConfig.portfolioConfig.experience) 
        ? importedConfig.portfolioConfig.experience 
        : defaultConfig.experience,
      additionalWork: Array.isArray(importedConfig.portfolioConfig.additionalWork)
        ? importedConfig.portfolioConfig.additionalWork
        : defaultConfig.additionalWork,
      coreStrengths: Array.isArray(importedConfig.portfolioConfig.coreStrengths)
        ? importedConfig.portfolioConfig.coreStrengths
        : defaultConfig.coreStrengths,
      contentFormats: Array.isArray(importedConfig.portfolioConfig.contentFormats)
        ? importedConfig.portfolioConfig.contentFormats
        : defaultConfig.contentFormats,
      workSamples: Array.isArray(importedConfig.portfolioConfig.workSamples)
        ? importedConfig.portfolioConfig.workSamples
        : defaultConfig.workSamples,
    }
  }
} catch (e) {
  // Config file missing or invalid, use defaults
  // Components will handle missing values gracefully with fallbacks
}

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero config={portfolioConfig} />
      <About config={portfolioConfig} />
      <Experience config={portfolioConfig} />
      <Skills config={portfolioConfig} />
      <Projects config={portfolioConfig} />
      <Contact config={portfolioConfig} />
      <Footer config={portfolioConfig} />
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300 z-50 animate-fade-in hover:scale-110"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
