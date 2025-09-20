import React from 'react'

const roles = [
  { company: 'DBB Course (Nationwide Math Tutoring Program)', title: 'Private Math Tutor', date: 'May 2024 - Aug 2024' },
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
                <div className="font-semibold">{r.company}</div>
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
