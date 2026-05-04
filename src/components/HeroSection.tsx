import { motion } from "framer-motion";
import gridPattern from "@/assets/grid-pattern.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Grid Background */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
        <div
          className="w-[1200px] h-[800px] opacity-40"
          style={{
            backgroundImage: `url(${gridPattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "1200px",
            transform: "perspective(1200px) rotateX(70deg)",
            maskImage: "radial-gradient(50% 50% at 50% 50%, black 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(50% 50% at 50% 50%, black 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-foreground opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_70%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-secondary border border-foreground/10 rounded-full px-5 sm:px-6 py-2 mb-6 sm:mb-8 shadow-[inset_0px_1px_20px_rgba(255,255,255,0.25)]"
        >
          <span className="w-2 h-2 bg-[hsl(var(--green-dot))] rounded-full" />
          <span className="text-xs sm:text-sm text-muted-foreground">
            Code Today, Innovate Tomorrow
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-4 sm:mb-6"
        >
          Digital Solutions That
          <br />
          Accelerate Your Business
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          We design and develop high-performance websites, digital products,
          and scalable solutions that help startups and businesses grow online.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-[14px] rounded-[10px] text-base font-medium transition-all relative overflow-hidden group"
            style={{ boxShadow: "rgba(255, 255, 255, 0.25) 0px 1px 20px 0px inset" }}
          >
            <span className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-10 blur-[40px] transition-opacity" />
            <span className="relative">Start Your Project</span>
          </a>

          <p className="text-muted-foreground text-sm">
            ⭐⭐⭐⭐⭐ Trusted by modern startups
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
