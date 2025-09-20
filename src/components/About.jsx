import React from 'react'

export default function About() {
  return (
    <section id="about" className="mt-12 border-t pt-20 -mt-20">
      <h2 className="text-2xl font-bold">About</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
      I’m a Computer Science student at UBC, passionate about software development, full-stack projects, and backend engineering.
      I also enjoy exploring data analysis, machine learning, backend development, and exploring and understanding new programming technologies.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Interests</div>
          <div className="mt-1 text-gray-700">Data Structures and Algorithms, Mathematics, Statistics, Web Development, Teaching</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Fun</div>
          <div className="mt-1 text-gray-700">Playing games (Mobile and PC Games), Cooking, Reading Comic, Sleeping</div>
        </div>
      </div>
    </section>
  )
}
