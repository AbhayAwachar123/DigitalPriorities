import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Services", link: "#services" },
  { name: "About", link: "#about" },
  { name: "Team", link: "/team" },
  { name: "Testimonials", link: "#testimonials" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px]">
      <div
        className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 rounded-2xl backdrop-blur-xl bg-foreground/[0.03] border border-foreground/10"
        style={{
          boxShadow: "0 10px 40px rgba(0,0,0,0.4), inset 0 1px 20px rgba(255,255,255,0.08)",
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          {/* replace "/assets/logo.png" with the actual path to your logo image */}
          <img
            src={logo}
            alt="DigitalPriorities logo"
            className="w-8 h-8 rounded-lg object-cover"
          />
          <span className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
            DigitalPriorities
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-foreground/70 hover:text-foreground transition-colors duration-300 text-sm tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-primary-foreground transition-all duration-300 relative overflow-hidden group bg-primary hover:bg-primary/90"
          style={{ boxShadow: "inset 0 1px 15px rgba(255,255,255,0.25)" }}
        >
          <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-foreground blur-2xl transition duration-500" />
          <span className="relative">Contact Us</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground/80 hover:text-foreground transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-2xl backdrop-blur-xl bg-foreground/[0.03] border border-foreground/10 p-4 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMobileOpen(false)}
              className="block text-foreground/70 hover:text-foreground transition-colors text-sm py-2"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
