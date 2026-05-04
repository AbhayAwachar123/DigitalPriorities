import { motion } from "framer-motion";
import { Palette, Layout, Code, Smartphone } from "lucide-react";
import { servicesData } from "@/data/services";
import { Link } from "react-router-dom";
import agencyWorkspace from "@/assets/agency-workspace.jpg";

// Map icons to services manually for simplicity
const iconMap: Record<string, React.ElementType> = {
  "website-development": Layout,
  "web-applications": Code,
  "brand-identity": Palette,
  "mobile-apps": Smartphone,
};

const stats = [
  { value: "30%", label: "More conversions for our clients" },
  { value: "50%", label: "Faster time-to-market" },
  { value: "99%", label: "Client satisfaction rate" },
];

const AboutSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 bg-background overflow-hidden" id="about">
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground"
        >
          We Help Businesses
          <br />
          Succeed Online
        </motion.h2>

        <p className="mt-4 sm:mt-6 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          From landing pages to full platforms, mobile apps to AI tools —
          our expert team brings your vision to life, hassle-free.
        </p>

        {/* Service Pills Marquee */}
        <div className="mt-10 sm:mt-14 relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-3 sm:gap-4 w-max animate-marquee" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            {Array(6).fill(servicesData).flat().map((service, i) => {
              const Icon = iconMap[service.id] || Layout;
              return (
                <Link
                  key={i}
                  to={`/services/${service.id}`}
                  className="group flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm text-foreground/70 whitespace-nowrap border border-foreground/10 bg-secondary transition-all duration-300 hover:text-foreground hover:border-foreground/25 hover:-translate-y-1 cursor-pointer"
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 opacity-60 group-hover:opacity-100 transition duration-300" />
                  {service.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-20 rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          <img
            src={agencyWorkspace}
            alt="Our team working in a modern office"
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Stats */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 sm:gap-6 justify-center sm:justify-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/10 to-foreground/5 border border-foreground/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-xl flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-foreground/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3 17l6-6 4 4 8-8" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-3xl sm:text-4xl font-semibold text-foreground">{stat.value}</h3>
                <p className="text-muted-foreground mt-1 text-xs sm:text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
