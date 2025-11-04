import React from 'react'

const projects = [
  {
    id: 1,
    title: 'YatharaGo',
    period: 'June 2025 – Present',
    desc: 'Smart transport services system. Built the customer mobile app frontend using React Native and Tailwind CSS; designed the PostgreSQL schema with Prisma and implemented backend APIs with NestJS (TypeScript).',
    tech: 'React Native (Expo), NestJS, PostgreSQL, Prisma, TypeScript',
    link: '#',
  },
  {
    id: 2,
    title: 'Todo',
    period: 'August 2025 – Present',
    desc: 'Full-stack Todo web application with JWT authentication and Spring Boot backend. Features full CRUD, responsive UI and Docker-based deployment.',
    tech: 'React (Vite), Spring Boot 3, JWT, MySQL, Docker, Tailwind CSS',
    link: '#',
  },
  {
    id: 3,
    title: 'AideAura',
    period: 'June 2024 – April 2025',
    desc: 'Domestic helper finding system. Built an admin dashboard with CRUD operations and responsive frontend components following MVC architecture.',
    tech: 'HTML5, CSS3, JavaScript, PHP, MySQL',
    link: '#',
  },
  {
    id: 4,
    title: 'Foody',
    period: 'June 2024 – Nov 2024',
    desc: 'Restaurant management system. Implemented receptionist dashboard and RESTful APIs using Express.js with MongoDB integration.',
    tech: 'React.js, Node.js, Express.js, MongoDB',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Project experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.period}</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">{p.desc}</p>
              <p className="text-sm text-gray-500 mt-3"><strong>Tech:</strong> {p.tech}</p>
              <a className="mt-4 inline-block text-indigo-600" href={p.link}>See project →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
