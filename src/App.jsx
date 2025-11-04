import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-sans text-gray-100 bg-gray-900 min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-green-400 focus:text-gray-900 focus:rounded focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      <footer className="bg-black text-gray-400 text-center py-6 sm:py-8 border-t border-gray-800 px-4">
        <p className="text-xs sm:text-sm">© {new Date().getFullYear()} M.A.H.D. Navarathne. All rights reserved.</p>
        <p className="text-xs mt-2 text-gray-600">Built with React, Vite & Tailwind CSS</p>
      </footer>
    </div>
  )
}
