import React, { useState } from "react"

const ALL = "All"
const categories = [ALL, "Hackathon", "Personal", "Data Science", "Math"]

const sampleProjects = [
  {
    id: "InsightUBC",
    title: "InsightUBC",
    category: "Personal",
    short:
      "A web application that allows user to add, delete, and query datasets containing valid UBC courses information",
    details: [
      "A web app that allows user to add and delete datasets containing valid UBC courses information. Built using React Typescript on the frontend and Typescript on the backend, with Express for the server. Additionally, implemented backend unit testing with Mocha + Chai testing, as well as Selenium E2E testing.",
    ],
    tech: [
      "Javascript",
      "TypeScript",
      "Node.js",
      "Express",
      "RESTAPI",
      "Mocha/Chai",
      "Selenium",
      "Git",
      "Github",
      "HTML",
      "TailwindCSS",
      "Vite",
    ],
    demo: null,
    github: null,
  },
  {
    id: "WasteNot",
    title: "WasteNot",
    category: "Personal",
    short: "A web application for food waste management",
    details: [
      "A web application for food waste management that tracks surplus ingredients, suggests recipes based on available food, and connects users with local donation options for unused items. Built using JavaScript on the frontend that allows user to access and modify data on the Oracle database.",
    ],
    tech: ["HTML/CSS", "Oracle", "SQL", "JavaScript", "Git", "GitHub"],
    demo: null,
    github: "https://github.com/HyperKenn/WasteNot",
  },
  {
    id: "BrainTacToe",
    title: "BrainTacToe",
    category: "Hackathon",
    short: "Combines Tic-Tac-Toe gameplay with a flashcard-based learning concept",
    details: [
      "A Python-based web app to improve learning quality through a combination of flashcard learning system with tic tac toe game. Each correct answer grants a turn to play the tic tac toe.",
    ],
    tech: ["HTML/CSS", "Javascript", "FastAPI", "Python"],
    demo: null,
    github: "https://github.com/HyperKenn/HackCamp2024",
  },
  {
    id: "TypeRacer",
    title: "TypeRacer Game",
    category: "Personal",
    short:
      "Real-time local typing speed game to challenge and track typing performance.",
    details: [
      "Implemented progress tracking and WPM (Words Per Minute) tracking system, displaying users’ typing speed and current typing position in the TypeRacer game.",
      "Tracked cursor position and character correctness to visually highlight correct and incorrect inputs.",
      "Managed game state using React hooks to handle timing, completion detection, and performance calculation.",
    ],
    tech: ["HTML/CSS", "Javascript", "React"],
    demo: null,
    github: "https://github.com/HyperKenn/TypeRacerApp",
  },
  {
    id: "Manga List",
    title: "Manga List",
    category: "Personal",
    short:
      "A Comic List App build with Java that allows user to save, rate, and comment on comics.",
    details: [
      "Developed a Java desktop application using JFrame that allows users to add, rate, and comment on manga titles.",
      "Implemented CRUD functionality with persistent data storage, enabling users to manage their personal manga collection.",
      "Designed a clean UI layout and handled event-driven interactions using Java Swing components.",
    ],
    tech: ["Java", "JFrame", "Git"],
    demo: null,
    github: "https://github.com/HyperKenn/Manga_List",
  },
  {
    id: "Pulsar Star Classification",
    title: "Pulsar Star Classification",
    category: "Data Science",
    short: "Classifying pulsar stars using machine learning technique.",
    details: [
      "Built a machine learning pipeline to classify pulsar stars using supervised learning techniques.",
      "Performed data preprocessing and feature analysis using pandas and visualized trends with Altair.",
      "Trained and evaluated classification models using scikit-learn, comparing model performance based on accuracy and precision metrics.",
    ],
    tech: ["Python", "pandas", "altair", "sklearn"],
    demo: null,
    github: "https://github.com/HyperKenn/Pulsar_Star_Classification",
  },
  {
    id: "Trapezoid Rule",
    title: "Trapezoid Rule Numerical Integration",
    category: "Math",
    short: "Estimate integrals using the trapezoid rule.",
    details: [
      "Implemented the trapezoid rule algorithm in Python to approximate definite integrals numerically.",
      "Designed the program to handle variable step sizes and analyze approximation error.",
      "Compared numerical results against exact analytical solutions to evaluate convergence and accuracy.",
    ],
    tech: ["Python"],
    demo: null,
    github: "https://github.com/HyperKenn/Math101",
  },
]

function Modal({ project, onClose }) {
  if (!project) return null

  const details = Array.isArray(project.details)
    ? project.details
    : project.details
    ? [project.details]
    : []

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="bg-white rounded-xl p-6 z-10 w-full max-w-xl shadow-lg max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {project.tech.join(" • ")}
            </p>
          </div>
          <button onClick={onClose} aria-label="close" className="px-2">
            ✕
          </button>
        </div>

        <p className="mt-4 text-gray-700">{project.short}</p>

        {details.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900">Full explanation</h4>
            <ul className="mt-2 list-disc pl-5 space-y-2 text-gray-700">
              {details.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex gap-3 flex-wrap">
          {/* Demo: show link if exists, else show disabled */}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded bg-brand-500 text-white"
            >
              Demo
            </a>
          ) : (
            <button
              disabled
              className="px-3 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed"
              title="Video demo will be added soon"
            >
              🎥 Demo Coming Soon
            </button>
          )}

          {/* GitHub */}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded border"
            >
              GitHub
            </a>
          ) : (
            <button
              disabled
              className="px-3 py-2 rounded border text-gray-400 cursor-not-allowed"
              title="GitHub link will be added later"
            >
              GitHub (TBD)
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL)
  const [selected, setSelected] = useState(null)

  const filtered = sampleProjects.filter(
    (p) => filter === ALL || p.category === filter
  )

  return (
    <section id="projects" className="mt-12 border-t pt-10">
      {/* FIXED HEADER FOR MOBILE */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>

        {/* Scrollable filters on mobile so right side isn't cut off */}
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-2 sm:overflow-visible sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === cat ? "bg-brand-500 text-white" : "border bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div>
              <h3 className="font-semibold">{p.title}</h3>
              <div className="text-sm text-gray-500 mt-1">{p.category}</div>
              <p className="mt-2 text-gray-700">{p.short}</p>

              <div className="mt-3 flex items-center justify-between gap-4">
                {/* break-words prevents long tech strings from pushing layout */}
                <div className="text-xs text-gray-500 break-words">
                  {p.tech.join(" • ")}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelected(p)
                  }}
                  className="px-3 py-1 rounded text-sm border whitespace-nowrap"
                >
                  Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}