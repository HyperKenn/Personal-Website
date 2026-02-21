import React from 'react'

const roles = [
  {
    company: 'University of British Columbia',
    title: 'Teaching Assistant — CPSC 221: Basic Algorithms and Data Structures',
    date: 'Dec 2025 - Present',
    current: true,
  },
  {
    company: 'DBB Course (Nationwide Math Tutoring Program)',
    title: 'Private Math Tutor',
    date: 'May 2024 - Aug 2024',
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mt-12 border-t pt-10">
      <h2 className="text-2xl font-bold">Experience</h2>

      <div className="mt-6 space-y-4">
        {roles.map((r, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 font-semibold">
                  {r.company}
                  {r.current && (
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-500">{r.title}</div>
              </div>
              <div className="text-sm text-gray-500">{r.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}