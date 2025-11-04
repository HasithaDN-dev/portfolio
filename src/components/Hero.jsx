import React from 'react'

export default function Hero() {
  // Get greeting based on current time
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 18) return 'Good Afternoon'
    return 'Good Evening'
  }

  return (
  <header id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800 text-gray-100 pt-20">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-green-400/10 text-green-300 border border-green-400/30 rounded-full text-sm font-medium mb-4">
            Available for opportunities
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-100 mb-4 leading-tight">
          Hello, I'm Hasitha
        </h1>
        <p className="text-2xl sm:text-3xl text-green-300 mb-4 font-medium animate-pulse">
          {getGreeting()} 👋
        </p>
        <p className="text-xl sm:text-2xl text-blue-300 mb-4 font-medium">Full‑Stack Developer · DevOps enthusiast</p>
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          I build modern, responsive web and mobile applications using React, React Native and Java — with a focus on clean design, performance and developer experience.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#projects" className="btn-accent inline-block text-white px-8 py-3 rounded-lg shadow-lg transition-all hover:scale-105">
            View projects
          </a>
          <a href="#contact" className="inline-block text-indigo-200 border-2 border-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-800 transition-all">
            Get in touch
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
          <a href="https://github.com/HasithaDN-dev" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/hasitha-dananjaya-92b873284/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:hasithadananjaya894@gmail.com" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Email
          </a>
        </div>
      </div>
    </header>
  )
}
