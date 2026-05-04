import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Twitter, Github, Mail, ArrowRight, ExternalLink, Code2, Globe, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface TeamMember {
  name: string;
  role: string;
  desc: string;
  detailedBio: string;
  mage: string;
  isMain: boolean;
  skills: string[];
  social: {
    portfolio: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Nakul Gawande",
    role: "Chief Supporter & Marketing Head",
    desc: "Digital marketing expert specializing in SEO, social media strategy, and online brand growth.",
    detailedBio: "Nakul is a results-driven digital marketing professional with expertise in SEO optimization, social media marketing, and digital advertising campaigns. He helps businesses establish strong online presence and drive measurable growth through data-driven strategies.",
    social: {
      portfolio: "#",
      linkedin: "#",
      twitter: "#"
    },
    skills: ["SEO", "Social Media", "Google Ads", "Content Strategy"],
    isMain: true,
    mage: "NG"
  },
  {
    name: "Abhay Awachar",
    role: "FullStack & Lead Developer",
    desc: "Full-stack developer with 2+ years of experience. Leads technical strategy.",
    detailedBio: "Abhay is a passionate full-stack developer with extensive experience in modern web technologies. As the lead developer, he oversees project architecture, technical decisions, and ensures code quality across all projects.",
    social: {
      portfolio: "https://myportfolio-inky-nine-35.vercel.app/",
      github: "https://github.com/abhayawach",
      linkedin: "#"
    },
    skills: ["React", "Node.js", "MongoDB", "AWS", "Team Leadership"],
    isMain: false,
    mage: "AA"
  },
  {
    name: "Aditya Admane",
    role: "MERN Specialist",
    desc: "Full-stack developer skilled in the MERN stack applications.",
    detailedBio: "Aditya specializes in the MERN stack (MongoDB, Express.js, React, Node.js) and is proficient in building full-stack web applications with scalable backend architectures.",
    social: {
      portfolio: "#",
      github: "https://github.com/34Aditya-admane",
      linkedin: "https://www.linkedin.com/in/aditya-admane-42b489245"
    },
    skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    isMain: false,
    mage: "AA"
  },
  {
    name: "Aditya Yerokar",
    role: "App Developer",
    desc: "Mobile app developer specializing in cross-platform applications.",
    detailedBio: "Aditya is a skilled mobile app developer with expertise in React Native and Flutter. He creates performant, user-friendly mobile applications that work seamlessly across both iOS and Android platforms.",
    social: {
      portfolio: "https://aditya-yerokar-portfolio.vercel.app/",
      github: "#",
      linkedin: "#"
    },
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    isMain: false,
    mage: "AY"
  }
];

