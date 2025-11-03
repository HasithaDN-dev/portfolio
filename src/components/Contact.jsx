import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 mb-6">Interested in working together? Send me a message and I'll get back to you.</p>
        <a className="inline-block bg-indigo-600 text-white px-5 py-3 rounded" href="mailto:your@email.com">Email me</a>
      </div>
    </section>
  )
}
