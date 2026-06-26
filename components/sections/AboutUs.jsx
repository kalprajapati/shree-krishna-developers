"use client";

import { motion } from "framer-motion";
import { Landmark, Compass, Award, Calendar, CheckSquare, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="py-24 bg-bg-secondary text-text-primary scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Side: Photo Section */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            <div className="relative rounded-luxury overflow-hidden shadow-2xl border border-white/50 aspect-4/5 lg:aspect-square">
              {/* Luxury Estate Image */}
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Shree Krushna Developers Executive Office"
                className="w-full h-full object-cover"
              />
              {/* Dark luxury overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Overlay Stat Label */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-2xl border border-white/40 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold block">
                    Established Hub
                  </span>
                  <span className="font-playfair font-bold text-lg text-text-primary">
                    Dholera SIR Experts
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xl font-bold font-playfair text-brand-gold">100%</span>
                  <span className="text-[9px] uppercase tracking-wider text-text-secondary">
                    Clear Titles
                  </span>
                </div>
              </div>
            </div>

            {/* Behind Layer Accent Card */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-gold/10 rounded-full blur-xl pointer-events-none -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none -z-10" />
          </motion.div>

          {/* Right Side: Paragraphs & Key Points */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs flex items-center gap-1.5">
                <Landmark className="w-4 h-4" />
                <span>Our Heritage & Trust</span>
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair tracking-tight">
                Pioneering Luxury Advisory in India's Premier Smart City
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-text-secondary text-sm font-light leading-relaxed">
              <p>
                Founded on the absolute bedrock of legal integrity, **Shree Krushna Developers** is not a transactional marketplace. We operate as an elite property consultancy and portfolio manager, focusing exclusively on the landmark **Dholera Special Investment Region (SIR)** development.
              </p>
              <p>
                Dholera is undergoing a historic transformation. Backed directly by national and state initiatives, the region is set to host India's largest semiconductor fabrication plants (led by Tata-PSMC), a new international cargo-passenger airport, and a high-speed metro corridor connecting to Ahmedabad. Our mandate is simple: to secure risk-free, highly lucrative land parcels for discerning private investors.
              </p>
            </div>

            {/* Key Trust Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-sm text-text-primary uppercase tracking-wide">
                    Future Safety & Clear Titles
                  </h4>
                  <p className="text-xs text-text-secondary font-light leading-relaxed">
                    We guarantee 100% legally clear Non-Agricultural (NA) titles, verified zoning, and zero litigation risks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-sm text-text-primary uppercase tracking-wide">
                    Mega Government Projects
                  </h4>
                  <p className="text-xs text-text-secondary font-light leading-relaxed">
                    All our selected portfolios are aligned near major developmental nodes like the expressway and airport.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-sm text-text-primary uppercase tracking-wide">
                    Strategic Investment Yields
                  </h4>
                  <p className="text-xs text-text-secondary font-light leading-relaxed">
                    Our clients benefit from structured entry prices, allowing max capital appreciation during infrastructure rollouts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-sm text-text-primary uppercase tracking-wide">
                    Custom Advisory Services
                  </h4>
                  <p className="text-xs text-text-secondary font-light leading-relaxed">
                    From initial digital zoning assessments to physical site visits in luxury travel, we handle all details.
                  </p>
                </div>
              </div>
            </div>

            {/* Government approved seal bar */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-bg-tertiary shadow-sm mt-4">
              <ShieldCheck className="w-6 h-6 text-brand-gold flex-shrink-0" />
              <p className="text-xs text-text-secondary font-medium">
                Our portfolio strictly features properties pre-certified by RERA and the Dholera SIR Development Authority (DSIRDA).
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
