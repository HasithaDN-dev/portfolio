import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About me</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I am a third-year undergraduate at the <strong>University of Colombo School of Computing</strong>, majoring in Computer Science. I have hands-on experience building web and mobile applications with React, React Native and Java. I'm comfortable working on Linux/Ubuntu environments and have experience with manual and API testing.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Outside of academics, I enjoy hiking, traveling and exploring new technologies. I'm passionate about cloud computing, system administration, and generative AI.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-600 pl-4">
              <h4 className="text-lg font-semibold text-gray-900">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-600">University of Colombo School of Computing</p>
              <p className="text-sm text-gray-500">June 2023 – Present</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="text-lg font-semibold text-gray-900">G.C.E. Advanced Level (2021)</h4>
              <p className="text-gray-600">Mahinda Rajapaksa College, Homagama</p>
              <p className="text-sm text-gray-500">Subjects: Chemistry (A), Combined Mathematics (B), Physics (B)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
