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
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      <footer className="bg-black text-gray-400 text-center py-8 border-t border-gray-800">
        <p className="text-sm">© {new Date().getFullYear()} M.A.H.D. Navarathne. All rights reserved.</p>
        <p className="text-xs mt-2 text-gray-600">Built with React, Vite & Tailwind CSS</p>
      </footer>
    </div>
  )
}
