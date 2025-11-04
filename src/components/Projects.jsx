import React from 'react'

const projects = [
  {
    id: 1,
    title: 'YatharaGo',
    period: 'June 2025 – Present',
    desc: 'Smart transport services system. Built the customer mobile app frontend using React Native and Tailwind CSS; designed the PostgreSQL schema with Prisma and implemented backend APIs with NestJS (TypeScript).',
    tech: 'React Native (Expo), NestJS, PostgreSQL, Prisma, TypeScript',
    link: 'https://github.com/HasithaDN-dev/YathraGo',
  },
  {
    id: 2,
    title: 'Todo',
    period: 'August 2025 – Present',
    desc: 'Full-stack Todo web application with JWT authentication and Spring Boot backend. Features full CRUD, responsive UI and Docker-based deployment.',
    tech: 'React (Vite), Spring Boot 3, JWT, MySQL, Docker, Tailwind CSS',
    link: 'https://github.com/HasithaDN-dev/TodoApp',
  },
  {
    id: 3,
    title: 'AideAura',
    period: 'June 2024 – April 2025',
    desc: 'Domestic helper finding system. Built an admin dashboard with CRUD operations and responsive frontend components following MVC architecture.',
    tech: 'HTML5, CSS3, JavaScript, PHP, MySQL',
    link: 'https://github.com/kaveeshanirmal/AideAura',
  },
  {
    id: 4,
    title: 'Foody',
    period: 'June 2024 – Nov 2024',
    desc: 'Restaurant management system. Implemented receptionist dashboard and RESTful APIs using Express.js with MongoDB integration.',
    tech: 'React.js, Node.js, Express.js, MongoDB',
    link: 'https://github.com/itsNaleeka/RAD-Group-Project',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Project experience</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="p-6 border border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-all bg-gray-900/50 hover:bg-gray-900 hover:border-green-400">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-green-300">{p.title}</h3>
                  <p className="text-sm text-gray-400">{p.period}</p>
                </div>
              </div>
              <p className="text-gray-300 mt-4 leading-relaxed">{p.desc}</p>
              <p className="text-sm text-gray-400 mt-3"><strong className="text-green-200">Tech:</strong> {p.tech}</p>
              <a
                className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-green-300 transition-colors font-medium"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View Repository
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
