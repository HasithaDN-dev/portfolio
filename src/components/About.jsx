import React from 'react'

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-700">I am a third-year undergraduate at the University of Colombo School of Computing, majoring in Computer Science. I have hands-on experience building web and mobile applications with React, React Native and Java. I'm comfortable working on Linux/Ubuntu environments and have experience with manual and API testing.</p>

        <h3 className="text-xl font-semibold mt-6">Education</h3>
        <p className="text-gray-700 mt-2">BSc. in Computer Science — University of Colombo School of Computing (June 2023 – Present)</p>

        <h3 className="text-xl font-semibold mt-6">Contact & Links</h3>
        <ul className="text-gray-700 mt-2 space-y-1">
          <li>Email: <a className="text-indigo-600" href="mailto:hasithadananjaya894@gmail.com">hasithadananjaya894@gmail.com</a></li>
          <li>GitHub: <a className="text-indigo-600" href="https://github.com/HasithaDN-dev">HasithaDN-dev</a></li>
          <li>LinkedIn: <a className="text-indigo-600" href="https://www.linkedin.com/in/hasitha-dananjaya-92b873284/">hasitha-dananjaya</a></li>
        </ul>
      </div>
    </section>
  )
}
