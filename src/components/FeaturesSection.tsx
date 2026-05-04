import { Layers } from "lucide-react";
import { motion } from "framer-motion";
import {
  Code, Globe, Smartphone, Database, Server, Github, Terminal, Brain, Slack,
} from "lucide-react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava,
} from "react-icons/fa";
import { SiMongodb, SiFlutter, SiExpress, SiHostinger } from "react-icons/si";

interface FeatureTileProps {
  title: string;
  children: React.ReactNode;
}

const FeatureTile = ({ title, children }: FeatureTileProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-secondary border border-border rounded-[20px] p-6 sm:p-8 md:p-10 overflow-hidden relative"
    style={{ boxShadow: "inset 0px 1px 20px 0px rgba(255, 255, 255, 0.07)" }}
  >
    <div className="mb-6">
      <h4 className="text-foreground text-lg sm:text-xl font-medium mb-2">{title}</h4>
      <div className="text-muted-foreground text-sm sm:text-base leading-[1.8]">{children}</div>
    </div>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 relative" style={{ paddingTop: "100px" }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4 sm:mb-6">
            Our Digital Services
            <br className="hidden sm:block" />
            for Modern Businesses
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-[1.8]">
            We design, build, and deploy digital solutions that help startups,
            businesses, and organizations establish a strong online presence.
            From modern websites to full-stack applications and AI tools —
            we handle everything from idea to deployment.
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Tile 1 — Innovative Solutions */}
            <FeatureTile title="Innovative Digital Solutions">
              <p>We leverage cutting-edge technologies like modern frameworks and AI to build future-proof digital products that keep your business ahead of the curve.</p>
              <div className="mt-8 sm:mt-10 overflow-hidden rounded-[18px] bg-background p-4 sm:p-6 relative" style={{ boxShadow: "0px 30px 60px rgba(0,0,0,0.6), inset 0px 1px 0px rgba(255,255,255,0.05)" }}>
                <div className="flex items-center justify-center h-[140px] sm:h-[160px] relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 sm:inset-6 rounded-full border border-primary/20 border-dashed"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 sm:inset-12 rounded-full border border-primary/30 border-dotted"
                  />
                  <div className="p-4 sm:p-6 rounded-full bg-background border border-border shadow-xl relative z-10 flex items-center justify-center">
                    <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </FeatureTile>

            {/* Tile 2 — End-to-End Excellence */}
            <FeatureTile title="End-to-End Excellence">
              <p>From initial UI/UX concepts to robust full-stack development, our expert team seamlessly handles every step of your entire digital journey.</p>
              <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
                <div
                  className="bg-background rounded-[18px] p-4 sm:p-5 flex items-center gap-3 sm:gap-4 relative overflow-hidden group hover:border-primary/50 transition-colors border border-transparent"
                  style={{ boxShadow: "0px 25px 50px rgba(0,0,0,0.6), inset 0px 1px 0px rgba(255,255,255,0.05)" }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm sm:text-base">Strategic Design</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Wireframes & UI/UX</p>
                  </div>
                </div>
                <div
                  className="bg-background rounded-[18px] p-4 sm:p-5 flex items-center gap-3 sm:gap-4 relative overflow-hidden group hover:border-purple-500/50 transition-colors border border-transparent"
                  style={{ boxShadow: "0px 25px 50px rgba(0,0,0,0.6), inset 0px 1px 0px rgba(255,255,255,0.05)" }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm sm:text-base">Robust Development</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Frontend & Backend</p>
                  </div>
                </div>
              </div>
            </FeatureTile>

            {/* Tile 3 — Client-Centric */}
            <FeatureTile title="Client-Centric Partnership">
              <p>Your success is our priority. We collaborate closely, providing transparent communication and custom solutions tailored to your unique goals.</p>
              <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
                <div className="flex items-end gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <div className="bg-foreground/10 backdrop-blur-md border border-border rounded-2xl px-4 sm:px-6 py-3 sm:py-4 max-w-[75%] text-xs sm:text-sm text-foreground">
                    How will the new platform align with our vision?
                  </div>
                </div>
                <div className="flex items-end justify-end gap-3 sm:gap-4">
                  <div className="bg-background border border-border rounded-2xl px-4 sm:px-6 py-3 sm:py-4 max-w-[75%] text-xs sm:text-sm text-muted-foreground shadow-lg">
                    We'll craft a custom digital strategy designed specifically to drive your growth.
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                </div>
              </div>
            </FeatureTile>
          </div>

          {/* Bottom Wide Card */}
          <div className="grid grid-cols-1">
            <FeatureTile title="Technologies We Work With">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center mt-4 sm:mt-6">
                <div>
                  <p>
                    We build scalable digital products — from websites and mobile apps
                    to AI-powered tools and full-stack platforms. Our team uses the latest
                    technologies to deliver fast, reliable solutions.
                  </p>
                </div>
                <div className="relative overflow-hidden space-y-4 sm:space-y-6">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-secondary via-transparent to-secondary" />
                  {/* Row 1 */}
                  <motion.div
                    className="flex gap-3 sm:gap-5 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                  >
                    {[...Array(2)].map((_, loopIndex) =>
                      [Globe, Smartphone, SiFlutter, FaReact, FaNodeJs, SiMongodb, FaHtml5, FaCss3Alt].map((Icon, i) => (
                        <div
                          key={`top-${loopIndex}-${i}`}
                          className="w-14 h-14 sm:w-20 sm:h-20 bg-background rounded-xl flex items-center justify-center border border-border hover:scale-110 transition-all duration-300"
                        >
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                        </div>
                      ))
                    )}
                  </motion.div>
                  {/* Row 2 */}
                  <motion.div
                    className="flex gap-3 sm:gap-5 w-max"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                  >
                    {[...Array(2)].map((_, loopIndex) =>
                      [Github, Terminal, FaJava, SiHostinger, Brain, Slack, SiExpress, Server, Database].map((Icon, i) => (
                        <div
                          key={`bottom-${loopIndex}-${i}`}
                          className="w-14 h-14 sm:w-20 sm:h-20 bg-background rounded-xl flex items-center justify-center border border-border hover:scale-110 transition-all duration-300"
                        >
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                        </div>
                      ))
                    )}
                  </motion.div>
                </div>
              </div>
            </FeatureTile>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
