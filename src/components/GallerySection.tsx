import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const images = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio1, portfolio2, portfolio3, portfolio4];

const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }
      el.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-0 overflow-hidden" id="case-studies">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="flex gap-4 sm:gap-[30px] p-[10px] w-max" ref={scrollRef}>
          {images.map((img, i) => (
            <div key={i} className="w-[250px] sm:w-[300px] md:w-[375px] h-[300px] sm:h-[350px] md:h-[400px] rounded-[10px] overflow-hidden flex-shrink-0">
              <img src={img} alt={`Project showcase ${i + 1}`} className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GallerySection;
