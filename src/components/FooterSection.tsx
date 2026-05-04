import { Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="py-14 sm:py-20 px-4 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">
          {/* Logo + Description */}
          <div className="sm:col-span-2 space-y-3">
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
            <p className="text-muted-foreground text-xs sm:text-sm leading-[1.8] max-w-[300px]">
              We build fast, beautiful websites and digital tools that help your business grow online. Simple as that.
            </p>
          </div>

          {/* Pages */}
          <div className="space-y-4 sm:space-y-5">
            <h5 className="text-foreground text-base sm:text-[19px] font-medium">Pages</h5>
            <div className="space-y-2">
              {[
                { label: "Home", href: "#hero" },
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block text-muted-foreground text-xs sm:text-sm hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4 sm:space-y-5">
            <h5 className="text-foreground text-base sm:text-[19px] font-medium">Legal</h5>
            <div className="space-y-2">
              {["Privacy Policy", "Cookie Policy", "Terms of Service"].map((link) => (
                <a key={link} href="#" className="block text-muted-foreground text-xs sm:text-sm hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex sm:flex-col sm:items-end gap-2">
            {[
              { Icon: Twitter, href: "https://x.com", label: "Twitter" },
              { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-[5px] bg-secondary border border-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                style={{ boxShadow: "inset 0px 1px 20px 0px rgba(255, 255, 255, 0.25)" }}
              >
                <Icon className="w-4 h-4 text-foreground" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} DigitalPriorities. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
