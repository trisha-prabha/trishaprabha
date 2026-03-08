import ScrollReveal from "./ScrollReveal";

const skills = [
  { category: "Design", items: ["User Interface Design", "User Experience Design", "Wireframing & Prototyping", "Design Systems & Guidelines"] },
  { category: "Tools", items: ["Figma", "Canva", "Adobe Photoshop", "Adobe Illustrator", "Adobe XD"] },
  { category: "Development", items: ["HTML5 & CSS3", "JavaScript / TypeScript", "React.js", "Tailwind CSS", "Responsive & Adaptive Design"] },
  { category: "Soft Skills", items: ["User Research & Testing", "Creative Problem Solving", "Cross-functional Collaboration", "Clear Communication", "Attention to Detail"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-16">
            Skills &amp; Expertise
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.1}>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-display">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-foreground text-sm font-medium px-3 py-2.5 rounded-md bg-background border border-border hover:border-accent hover:shadow-sm transition-all"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
