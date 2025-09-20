import React, { useState } from 'react'

const ALL = 'All'
const categories = [ALL, 'Hackathon', 'Personal', 'Data Science', 'Math']

const sampleProjects = [
    {
      id: 'MatchMind',
      title: 'MatchMind',
      category: 'Hackathon',
      short: 'Combines Tic-Tac-Toe gameplay with a flashcard-based learning concept',
      tech: ['HTML/CSS','Javascript','FastAPI', 'Python']
    },
    {
        id: 'TypeRacer',
        title: 'TypeRacer Game',
        category: 'Personal',
        short: 'Real-time local typing speed game to challenge and track typing performance.',
        tech: ['HTML/CSS','Javascript','React']
    },
    {
    id: 'Manga List',
    title: 'Manga List',
    category: 'Personal',
    short: 'A Comic List App build with Java that allows user to save, rate, and comment on comics.',
    tech: ['Java', 'JFrame', 'Git']
    },
    {  
    id: 'Pulsar Star Classification',
    title: 'Pulsar Star Classification',
    category: 'Data Science',
    short: 'Classifying pulsar stars using machine learning technique.',
    tech: ['Python', 'pandas', 'altair', 'sklearn']
    },
    {
    id: 'Trapezoid Rule',
    title: 'Trapezoid Rule Numerical Integration',
    category: 'Math',
    short: 'Estimate integrals using the trapezoid rule.',
    tech: ['Python']
    }
]

function Modal({ project, onClose }) {
  if (!project) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="bg-white rounded-xl p-6 z-10 max-w-xl shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{project.tech.join(' • ')}</p>
          </div>
          <button onClick={onClose} aria-label="close">✕</button>
        </div>

        <p className="mt-4 text-gray-700">{project.short}</p>

        <div className="mt-4 flex gap-3">
          <a href="#" className="px-3 py-2 rounded bg-brand-500 text-white">Demo</a>
          <a href="#" className="px-3 py-2 rounded border">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL)
  const [selected, setSelected] = useState(null)

  const filtered = sampleProjects.filter(p => filter === ALL || p.category === filter)

  return (
    <section id="projects" className="mt-12 border-t pt-10 ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="flex gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-full text-sm ${filter === cat ? 'bg-brand-500 text-white' : 'border bg-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {filtered.map(p => (
          <article key={p.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <div>
              <h3 className="font-semibold">{p.title}</h3>
              <div className="text-sm text-gray-500 mt-1">{p.category}</div>
              <p className="mt-2 text-gray-700">{p.short}</p>

              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-gray-500">{p.tech.join(' • ')}</div>
                <div className="flex gap-2">
                  <button onClick={() => setSelected(p)} className="px-3 py-1 rounded text-sm border">Details</button>
                  <a href="#" className="px-3 py-1 rounded text-sm border">Live</a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
