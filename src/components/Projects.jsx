import React from 'react'

const projects = [
  { id: 1, title: 'Project A', desc: 'A short description of project A.', link: '#' },
  { id: 2, title: 'Project B', desc: 'A short description of project B.', link: '#' },
  { id: 3, title: 'Project C', desc: 'A short description of project C.', link: '#' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
              <a className="mt-4 inline-block text-indigo-600" href={p.link}>See project →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
