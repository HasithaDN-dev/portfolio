import React from 'react'

export default function Hero() {
  return (
    <header className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">M.A.H.D. Navarathne</h1>
        <p className="text-xl text-gray-700 mb-4">Full‑Stack Developer · DevOps enthusiast</p>
        <p className="text-lg text-gray-600 mb-6">I build modern, responsive web and mobile applications using React, React Native and Java — with a focus on clean design, performance and developer experience.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="#projects" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700">View projects</a>
          <a href="#contact" className="inline-block text-indigo-600 border border-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50">Get in touch</a>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <span className="mr-3">GitHub: <a className="text-indigo-600" href="https://github.com/HasithaDN-dev">HasithaDN-dev</a></span>
          <span className="mr-3">•</span>
          <span>LinkedIn: <a className="text-indigo-600" href="https://www.linkedin.com/in/hasitha-dananjaya-92b873284/">hasitha-dananjaya</a></span>
        </div>
      </div>
    </header>
  )
}
