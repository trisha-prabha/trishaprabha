import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left */}
        <div>
          <p className="text-lg md:text-xl leading-relaxed text-foreground max-w-lg">
            Driven by curiosity and a love for design, I create simple, functional, and visually striking digital experiences. As a student, I'm always learning and exploring new ideas.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end text-right">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-4">
            The fusion of my passion for design, development, and seamless user experiences places me at the intersection of creativity and technology in the digital world.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
          >
            More about me
            <span className="w-7 h-7 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-accent transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
