import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
  {
    title: "GreenCart",
    description: "Full-featured e-commerce platform.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    gradient: "from-emerald-500 to-teal-500",
    github: "https://github.com/neelpatel8837/greencart",
  },
  {
    title: "Dev Event",
    description: "Event organization platform.",
    tech: ["Next.js", "MongoDB", "Cloudinary"],
    gradient: "from-blue-500 to-indigo-500",
    github: "https://github.com/neelpatel8837/devEvents_next.js",
  },
  {
    title: "Notes Manager",
    description: "File‑based notes management system.",
    tech: ["Node.js", "Express", "EJS", "Tailwind CSS"],
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/neelpatel8837/backendproject",
  },
  {
    title: "Task Manager",
    description: "Personal task organizer.",
    tech: ["React", "TypeScript", "Tailwind"],
    gradient: "from-orange-500 to-red-500",
    github: "https://github.com/neelpatel8837/tsm",
  },
];
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Project Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <h3 className="text-3xl font-bold text-white z-10">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center pt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="hover:bg-primary/10">
                      <Github className="mr-2 h-4 w-4" />View Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
