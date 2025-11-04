import React from 'react'

const skillCategories = [
  {
    title: 'Programming',
    skills: ['JavaScript', 'Java', 'C', 'PHP', 'SQL', 'HTML5', 'CSS', 'Scala']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'React Native', 'Node.js', 'NestJS', 'Spring Boot', 'Express.js', 'Tailwind CSS']
  },
  {
    title: 'Databases & ORMs',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3)', 'Git', 'GitHub', 'Linux/Ubuntu', 'GitHub Actions', 'Docker', 'Docker Compose']
  },
  {
    title: 'Tools & Concepts',
    skills: ['Postman', 'Jupyter Notebook', 'Figma', 'Browser DevTools', 'Jira', 'REST APIs', 'OOP', 'Agile & Scrum', 'Test Case Design', 'API/UI testing']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-green-300 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-700 text-green-200 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
