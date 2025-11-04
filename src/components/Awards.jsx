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
  'AWS Educate: Getting Started with Storage',
  'AWS Educate: Getting Started with Compute',
  'AWS Educate: Introduction to Cloud 101'
]

export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Awards & Certifications</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Awards & Achievements</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {awards.map((award, idx) => (
              <div key={idx} className="p-6 border border-gray-800 rounded-lg bg-gray-800/60 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-green-200">{award.title}</h4>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">{award.date}</span>
                </div>
                <p className="text-gray-300">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-4 border rounded-lg bg-gray-800 hover:border-green-400 transition-colors">
                <p className="text-gray-200">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-200">English</span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-200">Sinhala</span>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Interests</h3>
          <p className="text-gray-300">Linux, Cloud Computing, System Administration, Generative AI, Reading (science fiction, technology), Hiking, Camping, Traveling</p>
        </div>
      </div>
    </section>
  )
}
