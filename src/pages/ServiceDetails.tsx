import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { servicesData } from "@/data/services";
import type { ReactNode } from "react";
import { Globe, ShieldCheck, TestTubeDiagonal, Wrench, Sparkles, Zap } from "lucide-react";
import webDevHero from "@/assets/web-dev-hero.png";
import webAppHero from "@/assets/web-app-hero.png";
import brandIdentityHero from "@/assets/brand-identity-hero.png";
import mobileAppsHero from "@/assets/mobile-apps-hero.png";
import gridPattern from "@/assets/grid-pattern.png";

type ParsedListBlock =
  | { type: "label"; text: string }
  | { type: "items"; heading?: string; items: string[] };

function parseTechContent(content: string): ParsedListBlock[] {
  const lines = content.split("\n").map((l) => l.trim());
  const blocks: ParsedListBlock[] = [];

  let currentHeading: string | undefined;
  let currentItems: string[] = [];

  const flushItems = () => {
    if (currentItems.length > 0) {
      blocks.push({ type: "items", heading: currentHeading, items: currentItems });
      currentItems = [];
    }
  };

  for (const line of lines) {
    if (!line) {
      flushItems();
      currentHeading = undefined;
      continue;
    }

    if (line.endsWith(":") && !line.startsWith("- ")) {
      flushItems();
      currentHeading = line.replace(/:$/, "");
      continue;
    }

    if (line.startsWith("- ")) {
      currentItems.push(line.slice(2).trim());
      continue;
    }

    flushItems();
    blocks.push({ type: "label", text: line });
  }

  flushItems();
  return blocks;
}

function normalizeTechKey(text: string) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

type OnlineLogo = {
  src: string;
  alt: string;
};

function simpleIcon(slug: string, colorHexWithoutHash: string, alt: string): OnlineLogo {
  // Simple Icons CDN: returns an SVG, optionally tinted via the color segment.
  // Example: https://cdn.simpleicons.org/react/61DAFB
  return { src: `https://cdn.simpleicons.org/${slug}/${colorHexWithoutHash}`, alt };
}

function getOnlineTechLogo(label: string): OnlineLogo | null {
  const key = normalizeTechKey(label);

  // Languages
  if (key.startsWith("typescript")) return simpleIcon("typescript", "3178C6", "TypeScript");
  if (key.startsWith("javascript")) return simpleIcon("javascript", "F7DF1E", "JavaScript");
  if (key.startsWith("dart")) return simpleIcon("dart", "0175C2", "Dart");
  if (key.startsWith("swift")) return simpleIcon("swift", "F05138", "Swift");
  if (key.startsWith("kotlin")) return simpleIcon("kotlin", "7F52FF", "Kotlin");

  // Frontend / Mobile frameworks
  if (key.startsWith("react native")) return simpleIcon("react", "61DAFB", "React Native");
  if (key === "react") return simpleIcon("react", "61DAFB", "React");
  if (key === "flutter") return simpleIcon("flutter", "02569B", "Flutter");
  if (key === "vite") return simpleIcon("vite", "646CFF", "Vite");
  if (key === "tailwind css") return simpleIcon("tailwindcss", "06B6D4", "Tailwind CSS");

  // Backend / APIs
  if (key.startsWith("node.js") || key === "node") return simpleIcon("nodedotjs", "339933", "Node.js");
  if (key.startsWith("express")) return simpleIcon("express", "000000", "Express");
  if (key.startsWith("firebase")) return simpleIcon("firebase", "FFCA28", "Firebase");
  if (key.startsWith("graphql")) return simpleIcon("graphql", "E10098", "GraphQL");

  // Data
  if (key.startsWith("sqlite")) return simpleIcon("sqlite", "003B57", "SQLite");

  // Quality / automation
  if (key.startsWith("ci/cd") || key.startsWith("ci")) return simpleIcon("githubactions", "2088FF", "GitHub Actions");
  if (key.startsWith("github actions")) return simpleIcon("githubactions", "2088FF", "GitHub Actions");

  // Stores / tooling
  if (key.startsWith("app store")) return simpleIcon("appstore", "0D96F6", "App Store");
  if (key.startsWith("google play")) return simpleIcon("googleplay", "414141", "Google Play");
  if (key.startsWith("figma")) return simpleIcon("figma", "F24E1E", "Figma");

  return null;
}