const TeamPage = () => {
  const containerRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30" ref={containerRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold tracking-[0.2em] uppercase border border-primary/30 bg-primary/10 text-primary rounded-full backdrop-blur-sm">
              Our Visionaries
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              THE MINDS BEHIND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary/60">
                DIGITAL PRIORITIES
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
              We are a collection of dreamers, builders, and strategists united by a single goal:
              elevating your digital presence to extraordinary heights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative p-8 rounded-[2.5rem] bg-secondary/30 border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Grid Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
                  {/* Small Circular Photo / Initials */}
                  <div className="relative flex-shrink-0 group-hover:scale-110 transition-transform duration-700">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-primary/20 p-1 bg-background flex items-center justify-center group-hover:border-primary transition-colors duration-500">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center text-2xl font-black text-primary group-hover:from-primary group-hover:to-primary/60 group-hover:text-white transition-all duration-500">
                        {member.mage}
                      </div>
                    </div>
                    {/* Active Status Dot */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-primary border-2 border-background rounded-full" />
                  </div>

                  {/* Highlighted Details */}
                  <div className="flex-grow">
                    <div className="flex flex-col mb-4">
                      <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                        {member.isMain ? "Leadership" : "Expert"}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-500">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-white/40 uppercase tracking-widest mt-1">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6 group-hover:border-primary transition-colors duration-500">
                      {member.desc}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                      <div className="flex gap-4">
                        {member.social.linkedin && member.social.linkedin !== "#" && (
                          <a href={member.social.linkedin} className="text-white/30 hover:text-primary transition-colors hover:scale-125 transition-transform duration-300">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.social.twitter && member.social.twitter !== "#" && (
                          <a href={member.social.twitter} className="text-white/30 hover:text-primary transition-colors hover:scale-125 transition-transform duration-300">
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                        {member.social.github && member.social.github !== "#" && (
                          <a href={member.social.github} className="text-white/30 hover:text-primary transition-colors hover:scale-125 transition-transform duration-300">
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-tighter flex items-center gap-2 group/btn transition-colors"
                      >
                        Expand Profile <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="max-w-2xl bg-background/95 border-white/10 backdrop-blur-2xl p-0 overflow-hidden rounded-[2rem] sm:rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          {selectedMember && (
            <div className="relative">
              {/* Modal Background Decoration */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[100px] pointer-events-none" />

              <div className="p-8 sm:p-12" style={{ padding: "1.5rem" }}>
                <div className="flex flex-col sm:flex-row gap-10 items-start mb-12">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-primary/20 p-1 bg-background flex-shrink-0 flex items-center justify-center animate-in fade-in zoom-in duration-500">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-black text-white">
                      {selectedMember.mage}
                    </div>
                  </div>

                  <div className="flex-grow text-left">
                    <DialogHeader className="mb-6">
                      <div className="flex flex-col items-start gap-2">
                        <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                          {selectedMember.isMain ? "Leadership" : "Expertise"}
                        </span>
                        <DialogTitle className="text-4xl sm:text-5xl font-black text-white p-0 m-0 text-left">
                          {selectedMember.name.toUpperCase()}
                        </DialogTitle>
                        <p className="text-sm font-medium text-white/50 uppercase tracking-widest leading-none">
                          {selectedMember.role}
                        </p>
                      </div>
                    </DialogHeader>

                    <DialogDescription className="text-muted-foreground text-lg leading-relaxed mb-8 text-left">
                      {selectedMember.detailedBio}
                    </DialogDescription>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/5 pt-10 text-left">
                  {/* Tech stack */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Cpu className="w-5 h-5 text-primary" />
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Expertise & Skills</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white/70 hover:bg-primary/20 hover:border-primary transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 mb-0">
                      <Globe className="w-5 h-5 text-primary" />
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Connect</h4>
                    </div>
                    <div className="flex flex-wrap gap-4">
                       {selectedMember.social.linkedin && selectedMember.social.linkedin !== "#" && (
                        <a href={selectedMember.social.linkedin} className="text-white/30 hover:text-white transition-colors">
                          <Linkedin className="w-6 h-6" />
                        </a>
                      )}
                      {selectedMember.social.twitter && selectedMember.social.twitter !== "#" && (
                        <a href={selectedMember.social.twitter} className="text-white/30 hover:text-white transition-colors">
                          <Twitter className="w-6 h-6" />
                        </a>
                      )}
                      {selectedMember.social.github && selectedMember.social.github !== "#" && (
                        <a href={selectedMember.social.github} className="text-white/30 hover:text-white transition-colors">
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-6 pt-10 border-t border-white/5">
                  {selectedMember.social.portfolio && selectedMember.social.portfolio !== "#" && (
                    <a
                      href={selectedMember.social.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(var(--primary),0.3)]"
                    >
                      View Portfolio <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA or Values section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center border-t border-white/5 pt-32">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-10">
            WE ARE ALWAYS <br />
            LOOKING FOR <span className="text-primary">TALENT</span>
          </h2>
          <p className="text-muted-foreground text-xl mb-12">
            Interested in joining our journey? We value creativity, ownership, and a passion for excellence above all else.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-white font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(var(--primary),0.3)]"
          >
            Apply to Join Us
          </a>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default TeamPage;
