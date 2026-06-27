"use client";

import { motion } from "framer-motion";
import { TrendingUp, Milestone, Calendar, Sparkles } from "lucide-react";

const chartData = [
  {
    year: "2014",
    price: "₹250",
    unit: "per Sq.Ft",
    phase: "Inception & Zoning",
    details: "Dholera SIR master planning initiated. Land acquisitions begin with initial infrastructure mapping.",
    height: "8%", // Proportional height
    growth: "Baseline",
  },
  {
    year: "2019",
    price: "₹850",
    unit: "per Sq.Ft",
    phase: "Trunk Infrastructure",
    details: "Activation Zone construction begins. Utility ducts, sewage systems, and main access roads laid out.",
    height: "30%", // Proportional height
    growth: "+240% Growth",
  },
  {
    year: "2024",
    price: "₹2,800",
    unit: "per Sq.Ft",
    phase: "Commercial Takeoff",
    details: "Tata-PSMC Semiconductor Fab breaks ground. Expressway near completion, airport structure ready.",
    height: "100%", // Proportional height
    growth: "+1,020% Cumulative",
  },
];

export default function InvestmentGrowth() {
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
    <section id="growth" className="py-24 bg-bg-secondary text-text-primary border-b border-bg-tertiary/50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Heading, Stats and Info */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>Capital Appreciation</span>
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair tracking-tight leading-[1.15]">
                Decade of <br />
                <span className="text-shimmer font-extrabold">Exponential Growth</span>
              </h2>
              <p className="text-sm text-text-secondary font-light leading-relaxed mt-2">
                Dholera SIR land valuations have experienced unprecedented appreciation. What began as a bold greenfield smart city concept in 2014 is now a high-yielding, RERA-approved global manufacturing and semiconductor hub.
              </p>
            </div>

            {/* Growth Stat Grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-4 bg-white rounded-luxury-sm border border-bg-tertiary flex flex-col gap-1 shadow-sm">
                <span className="text-2xl font-bold font-playfair text-[#1F4231] tracking-tight">10.2x</span>
                <span className="text-[10px] text-text-secondary uppercase tracking-wider font-semibold">Value Increase</span>
              </div>
              <div className="p-4 bg-white rounded-luxury-sm border border-bg-tertiary flex flex-col gap-1 shadow-sm">
                <span className="text-2xl font-bold font-playfair text-[#1F4231] tracking-tight">27.3%</span>
                <span className="text-[10px] text-text-secondary uppercase tracking-wider font-semibold">Annualized CAGR</span>
              </div>
            </div>

            {/* Short Timeline bullets */}
            <div className="flex flex-col gap-3.5 mt-2">
              {chartData.map((d, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-gold mt-1.5 flex-shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-text-primary uppercase tracking-wide">
                      {d.year} — {d.phase}
                    </span>
                    <span className="text-[11px] text-text-secondary leading-relaxed font-light">
                      {d.details}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Column Chart Card */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full">
            <div className="bg-white p-8 md:p-10 rounded-luxury shadow-lg border border-bg-tertiary flex flex-col gap-8 relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-bg-tertiary/60 pb-5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-playfair font-bold text-lg text-text-primary">
                    Historical Price Benchmark
                  </h3>
                  <p className="text-[11px] text-text-secondary">
                    Average Land Acquisition Price (NA plots, Activation Area)
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#1F4231]/10 px-3 py-1 rounded-full text-[#1F4231] text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>High Yield asset</span>
                </div>
              </div>

              {/* Chart Body */}
              <div className="h-64 md:h-72 w-full flex items-end justify-between relative mt-4">
                
                {/* Horizontal Gridlines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-text-muted/40">
                  <div className="border-t border-dashed border-bg-tertiary/80 w-full h-0 flex items-start justify-end">
                    <span className="text-[9px] font-mono tracking-wider text-text-muted mt-1">₹3,000/Sq.Ft</span>
                  </div>
                  <div className="border-t border-dashed border-bg-tertiary/80 w-full h-0 flex items-start justify-end">
                    <span className="text-[9px] font-mono tracking-wider text-text-muted mt-1">₹2,000/Sq.Ft</span>
                  </div>
                  <div className="border-t border-dashed border-bg-tertiary/80 w-full h-0 flex items-start justify-end">
                    <span className="text-[9px] font-mono tracking-wider text-text-muted mt-1">₹1,000/Sq.Ft</span>
                  </div>
                  <div className="border-t border-bg-tertiary/80 w-full h-0 flex items-start justify-end">
                    <span className="text-[9px] font-mono tracking-wider text-text-muted mt-1">₹0</span>
                  </div>
                </div>

                {/* Bars Render */}
                <div className="w-full flex items-end justify-around relative z-10 h-full pt-6 px-4">
                  {chartData.map((d, index) => (
                    <div key={d.year} className="flex flex-col items-center gap-3 w-1/4 h-full justify-end group">
                      
                      {/* Price Badge showing above the bar */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1 bg-[#1F4231] text-white px-2 py-1 rounded text-[9px] font-bold tracking-wider absolute mb-[calc(height+4px)] z-20 shadow-sm pointer-events-none">
                        {d.growth}
                      </div>

                      {/* Animated Column Bar */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: d.height }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full rounded-t-xl bg-[#1F4231] hover:bg-[#153023] border-t border-x border-[#C8A96A]/30 group-hover:border-[#C8A96A] transition-all duration-300 shadow-md group-hover:shadow-lg relative overflow-hidden flex flex-col justify-between pt-3"
                      >
                        {/* Shimmer light effect inside the bar */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

                        {/* Top Line accent */}
                        <div className="h-1.5 bg-[#C8A96A] w-full absolute top-0 left-0" />
                        
                        {/* Text Inside Column if room permits (useful for highlighting 2024 value) */}
                        {index === 2 && (
                          <div className="hidden sm:flex flex-col items-center mt-3 justify-center text-center text-white/95 px-1">
                            <span className="text-[10px] font-bold tracking-wider">LATEST</span>
                            <span className="text-[11px] font-extrabold font-playfair">{d.price}</span>
                          </div>
                        )}
                      </motion.div>

                      {/* Year label underneath */}
                      <div className="flex flex-col items-center gap-0.5 mt-1">
                        <span className="text-sm font-bold font-playfair text-text-primary">
                          {d.year}
                        </span>
                        <span className="text-[10px] font-semibold text-brand-gold tracking-wide">
                          {d.price} <span className="text-[9px] text-text-secondary font-light">/Ft</span>
                        </span>
                      </div>

                    </div>
                  ))}
                </div>

              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