function getTechIcon(label: string): ReactNode | null {
  const online = getOnlineTechLogo(label);
  if (online) {
    return (
      <img
        src={online.src}
        alt={online.alt}
        loading="lazy"
        className="h-4 w-4"
      />
    );
  }

  const key = normalizeTechKey(label);
  if (key.startsWith("rest")) return <Globe className="h-4 w-4" />;
  if (key.startsWith("unit/ui testing") || key.startsWith("unit") || key.startsWith("ui testing"))
    return <TestTubeDiagonal className="h-4 w-4" />;
  if (key.startsWith("secure")) return <ShieldCheck className="h-4 w-4" />;
  if (key.startsWith("shadcn") || key.startsWith("radix")) return <Wrench className="h-4 w-4" />;

  return null;
}

function getHeroImage(serviceId: string) {
  switch (serviceId) {
    case "website-development":
      return webDevHero;
    case "web-applications":
      return webAppHero;
    case "brand-identity":
      return brandIdentityHero;
    case "mobile-apps":
      return mobileAppsHero;
    default:
      return webDevHero;
  }
}

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  // Find the requested service
  const service = servicesData.find((s) => s.id === serviceId);

  // If service doesn't exist, redirect to home or a 404 page
  if (!service) {
    return <Navigate to="/" replace />;
  }

  const heroBgImage = getHeroImage(service.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-[120px] pb-16 sm:pb-24 px-4 overflow-hidden">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src={heroBgImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-[0.9] scale-100 transition-opacity duration-700"
          />
          {/* Multi-layered gradient for depth and transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-background" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="max-w-[1200px] mx-auto text-center mt-10 sm:mt-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6"
          >
            <Sparkles className="w-3 h-3" />
            <span>DigitalPriorities Expertise</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-foreground mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto"
          >
             {service.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* Details layout: Sidebar + Content */}
      <section className="py-16 sm:py-24 px-4" id="details">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 sm:gap-16">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-[350px] flex-shrink-0 space-y-4">
             {servicesData.map((s) => {
               const isActive = s.id === service.id;
               return (
                 <Link
                   key={s.id}
                   to={`/services/${s.id}`}
                   className={`block p-4 sm:p-6 rounded-[20px] border transition-all duration-300 relative overflow-hidden group ${
                     isActive 
                     ? "bg-secondary border-primary/50 shadow-[inset_0px_1px_20px_0px_rgba(255,255,255,0.05),_0px_0px_15px_rgba(var(--primary),0.2)]" 
                     : "bg-secondary/50 border-border hover:border-foreground/20 hover:bg-secondary"
                   }`}
                 >
                   {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-[20px]" />
                   )}
                   <h6 className={`font-semibold text-lg sm:text-xl ${isActive ? "text-primary" : "text-foreground group-hover:text-primary transition-colors"}`}>
                     {s.title}
                   </h6>
                 </Link>
               );
             })}
          </aside>

          {/* Main Content */}
          <main className="flex-1">
             <div className="space-y-12 sm:space-y-16">
               {service.sections.map((section, index) => (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                 >
                  <div className="relative mb-4 overflow-hidden rounded-2xl border border-border/40 bg-secondary/10 px-5 py-4 sm:px-6 sm:py-5">
                    <div className="pointer-events-none absolute inset-0">
                      <img
                        src={service.heroImage}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-cover opacity-[0.08] blur-[0.5px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80" />
                    </div>
                    <h4 className="relative text-2xl sm:text-3xl font-semibold text-foreground">
                      {section.heading}
                    </h4>
                  </div>

                  {section.heading.toLowerCase().includes("technologies we use") ||
                  section.heading.toLowerCase().includes("tools we use") ? (
                    <div className="space-y-4">
                      {parseTechContent(section.content).map((block, blockIndex) => {
                        if (block.type === "label") {
                          return (
                            <p
                              key={`${block.type}-${blockIndex}`}
                              className="text-muted-foreground text-base sm:text-lg leading-[1.8]"
                            >
                              {block.text}
                            </p>
                          );
                        }

                        return (
                          <div key={`${block.type}-${blockIndex}`} className="space-y-2">
                            {block.heading ? (
                              <h5 className="text-foreground font-semibold tracking-[-0.01em]">
                                {block.heading}
                              </h5>
                            ) : null}
                            <ul className="space-y-2">
                              {block.items.map((item, itemIndex) => (
                                <li
                                  key={`${blockIndex}-${itemIndex}`}
                                  className="flex items-start gap-3 text-muted-foreground text-base sm:text-lg leading-[1.7]"
                                >
                                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md border border-border/50 bg-secondary/30 text-foreground/90">
                                    {getTechIcon(item) ?? <Wrench className="h-4 w-4" />}
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-base sm:text-lg leading-[1.8] whitespace-pre-line">
                      {section.content}
                    </p>
                  )}
                 </motion.div>
               ))}
             </div>
          </main>

        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ServiceDetails;
