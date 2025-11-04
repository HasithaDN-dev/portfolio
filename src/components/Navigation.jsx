import React, { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold text-gray-100">M.A.H.D. Navarathne</a>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-gray-200 hover:text-green-300 transition-colors">About</a>
            <a href="#skills" className="text-gray-200 hover:text-green-300 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-200 hover:text-green-300 transition-colors">Projects</a>
            <a href="#awards" className="text-gray-200 hover:text-green-300 transition-colors">Awards</a>
            <a href="#contact" className="text-gray-200 hover:text-green-300 transition-colors">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 bg-gray-900/80 p-4 rounded">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-green-300 transition-colors">About</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-green-300 transition-colors">Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-green-300 transition-colors">Projects</a>
            <a href="#awards" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-green-300 transition-colors">Awards</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-green-300 transition-colors">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
