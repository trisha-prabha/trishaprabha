import { motion } from "framer-motion";
import ashwinCutout from "@/assets/ashwin-cutout.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-[hsl(0,0%,75%)] pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-[calc(100vh-5rem)]">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex items-center justify-center md:justify-start h-full"
        >
          <img
            src={ashwinCutout}
            alt="Trisha Prabha - UI/UX Designer"
            className="h-[70vh] md:h-[85vh] object-contain object-bottom grayscale hover:grayscale-0 transition-all duration-700 bg-[hsl(0,0%,75%)]"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex flex-col items-start md:items-end justify-center text-left md:text-right pb-16 md:pb-0"
        >
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-display font-bold text-foreground leading-[0.95] tracking-tight">
            Trisha Prabha
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-display mt-3 tracking-wide">
            UI / UX Designer
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-16 h-0.5 bg-accent mt-6 origin-right"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
