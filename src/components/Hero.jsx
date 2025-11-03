import React from 'react'

export default function Hero() {
  return (
    <header className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Hi, I'm Your Name</h1>
        <p className="text-lg text-gray-700 mb-6">I build fast, accessible, and beautiful web experiences using React and modern tooling.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="#projects" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700">View projects</a>
          <a href="#contact" className="inline-block text-indigo-600 border border-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50">Get in touch</a>
        </div>
      </div>
    </header>
  )
}
