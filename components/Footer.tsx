'use client'

export default function Footer({ config }: { config: any }) {
  const currentYear = new Date().getFullYear()
  const personal = config?.personal || {}
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base transition-colors duration-300">
              Copyright © {currentYear} <span className="font-semibold text-blue-600 dark:text-blue-400">{personal.name || "Portfolio Owner"}</span>
              <span className="ml-2 text-base">🎨</span>
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-2 transition-colors duration-300">
              {personal.title || "Professional"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
