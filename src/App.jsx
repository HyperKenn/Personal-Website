import React from "react";
import Navbar from "./components/Navbar";
import Here from "./components/Here";
import About from "./data/About";
import Projects from "./data/Projects";
import Experience from "./data/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden antialiased text-gray-900">
      {/* Strong White Base (multi-stop) */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#fff7ed_35%,#fff1f2_65%,#f1f5f9_100%)]" />

      {/* Subtle Blue Glow */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.18),transparent_50%),radial-gradient(circle_at_75%_35%,rgba(96,165,250,0.15),transparent_50%)] blur-3xl opacity-70" />

      <Navbar />

      <main className="w-full px-6 pt-24 pb-20 md:px-16">
        <Here />
        <About />
        <Projects />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}