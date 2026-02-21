import { RevealOnScroll } from "../RevealOnScroll";
import { FaDownload } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20 md:py-0"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 max-w-5xl mx-auto">
          
          {/* Circular Profile Picture Side */}
          <div className="relative group shrink-0">
            <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border-2 border-blue-500/30 overflow-hidden transition-all duration-300 ...">
              <img 
                src="my-portfolio/profile.jpg" 
                alt="Hari Sai Profile" 
                className="w-full h-full object-cover ..."
              />
            </div>
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-blue-500/10 rounded-full -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Text Content Side */}
          <div className="text-center md:text-left z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Hari Sai
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              I am a <span className="text-white font-medium">Web Developer</span> starting my journey in software engineering. 
              Skilled in <span className="text-blue-400">React, Python, and MERN stack development</span>, 
              I build digital solutions that are simple, fast, and effective. 
              I am a lifelong learner committed to staying at the forefront of modern web technologies.
            </p>

            {/* Button Group */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>

              <a
                href="https://drive.google.com/file/d/16wynwctbGl7iGoOdFQqvflNfwaZwdEUf/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400/50 text-cyan-400 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:bg-cyan-400/10 flex items-center gap-2"
              >
                <FaDownload className="text-sm" />
                My Resume
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};