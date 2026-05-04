import webAppImage from "@/assets/agency-workspace.jpg"; // Utilizing existing asset

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  sections: {
    heading: string;
    content: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "website-development",
    title: "Website Development",
    shortDescription: "Interactive, responsive websites built to blend clean design with powerful functionality.",
    heroImage: webAppImage,
    sections: [
      {
        heading: "Design Meets Purpose",
        content: "We build websites that don’t just look good—they perform. Leveraging modern frameworks, we create immersive experiences that feel dynamic and engaging. From subtle hover effects to scroll-triggered animations, our interfaces are designed to convert visitors into loyal customers."
      },
      {
        heading: "SEO & Performance Built-In",
        content: "A beautiful website is useless if no one can find it. Our development process prioritizes blazing-fast load times and technical SEO best practices from day one, ensuring your digital presence ranks high and retains users."
      },
      {
        heading: "Technologies We Use",
        content:
          "Languages:\n- TypeScript / JavaScript\n\nFrontend:\n- React\n- Vite\n- Tailwind CSS\n- shadcn/ui (Radix UI)\n\nSEO & performance:\n- Technical SEO best practices\n- Core Web Vitals optimization\n\nIntegrations:\n- Headless CMS (when needed)\n- Analytics & tracking"
      },
      {
        heading: "Easy to Update",
        content: "We empower you with intuitive content management architectures. Whether it’s swapping out images, tweaking text, or adding new pages, managing your digital storefront becomes a breeze—no advanced coding required."
      }
    ]
  },
  {
    id: "web-applications",
    title: "Web Applications",
    shortDescription: "Robust, scalable, and secure full-stack web applications tailored to your business logic.",
    heroImage: webAppImage,
    sections: [
      {
        heading: "Complex Logic, Simple Interfaces",
        content: "We transform complicated business requirements into intuitive digital tools. Our web applications are designed with the end-user in mind, optimizing workflows and improving operational efficiency through clean, thoughtfully crafted UI/UX."
      },
      {
        heading: "Scalable Architecture",
        content: "Built on battle-tested frameworks like React and Node.js, our applications are engineered to handle growth. From day one, we design scalable database architectures and API integrations that grow smoothly alongside your user base."
      },
      {
        heading: "Technologies We Use",
        content:
          "Languages:\n- TypeScript / JavaScript\n\nFrontend:\n- React\n- React Router\n- State management (as needed)\n\nBackend:\n- Node.js\n- REST & GraphQL APIs\n\nData:\n- SQL / NoSQL databases (based on use-case)\n\nSecurity & reliability:\n- Auth & role-based access\n- Logging & monitoring\n\nDevOps:\n- CI/CD (GitHub Actions)\n- Cloud deployment"
      },
      {
        heading: "Real-Time Collaboration",
        content: "In modern applications, real-time data is key. We integrate WebSockets and robust state management to ensure your users experience seamless, live updates, making communication and data tracking instant and reliable."
      }
    ]
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    shortDescription: "Crafting memorable, distinct, and cohesive brand experiences that resonate with your audience.",
    heroImage: webAppImage,
    sections: [
      {
        heading: "Strategic Design",
        content: "Your brand is more than just a logo. We dive deep into your market positioning, crafting a visual language that communicates your core values. Every color choice, typography selection, and graphical element is chosen with strategic intent."
      },
      {
        heading: "Cohesive Ecosystem",
        content: "Consistency builds trust. We deliver comprehensive brand guidelines ensuring that your identity translates perfectly across all mediums—from digital platforms to print materials and social media presence."
      },
      {
        heading: "Tools We Use",
        content:
          "Design:\n- Figma\n\nBrand system deliverables:\n- Logo suite (primary/secondary/icon)\n- Color palette & typography\n- Iconography & visual guidelines\n- Social and marketing templates\n\nHandoff:\n- Web-ready assets (SVG/PNG)\n- Print-ready exports (PDF)\n- Style guide documentation"
      },
      {
        heading: "Stand Out In The Noise",
        content: "In a crowded market, distinctiveness is your biggest asset. We create visual identities that capture attention and foster authentic connections, ensuring your brand isn't just seen, but remembered."
      }
    ]
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    shortDescription: "High-performance iOS and Android applications delivering native-like experiences.",
    heroImage: webAppImage,
    sections: [
      {
        heading: "Native-Like Fluidity",
        content: "Using cutting-edge cross-platform technologies like Flutter and React Native, we build mobile apps that feel indistinguishable from native code. Smooth gestures, fast transitions, and optimized performance are standard."
      },
      {
        heading: "User-Centric Navigation",
        content: "Mobile screens demand intentional design. Our UX specialists map out intuitive user journeys, minimizing friction and making complex tasks achievable in just a few taps."
      },
      {
        heading: "Technologies We Use",
        content:
          "Languages:\n- Dart (Flutter)\n- TypeScript / JavaScript (React Native)\n- Swift (iOS)\n- Kotlin (Android)\n\nFrameworks & UI:\n- Flutter\n- React Native\n\nAPIs & Backend integration:\n- REST & GraphQL\n- Node.js / Express\n- Firebase\n\nData & storage:\n- SQLite\n- Secure storage / Keychain\n\nQuality, release & automation:\n- Unit/UI testing\n- CI/CD (GitHub Actions)\n- App Store & Google Play deployment"
      },
      {
        heading: "Launch & Support",
        content: "We handle the entire App Store and Google Play submission process. Once your app is live, we provide ongoing maintenance, feature updates, and performance monitoring to keep your users engaged."
      }
    ]
  }
];
