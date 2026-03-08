import heroImg from "@/assets/hero-portrait.jpg";
import { ArrowUpRight, Home, Layers, Settings, User, FolderOpen, Code, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-muted">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ashwin - UI/UX Designer & Developer"
          className="w-full h-full object-cover object-top grayscale"
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-start px-6 md:px-12 pt-6">
        <span className="text-primary-foreground/80 text-sm font-display">© Code by Ashwin</span>
        <p className="text-primary-foreground/70 text-xs md:text-sm text-right max-w-xs leading-relaxed hidden md:block">
          Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences
        </p>
      </div>

      {/* Center Arrow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10">
        <div className="w-14 h-14 rounded-full border border-primary-foreground/30 flex items-center justify-center">
          <ArrowUpRight className="w-5 h-5 text-primary-foreground/70" />
        </div>
      </div>

      {/* Large Title */}
      <div className="absolute bottom-24 left-0 right-0 z-10">
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-display font-bold text-primary-foreground leading-none text-center tracking-tight">
          UI/UX Developer &amp; Designer
        </h1>
      </div>

      {/* Floating Toolbar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-1 bg-foreground/80 backdrop-blur-md rounded-full px-3 py-2">
          {[Home, Layers, Settings, User, FolderOpen, Code, Mail].map((Icon, i) => (
            <button
              key={i}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                i === 3 ? "bg-accent text-accent-foreground" : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
