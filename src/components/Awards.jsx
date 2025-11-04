import React from 'react'

const awards = [
  {
    title: 'CodeFest 2024 — Finalist',
    description: 'Selected among top 180 teams nationwide',
    date: 'November 2024'
  },
  {
    title: "Director's List Award",
    description: 'Recognized for outstanding academic performance (Second Year, First Semester; GPA: 3.74)',
    date: '2024'
  }
]

const certifications = [
  {
    title: 'AWS Educate: Getting Started with Compute',
    url: 'https://www.credly.com/badges/ae0dabd4-6fe2-4f80-9538-450bc78763af/public_url'
  },
  {
    title: 'AWS Educate: Getting Started with Storage',
    url: 'https://www.credly.com/badges/294a598b-cea0-44b7-af96-010dcd5fb864/public_url'
  },
  {
    title: 'AWS Educate: Introduction to Cloud 101',
    url: 'https://www.credly.com/badges/a3c844e9-70e2-4002-9dc6-9a2c0286075a/linked_in_profile'
  }
]

export default function Awards() {
  return (
    <section id="awards" className="py-12 sm:py-16 md:py-20 bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Awards & Certifications</h2>

        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Awards & Achievements</h3>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {awards.map((award, idx) => (
              <div key={idx} className="p-4 sm:p-6 border border-gray-800 rounded-lg bg-gray-800/60 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1 sm:gap-0">
                  <h4 className="text-base sm:text-lg font-semibold text-green-200">{award.title}</h4>
                  <span className="text-xs sm:text-sm text-gray-400 sm:whitespace-nowrap sm:ml-4">{award.date}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-300">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Certifications</h3>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-3 sm:p-4 border rounded-lg bg-gray-800 hover:border-green-400 transition-all group">
                <p className="text-sm sm:text-base text-gray-200 mb-2">{cert.title}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-blue-400 hover:text-green-300 transition-colors font-medium"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verify Certificate
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Languages</h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <span className="px-3 sm:px-4 py-2 bg-gray-800 rounded-lg text-sm sm:text-base text-gray-200">English</span>
            <span className="px-3 sm:px-4 py-2 bg-gray-800 rounded-lg text-sm sm:text-base text-gray-200">Sinhala</span>
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Interests</h3>
          <p className="text-sm sm:text-base text-gray-300">Linux, Cloud Computing, System Administration, Generative AI, Reading (science fiction, technology), Hiking, Camping, Traveling</p>
        </div>
      </div>
    </section>
  )
}
