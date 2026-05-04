import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Starter Project",
    description: "Perfect for startups that need a beautiful, high-converting landing page to launch fast.",
    price: "$2,497",
    unit: "/project",
    features: ["Custom design & development", "Mobile responsive", "SEO-optimized", "Delivered in 5–7 days"],
    accent: false,
  },
  {
    title: "Growth Partner",
    description: "Your dedicated digital team — ongoing design, development, and support every month.",
    price: "$4,497",
    unit: "/month",
    features: ["Unlimited requests", "Priority delivery", "Dedicated team", "Ongoing updates & support"],
    accent: true,
  },
];

const PricingSection = () => {
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
            Simple, Honest Pricing
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-[19px] leading-[1.7] max-w-2xl mx-auto">
            No hidden fees. No surprises. Choose the plan that fits your business and get started today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-[900px] mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-secondary border border-border rounded-[20px] p-6 sm:p-8 flex flex-col overflow-hidden"
              style={{ boxShadow: "inset 0px 1px 20px 0px rgba(255, 255, 255, 0.25)" }}
            >
              {plan.accent && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: "hsl(var(--primary))",
                    maskImage: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",
                    WebkitMaskImage: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",
                  }}
                />
              )}
              <div className="relative z-10">
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-foreground text-lg sm:text-xl font-medium mb-2">{plan.title}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-[1.8]">{plan.description}</p>
                </div>
                <div className="flex items-baseline gap-1 mb-6 sm:mb-8">
                  <span className="text-foreground text-3xl sm:text-4xl font-normal tracking-[-0.04em]">{plan.price}</span>
                  <span className="text-muted-foreground text-xs sm:text-sm">{plan.unit}</span>
                </div>
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-xs sm:text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`block text-center py-3 sm:py-4 px-6 rounded-[10px] text-sm font-medium transition-colors ${
                    plan.accent
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-accent text-foreground hover:bg-accent/80"
                  }`}
                  style={plan.accent ? { boxShadow: "inset 0px 1px 20px 0px rgba(255, 255, 255, 0.25)" } : {}}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
