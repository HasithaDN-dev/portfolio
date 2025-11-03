import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="text-center py-8 text-sm text-gray-500">© {new Date().getFullYear()} Your Name</footer>
    </div>
  )
}
