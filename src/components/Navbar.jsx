import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const panelRef = useRef(null);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
    ],
    []
  );

  const close = () => setOpen(false);

  // Smooth scroll
  const onNavClick = (id) => (e) => {
    e.preventDefault();
    close();
    setActive(id);

    const el = document.getElementById(id);
    if (!el) return;

    const NAV_OFFSET = 84;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });
  };

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock scroll when mobile open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const onMouseDown = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) close();
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  // Make Home active when near the top
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 80) setActive("home");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = navItems.map((x) => x.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 80) {
          setActive("home");
          return;
        }

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.12, 0.2, 0.28],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [navItems]);

  // Removes focus/visited/tap "trace"
  const antiTrace =
    "focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 visited:text-gray-700 active:bg-transparent";

  const linkClass = (id) =>
    [
      "rounded-full px-4 py-2 text-sm transition-all duration-200",
      antiTrace,
      active === id
        ? "bg-black/5 text-gray-900 shadow-sm"
        : "text-gray-700 hover:bg-black/5 hover:text-gray-900",
    ].join(" ");

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto flex max-w-4xl justify-center px-6">
        <div className="relative flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-2 py-2 shadow-sm backdrop-blur-md">
          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={onNavClick(item.id)}
                className={linkClass(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            className={`ml-1 rounded-full p-2 hover:bg-black/5 md:hidden ${antiTrace}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((s) => !s)}
          >
            <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      {open && (
        <div className="md:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black/20" />
          <div
            id="mobile-nav"
            ref={panelRef}
            className="mx-auto mt-3 w-[calc(100%-3rem)] max-w-md rounded-2xl border border-black/10 bg-white/90 p-2 shadow-sm backdrop-blur-md"
          >
            <div className="flex flex-col gap-1 p-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onNavClick(item.id)}
                  className={[
                    "rounded-xl px-3 py-2 text-sm transition",
                    antiTrace,
                    active === item.id
                      ? "bg-black/5 text-gray-900"
                      : "hover:bg-gray-100 text-gray-800",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}