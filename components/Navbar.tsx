'use client'

import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '@/contexts/ThemeContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-blue-100 dark:border-blue-500/30 shadow-md shadow-blue-500/5 dark:shadow-blue-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-center h-20 px-4 sm:px-6 lg:px-8">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                {/* Sun Icon (Light Mode) */}
                <FiSun 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    theme === 'light' 
                      ? 'rotate-0 scale-100 opacity-100' 
                      : 'rotate-90 scale-0 opacity-0'
                  }`}
                />
                {/* Moon Icon (Dark Mode) */}
                <FiMoon 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'rotate-0 scale-100 opacity-100' 
                      : '-rotate-90 scale-0 opacity-0'
                  }`}
                />
              </div>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group py-2"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group py-2"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group py-2"
            >
              Work Samples
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-5 py-2 rounded-lg hover:from-blue-400 hover:to-teal-400 transition-all duration-300 shadow-md shadow-blue-500/20 font-semibold ml-2"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4 sm:right-6 flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                {/* Sun Icon (Light Mode) */}
                <FiSun 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    theme === 'light' 
                      ? 'rotate-0 scale-100 opacity-100' 
                      : 'rotate-90 scale-0 opacity-0'
                  }`}
                />
                {/* Moon Icon (Dark Mode) */}
                <FiMoon 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'rotate-0 scale-100 opacity-100' 
                      : '-rotate-90 scale-0 opacity-0'
                  }`}
                />
              </div>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-blue-100 dark:border-blue-500/30">
            <div className="flex flex-col space-y-2 p-4">
              {/* Theme Toggle in Mobile Menu */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div className="relative w-5 h-5">
                  <FiSun 
                    size={20} 
                    className={`absolute inset-0 transition-all duration-300 ${
                      theme === 'light' 
                        ? 'rotate-0 scale-100 opacity-100' 
                        : 'rotate-90 scale-0 opacity-0'
                    }`}
                  />
                  <FiMoon 
                    size={20} 
                    className={`absolute inset-0 transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'rotate-0 scale-100 opacity-100' 
                        : '-rotate-90 scale-0 opacity-0'
                    }`}
                  />
                </div>
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Work Samples
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-400 hover:to-teal-400 transition-all duration-300 mt-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
