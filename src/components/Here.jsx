import React from 'react'
import ContactMenu from './ContactMenu';

export default function Here() {
  return (
    <section id="home" className="pt-6 pb-12">
      <div className="grid gap-6 md:grid-cols-3 items-center">
        <div className="md:col-span-2">
          <p className="text-sm text-brand-500 font-medium">Hi, I'm</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Kenneth Arianto</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl leading-relaxed">
          Third-year Computer Science student at the University of British Columbia, constantly learning and practicing through personal and academic projects.
        I am passionate about software development, artificial intelligence, machine learning, and backend engineering.
          </p>
            {/* Buttons */}
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="inline-block px-4 py-2 rounded-md bg-brand-550 text-white font-medium hover:bg-brand-550">Projects</a>
            {/* Contact dropdown menu */}
            <ContactMenu />
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <div>Currently:</div>
            <ul className="list-disc list-inside mt-2">
              <li>BSc. Combined Major in Computer Science and Statistics Student @UBC</li>
              <li>UBC Competitive Programming Club Member @UBC</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
            {/* Replace with a real image: put one in public/profile.jpg and update src */}
            <img src="/images/profile.jpeg" alt="Kenneth Picture" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
