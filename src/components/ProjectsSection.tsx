import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import ScrollReveal from "./ScrollReveal";

const projects = [
  { title: "Learnlogicify Landing Page", image: project1 },
  { title: "Winzee Web Chat Application", image: project2 },
  { title: "ChatGPT Clone", image: project3 },
  { title: "Gemini Clone", image: project4 },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Impressive Works
            </h2>
            <p className="text-xs uppercase tracking-widest text-muted-foreground leading-relaxed md:text-right self-end">
              Here's a selection of projects that showcase my passion for design and development.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
                    <ArrowUpRight className="w-3 h-3 group-hover:text-accent-foreground transition-colors" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{project.title}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
