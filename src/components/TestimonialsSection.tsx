import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialDavid from "@/assets/testimonial-david.jpg";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "DigitalPriorities transformed our online presence completely. Our new website not only looks incredible — it actually brings in leads every single day. Best investment we've made.",
    name: "Jason Bates",
    role: "Startup Founder",
    image: testimonialDavid,
  },
  {
    quote: "Since working with their team, our conversion rates have gone up 40%. The designs are clean, modern, and built with real business results in mind.",
    name: "Jake Thompson",
    role: "SaaS CEO",
    image: testimonialSarah,
  },
  {
    quote: "They made the whole process so easy. We told them what we needed, and they delivered a beautiful, fast website in less than a week. Highly recommend!",
    name: "Sarah Lin",
    role: "Marketing Director",
    image: testimonialSarah,
  },
  {
    quote: "Working with DigitalPriorities felt like having an in-house team. They're responsive, professional, and always deliver beyond expectations.",
    name: "David Miller",
    role: "Agency Owner",
    image: testimonialDavid,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="py-16 sm:py-20 px-4" id="testimonials">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[56px] font-normal tracking-[-0.04em] leading-[1.2] text-foreground mb-4 sm:mb-5">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-[19px] leading-[1.7] max-w-2xl mx-auto">
            Real stories from real business owners who trust us with their digital growth.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-secondary border border-border rounded-[20px] p-6 sm:p-8 md:p-16 text-center"
              style={{ boxShadow: "inset 0px 1px 20px 0px rgba(255, 255, 255, 0.07)" }}
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-4 sm:mb-6" />
              <p className="text-foreground text-lg sm:text-xl md:text-2xl font-normal leading-[1.5] mb-6 sm:mb-10 max-w-3xl mx-auto">
                {t.quote}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-foreground text-xs sm:text-sm font-medium">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
            <button
              onClick={prev}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-[5px] bg-foreground/[0.03] flex items-center justify-center pointer-events-auto -ml-2 sm:-ml-5 hover:bg-foreground/[0.08] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-[5px] bg-foreground/[0.03] flex items-center justify-center pointer-events-auto -mr-2 sm:-mr-5 hover:bg-foreground/[0.08] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
