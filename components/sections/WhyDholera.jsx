"use client";

import { motion } from "framer-motion";
import { Network, Route, Plane, Train, Cpu, Sparkles } from "lucide-react";

const advantages = [
  {
    id: "adv-1",
    title: "DMIC Global Node",
    description: "Part of Delhi-Mumbai Industrial Corridor",
    icon: Network,
  },
  {
    id: "adv-2",
    title: "6-Lane Expressway",
    description: "High-speed road connectivity reducing transit time to Ahmedabad to under 45 minutes.",
    icon: Route,
  },
  {
    id: "adv-3",
    title: "International Airport",
    description: "State-of-the-art dual-runway cargo and passenger hub connecting Dholera to global trade lanes.",
    icon: Plane,
  },
  {
    id: "adv-4",
    title: "Bullet Train Station",
    description: "Integration into India's high-speed rail network linking Ahmedabad, Dholera, and Mumbai.",
    icon: Train,
  },
  {
    id: "adv-5",
    title: "Smart Greenfield Infrastructure",
    description: "Built from scratch with subterranean utility ducts, automated waste, and smart grids.",
    icon: Cpu,
  },
];

export default function WhyDholera() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="why-dholera" className="py-24 bg-white text-text-primary border-b border-bg-tertiary/50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"
        >
          {/* Left Column: Heading & Subtitle with partition border */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col justify-center lg:border-r lg:border-bg-tertiary/80 lg:pr-16 text-left"
          >
            <div className="flex flex-col gap-3">
              <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Investment Rationale</span>
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair tracking-tight leading-[1.15]">
                Why Dholera is a <br />
                <span className="text-shimmer font-extrabold">Smart Investment?</span>
              </h2>

            </div>

            {/* Small subtle brand seal for detail */}
            <div className="mt-8 pt-8 border-t border-bg-tertiary/60 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span className="text-[10px] uppercase tracking-wider text-text-muted font-semibold">
                  Shree Krushna Developers • Portfolio Advisory
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Advantages Grid */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 content-center"
          >
            {advantages.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === advantages.length - 1;
              return (
                <motion.div
                  variants={itemVariants}
                  key={item.id}
                  className={`flex gap-3.5 p-4 rounded-luxury-sm bg-bg-secondary hover:bg-white hover:shadow-md border border-bg-tertiary/30 transition-all duration-300 group ${isLast ? "sm:col-span-2" : ""
                    }`}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5">

                      <h4 className="font-semibold text-sm text-text-primary tracking-wider group-hover:text-brand-gold transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-text-secondary leading-normal font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
