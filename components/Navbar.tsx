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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      // Close menu if clicking outside the nav or on the overlay background
      if (isMobileMenuOpen) {
        const nav = target.closest('nav')
        const overlay = target.closest('.mobile-menu-overlay')
        if (!nav || (overlay && !target.closest('.mobile-menu-content'))) {
          setIsMobileMenuOpen(false)
        }
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md shadow-blue-500/5 dark:shadow-blue-500/20' 
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

          {/* Mobile Theme Toggle - Left Side */}
          <div className="md:hidden absolute left-4 sm:left-6">
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
          </div>

          {/* Mobile Menu Button - Right Side */}
          <div className="md:hidden absolute right-4 sm:right-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer - Right to Left */}
      <div
        className={`mobile-menu-overlay md:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 max-w-[85vw] z-50 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        {/* Gradient Border Wrapper */}
        <div className="relative h-full w-full">
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-teal-500 to-emerald-500 p-[2px] shadow-2xl shadow-blue-500/30">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md h-full flex flex-col">
              {/* Navigation Content */}
              <div className="mobile-menu-content flex-1 overflow-y-auto">
                <div className="flex flex-col space-y-2 p-6 pt-8">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 text-base font-medium"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('experience')}
                    className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 text-base font-medium"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 text-base font-medium"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 text-base font-medium"
                  >
                    Work Samples
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-left bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-400 hover:to-teal-400 transition-all duration-300 mt-2 active:scale-95 shadow-md shadow-blue-500/20 text-base font-semibold"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
