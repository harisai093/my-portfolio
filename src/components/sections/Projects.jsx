import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const myProjects = [
    {
      title: "My Art Gallery",
      description: "Responsive art gallery built with HTML, CSS, and JavaScript, featuring smooth 3D slide transitions and interactive category filtering.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Fullscreen API"],
      link: "https://harisai093.github.io/my-art-gallery/",
    },
    {
      title: "Currency Converter",
      description: "A real-time currency converter that fetches live exchange rates and dynamically updates country flags based on selected currencies.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Exchange Rate API"],
      link: "https://harisai093.github.io/Currency-Converter/",
    },
    {
      title: "To-Do List",
      description: "A functional and responsive task management application with persistent data storage and a clean dark-themed UI.",
      technologies: ["HTML5", "CSS3", "JavaScript (Vanilla)", "LocalStorage"],
      link: "https://harisai093.github.io/to-do-list/",
    },
    {
      title: "Classic Calculator",
      description: "A web-based calculator featuring a retro-industrial aesthetic with tactile skeuomorphic buttons and an LCD-style display.",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6)"],
      link: "https://harisai093.github.io/classic-calculator/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myProjects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  
                  {/* Pulse Indicator */}
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-green-500 uppercase tracking-wider">Live</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/harisai093?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-blue-500/50 text-blue-400 font-medium transition-all hover:bg-blue-500/10 hover:border-blue-500 hover:-translate-y-1"
            >
              View All Projects on GitHub
              <span className="text-xl">→</span>
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};