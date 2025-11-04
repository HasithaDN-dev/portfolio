import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">About me</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            I am a third-year undergraduate at the <strong>University of Colombo School of Computing</strong>, majoring in Computer Science. I have hands-on experience building web and mobile applications with React, React Native and Java. I'm comfortable working on Linux/Ubuntu environments and have experience with manual and API testing.
          </p>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            Outside of academics, I enjoy hiking, traveling and exploring new technologies. I'm passionate about full stack development, cloud computing, system administration, and generative AI.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-green-300">Education</h3>
          <div className="space-y-4 sm:space-y-4">
            <div className="border-l-4 border-green-400/60 pl-3 sm:pl-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-100">Bachelor of Science in Computer Science</h4>
              <p className="text-sm sm:text-base text-gray-300">University of Colombo School of Computing</p>
              <p className="text-xs sm:text-sm text-gray-400">June 2023 – Present</p>
            </div>
            <div className="border-l-4 border-gray-700 pl-3 sm:pl-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-100">G.C.E. Advanced Level (2021)</h4>
              <p className="text-sm sm:text-base text-gray-300">Mahinda Rajapaksa College, Homagama</p>
              <p className="text-xs sm:text-sm text-gray-400">Subjects: Chemistry (A), Combined Mathematics (B), Physics (B)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
