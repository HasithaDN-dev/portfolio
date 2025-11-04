import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 mb-6">Interested in collaborating or hiring? Feel free to reach out — I typically respond within a few business days.</p>
        <a className="inline-block bg-indigo-600 text-white px-5 py-3 rounded" href="mailto:hasithadananjaya894@gmail.com">Email me</a>

        <div className="mt-6 text-sm text-gray-600">
          <p>GitHub: <a className="text-indigo-600" href="https://github.com/HasithaDN-dev">HasithaDN-dev</a></p>
          <p>LinkedIn: <a className="text-indigo-600" href="https://www.linkedin.com/in/hasitha-dananjaya-92b873284/">hasitha-dananjaya</a></p>
        </div>
      </div>
    </section>
  )
}
