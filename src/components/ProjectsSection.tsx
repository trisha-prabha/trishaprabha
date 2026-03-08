import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import boxitright from "@/assets/boxitright.png";
import figmaEvents from "@/assets/figma-events.png";
import figmaDashboard from "@/assets/figma-dashboard.png";
import ScrollReveal from "./ScrollReveal";

const projects = [
  { title: "BoxITRight", images: [boxitright] },
  { title: "Figma Designs", images: [figmaEvents, figmaDashboard] },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const hasMultiple = project.images.length > 1;
  const currentImage = hasMultiple && hovered ? project.images[1] : project.images[0];

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="overflow-hidden rounded-lg mb-3 relative">
          <img
            src={currentImage}
            alt={project.title}
            className="w-full h-64 md:h-72 object-cover object-top transition-all duration-500 group-hover:scale-105"
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
  );
};

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
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
