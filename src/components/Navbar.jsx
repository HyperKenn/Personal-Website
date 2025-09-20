import React, { useState } from 'react'
import ResumeButton from './ResumeButton'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg">Kenneth Arianto</a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-brand-500">About</a>
          <a href="#projects" className="hover:text-brand-500">Projects</a>
          <a href="#experience" className="hover:text-brand-500">Experience</a>
          <ResumeButton />
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(s => !s)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="px-6 py-4 flex flex-col gap-2">
            <a href="#about" className="py-2">About</a>
            <a href="#projects" className="py-2">Projects</a>
            <a href="#experience" className="py-2">Experience</a>
            <a href="/resume.pdf" className="py-2">Resume</a>
          </div>
        </div>
      )}
    </header>
  )
}
