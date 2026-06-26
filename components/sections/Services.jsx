"use client";

import { motion } from "framer-motion";
import { Building2, Car, Scale, TrendingUp, HelpCircle, ArrowRight } from "lucide-react";

const services = [
  {
    id: "serv-1",
    title: "Property Acquisitions",
    description: "Bespoke sourcing and negotiation of premium residential, commercial, and industrial plots. We align our curation with your long-term estate goals.",
    details: [
      "Zoning verification (Residential/Industrial)",
      "Direct negotiation with verified land owners",
      "Comprehensive cadastral survey mapping",
      "Off-market private plot access"
    ],
    icon: Building2,
  },
  {
    id: "serv-2",
    title: "Chauffeured Site Seeing",
    description: "Premium, guided site tours of the Dholera SIR developments. Experience the smart city infrastructure, airport grids, and expressway works first-hand.",
    details: [
      "Executive transport from Ahmedabad airport",
      "On-site project walkthroughs with specialists",
      "Interactive digital maps of upcoming zones",
      "Complimentary premium hospitality arrangements"
    ],
    icon: Car,
  },
  {
    id: "serv-3",
    title: "Legal & Zoning Consultancy",
    description: "Thorough legal compliance checks, title verification, and zoning consultations. Protect your investments from legal discrepancies.",
    details: [
      "RERA and DSIRDA compliance auditing",
      "7/12 land extract and title vetting",
      "Non-Agricultural (NA) verification",
      "NOC documentation assistance"
    ],
    icon: Scale,
  },
  {
    id: "serv-4",
    title: "Strategic Investment Guidance",
    description: "Data-driven feasibility studies and capital appreciation projections based on Dholera SIR development milestones.",
    details: [
      "Entry-price vs resale valuation modeling",
      "Infrastructure milestone tracking reports",
      "Industrial tenancy demand analysis",
      "Taxation and repatriation advisory"
    ],
    icon: TrendingUp,
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleConsultClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-white text-text-primary scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs flex items-center gap-1.5 justify-center">
            <HelpCircle className="w-4 h-4" />
            <span>Advisory Framework</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-playfair tracking-tight">
            Our Elite Capabilities
          </h2>
          <p className="text-sm text-text-secondary max-w-xl font-light mt-1">
            We offer bespoke consultancy services that guarantee safety, compliance, and explosive growth yields for premium land asset classes in Dholera.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                variants={cardVariants}
                key={service.id}
                className="flex flex-col p-8 md:p-10 rounded-luxury bg-bg-secondary hover:bg-white hover:shadow-xl hover:border-brand-gold/30 border border-bg-tertiary/40 transition-all duration-500 group"
              >
                {/* Icon & Title */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] text-text-muted font-mono tracking-widest font-semibold">
                    [0{service.id.slice(-1)}]
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-playfair text-text-primary mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-xs text-text-secondary leading-relaxed font-light mb-6">
                  {service.description}
                </p>

                <div className="h-[1px] bg-bg-tertiary w-full mb-6" />

                {/* Sublist */}
                <div className="flex flex-col gap-2.5 mb-8">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleConsultClick}
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-text-primary group-hover:text-brand-gold transition-colors duration-300 w-max cursor-pointer"
                >
                  Consult Specialist
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
