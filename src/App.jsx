import React from 'react'
import Navbar from './components/Navbar'
import Here from './components/Here'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        <Here />
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}
