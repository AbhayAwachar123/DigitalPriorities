import { motion } from "framer-motion";
import { FileX, Target, Zap, Paintbrush } from "lucide-react";

const items = [
  { icon: FileX, title: "No Long Contracts", description: "Work with us on your terms. Pause or cancel anytime — total flexibility." },
  { icon: Target, title: "Results That Matter", description: "Every design decision is focused on turning your visitors into paying customers." },
  { icon: Zap, title: "Lightning Fast", description: "Most projects delivered in 48 hours. No waiting weeks for simple updates." },
  { icon: Paintbrush, title: "Premium Quality", description: "Clean, modern, professional designs crafted by experienced developers and designers." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[56px] font-normal tracking-[-0.04em] leading-[1.2] text-foreground mb-4 sm:mb-5">
            Why Businesses Choose Us
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-[19px] leading-[1.7] max-w-2xl mx-auto">
            We make building your digital presence simple, fast, and affordable — so you can focus on what you do best.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0"
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center" style={{justifyContent:"center"}}>
              <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 border border-foreground/[0.15]"
                  style={{
                    background: "linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)",
                    boxShadow: "inset 0px 1px 20px 0px rgba(255, 255, 255, 0.25)",
                  }}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                </div>
                <h4 className="text-foreground text-base sm:text-lg font-medium mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-[1.8] max-w-[200px]">{item.description}</p>
              </div>
              {i < items.length - 1 && (
                <div className="hidden md:block w-px h-24 bg-border" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
