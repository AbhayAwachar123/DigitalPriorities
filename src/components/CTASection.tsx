import { motion } from "framer-motion";
import gridPattern from "@/assets/grid-pattern.png";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 px-4" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-secondary border border-foreground/10 rounded-[20px] p-8 sm:p-10 md:p-20 text-center overflow-hidden"
          style={{ boxShadow: "inset 0px 1px 20px 0px rgba(255, 255, 255, 0.25)" }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-80">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${gridPattern})`,
                backgroundRepeat: "repeat",
                backgroundPosition: "center top",
                backgroundSize: "1200px auto",
                transform: "perspective(1200px) rotateX(70deg)",
                maskImage: "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,1) 79%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,1) 79%, rgba(0,0,0,0) 100%)",
              }}
            />
            <div
              className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                filter: "blur(100px)",
                maskImage: "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 bg-secondary border border-foreground/5 rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-8"
              style={{ boxShadow: "inset 0px 1px 20px 0px rgba(255, 255, 255, 0.25)" }}
            >
              <span className="w-2 h-2 bg-[hsl(var(--green-dot))] rounded-full" />
              <span className="text-muted-foreground text-xs sm:text-sm">Ready to Start?</span>
            </div>

            <h2
              className="text-2xl sm:text-3xl md:text-[56px] font-normal tracking-[-0.04em] leading-[1.2] text-foreground mb-4 sm:mb-5"
              style={{
                maskImage: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%)",
                WebkitMaskImage: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%)",
              }}
            >
              Let's Build Something
              <br className="hidden sm:block" />
              Amazing Together
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base md:text-[19px] leading-[1.7] max-w-2xl mx-auto mb-8 sm:mb-10">
              Tell us about your business goals and we'll create a custom plan to help you grow online. No commitment — just a conversation.
            </p>

            <a
              href="mailto:hello@digitalpriorities.com"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] text-sm sm:text-base font-medium transition-all relative overflow-hidden group"
              style={{ boxShadow: "inset 0px 1px 20px 0px rgba(255, 255, 255, 0.25)" }}
            >
              <span className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-10 blur-[40px] transition-opacity" />
              <span className="relative">Book a Free Consultation</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
