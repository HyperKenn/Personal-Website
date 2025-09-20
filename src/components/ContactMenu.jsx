import { useState, useRef, useEffect } from 'react';

export default function ContactMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close menu if clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-block px-4 py-2 rounded-md border hover:bg-gray-100"
      >
        Contact
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
          <ul className="flex flex-col">
            <li>
              <a href="mailto:kennethyo2005@gmail.com" className="block px-4 py-2 hover:bg-gray-100">Email</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kenneth-arianto/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/kenneth_arianto/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Instagram</a>
            </li>
            <li>
              <a href="https://github.com/HyperKenn" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">GitHub</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
