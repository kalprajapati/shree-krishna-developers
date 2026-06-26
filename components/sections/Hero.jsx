"use client";

import { motion } from "framer-motion";
import LeadForm from "../forms/LeadForm";
import { ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-bg-secondary"
    >
      {/* Background Premium Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 opacity-80"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      {/* Gradient Overlay for Apple-like Bright Minimalist Look */}
      <div className="absolute inset-0 bg-gradient-to-tr from-bg-secondary via-white/85 to-bg-secondary/60" />

      {/* Decorative Gold Glow Effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col gap-8 text-left"
        >
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 px-4 py-1.5 rounded-full text-brand-gold text-xs font-semibold tracking-wider uppercase max-w-max">
            <Cpu className="w-3.5 h-3.5" />
            <span>India's First Semi-Conductor & Smart City Hub</span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-[1.1] font-playfair">
              Secure Your Future in <br />
              <span className="text-shimmer">Dholera SIR</span>
            </h1>

            {/* Powerful quote */}
            <p className="text-lg md:text-xl text-text-secondary font-light max-w-xl leading-relaxed italic">
              "The future belongs to those who build it. Dholera SIR is India's first greenfield smart city—where unmatched scale meets safe, high-yield land investments."
            </p>
          </div>

          {/* Dholera Trust Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-medium text-text-primary/95">100% Government Approved Plots</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-medium text-text-primary/95">Next-gen Smart Infrastructure</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-text-primary hover:bg-brand-gold text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-text-primary/10 hover:border-brand-gold hover:text-brand-gold text-text-primary bg-white/40 font-semibold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              Explore Projects
            </button>
          </div>
        </motion.div>

        {/* Right Content - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <LeadForm />
        </motion.div>
      </div>
    </section>
  );
}
