import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-600 flex items-center justify-between">
        
        <div>
          Thanks for visiting — reach me at{" "}
          <a
            href="mailto:kennethyo2005@gmail.com"
            className="text-blue-600 hover:underline"
          >
            kennethyo2005@gmail.com
          </a>{" "}
          📬😊
        </div>

        <div className="flex gap-6 text-xl">
          {/* GitHub */}
          <a
            href="https://github.com/HyperKenn"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-300 hover:text-black"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kenneth-arianto/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-300 hover:text-[#0A66C2]"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kenneth_arianto/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="transition-colors duration-300 hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}