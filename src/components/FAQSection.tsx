import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer: "We work with startups, small businesses, and growing companies across all industries. Whether you're launching your first website or scaling an existing platform, we're here to help.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most projects are delivered within 1–2 weeks. Simple landing pages can be ready in 3–5 days. We always keep you updated on the timeline.",
  },
  {
    question: "Do I need to know anything technical?",
    answer: "Not at all! We handle everything from design to development. Just tell us your goals and we'll take care of the rest. No coding or technical knowledge required.",
  },
  {
    question: "Can you work with my existing brand?",
    answer: "Absolutely! We're experienced in working within established brand guidelines. Share your brand assets and we'll ensure everything is consistent with your identity.",
  },
  {
    question: "What happens after my website is launched?",
    answer: "We offer ongoing support and maintenance plans. Need updates, new features, or design changes? We're just a message away. Your website keeps growing with your business.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

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
            Questions? Answers.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-[19px] leading-[1.7] max-w-2xl mx-auto">
            Everything you need to know before getting started with DigitalPriorities.
          </p>
        </motion.div>

        <div className="max-w-[800px] mx-auto space-y-2 sm:space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-secondary border border-border rounded-[15px] overflow-hidden cursor-pointer"
              style={{ boxShadow: "inset 0px 1px 20px 0px rgba(255, 255, 255, 0.1)" }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between p-4 sm:p-5 md:p-6">
                <h5 className="text-foreground text-sm sm:text-base md:text-[19px] font-medium leading-[1.4] pr-4">
                  {faq.question}
                </h5>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                </motion.div>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-[1.8]">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
