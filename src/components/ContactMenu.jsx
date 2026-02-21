import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ChevronDown } from "lucide-react";

export default function ContactMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const menuId = "contact-menu";

  const close = () => setOpen(false);
  const toggle = () => setOpen((s) => !s);

  // Close on outside click
  useEffect(() => {
    const onMouseDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) close();
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const baseItem =
    "group flex items-center gap-3 rounded-xl px-4 py-2 transition hover:bg-gray-100";

  return (
    <div className="relative inline-block text-left" ref={ref}>
      {/* Button */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={menuId}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition duration-300 hover:scale-105 hover:shadow-lg"
      >
        Contact
        <ChevronDown
          className={`h-4 w-4 transition duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        id={menuId}
        role="menu"
        aria-hidden={!open}
        className={`absolute right-0 mt-3 w-56 origin-top-right rounded-2xl border bg-white p-2 shadow-lg z-50 transition-all duration-150
          ${
            open
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }`}
      >
        <ul className="flex flex-col text-sm">
          {/* Email */}
          <li>
            <a
              href="mailto:kennethyo2005@gmail.com"
              onClick={close}
              className={`${baseItem} hover:text-red-500`}
            >
              <MdEmail className="text-gray-600 transition group-hover:text-red-500" />
              <span>Email</span>
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/kenneth-arianto/"
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className={`${baseItem} hover:text-[#0A66C2]`}
            >
              <FaLinkedin className="text-gray-600 transition group-hover:text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
          </li>

          {/* Instagram */}
          <li>
            <a
              href="https://www.instagram.com/kenneth_arianto/"
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className={`${baseItem} hover:text-pink-500`}
            >
              <FaInstagram className="text-gray-600 transition group-hover:text-pink-500" />
              <span>Instagram</span>
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a
              href="https://github.com/HyperKenn"
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className={`${baseItem} hover:text-black`}
            >
              <FaGithub className="text-gray-600 transition group-hover:text-black" />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}