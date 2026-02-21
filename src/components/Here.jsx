import React from "react"
import ContactMenu from "./ContactMenu"
import RotatingWords from "./RotatingWords"

export default function Here() {
  return (
    <section id="home" className="mx-auto max-w-4xl px-6 pt-24 pb-12">
      <div className="grid items-start gap-14 md:gap-20 md:grid-cols-2">
        {/* IMAGE (shows first on mobile, right side on desktop) */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="blob h-64 w-64 overflow-hidden shadow-xl sm:h-80 sm:w-80 md:h-[26rem] md:w-[21rem]">
            <img
              src="/images/profile.jpeg"
              alt="Kenneth Arianto"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>

        {/* TEXT (shows after image on mobile, left side on desktop) */}
        <div className="order-2 md:order-1">
          <p className="text-sm font-medium text-brand-500">Hi, I&apos;m</p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
            Kenneth Arianto
          </h1>

          <h2 className="mt-4 text-3xl font-light italic tracking-wide text-gray-800 md:text-4xl">
            I am a{" "}
            <span className="italic font-semibold text-blue-600">
              <RotatingWords words={["Developer", "Engineer", "Student"]} />
            </span>
          </h2>

          <p
            className="mt-4 max-w-xl text-base leading-relaxed text-gray-700 md:text-lg"
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            Third-year Computer Science student at UBC Vancouver, constantly
            learning and practicing through personal and academic projects. I am
            passionate about software development, artificial intelligence,
            machine learning, and backend engineering.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download="Kenneth_Arianto_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-300 to-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Resume
            </a>

            <ContactMenu />
          </div>

          {/* Currently */}
          <div className="mt-10">
            <p className="text-sm font-semibold text-gray-900 tracking-wide">
              Currently
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border bg-white/60 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-gray-900">
                  BSc. CS + Statistics
                </p>
                <p className="mt-1 text-sm text-gray-600">@UBC Vancouver</p>
              </div>

              <div className="rounded-2xl border bg-white/60 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-gray-900">
                  Competitive Programming Club
                </p>
                <p className="mt-1 text-sm text-gray-600">Member @UBC</p>
              </div>

              <div className="rounded-2xl border bg-white/60 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-gray-900">
                  Teaching Assistant
                </p>
                <p className="mt-1 text-sm text-gray-600">CPSC 221 @UBC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}