"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, MapPin, Sparkles, Scale, Info, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    id: "proj-1",
    title: "Krushna Elite Residency",
    category: "Residential Plots",
    subtitle: "Premium Smart Villa Lands",
    location: "Zone 1 (Activation Area), Dholera SIR",
    price: "₹25 Lakhs onwards",
    size: "1,800 to 5,000 Sq.Ft.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Premium residential plots located in the highly developed Activation Zone, just minutes from the core Smart City administrative hub.",
    longDesc: "Krushna Elite Residency is a meticulously planned residential community in Dholera SIR's premier Phase 1 Activation Area. Positioned near the commercial core, it offers high capital growth potential. All roads, water mains, and power lines are fully laid out. With heavy government investment in local administrative centers, this zone is already designated for immediate occupancy.",
    features: [
      "100% Clear Title (NA/NOC)",
      "TP Scheme Approved",
      "Immediate Registry & Possession",
      "Walking distance to Metro Station",
      "24/7 Smart Water Grid Connection",
      "RERA Compliant Development"
    ],
    highlights: "Proximity to the administrative building makes this the safest residential entry point in Dholera SIR."
  },
  {
    id: "proj-2",
    title: "Krushna Semiconductor Hub Plots",
    category: "Industrial & Mixed-Use",
    subtitle: "High-Yield Commercial Assets",
    location: "Semiconductor Zone, Dholera SIR",
    price: "₹75 Lakhs onwards",
    size: "10,000 to 45,000 Sq.Ft.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Strategic industrial and commercial plots situated adjacent to the approved Tata-PSMC semiconductor fabrication site.",
    longDesc: "Located in the heart of Dholera's high-tech industrial manufacturing corridor, this project targets institutional and high-net-worth investors. Following the government's approval of massive multi-billion dollar semiconductor plants in Dholera, the region is preparing for a high influx of tech professionals, making commercial and logistical plots extremely high-yielding.",
    features: [
      "Heavy industrial zoning approval",
      "Direct 250m Expressway access",
      "High power load availability",
      "Close to major freight corridors",
      "Dedicated boundary walling",
      "Pre-vetted environmental clearance"
    ],
    highlights: "Located within 3km of the Tata Semiconductor Fab plant, providing unmatched future rental yield."
  },
  {
    id: "proj-3",
    title: "Krushna Signature County",
    category: "Luxury Villa Lands",
    subtitle: "Exclusive Gated Estate",
    location: "Expressway Corridor, Dholera SIR",
    price: "₹45 Lakhs onwards",
    size: "3,000 to 8,500 Sq.Ft.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    shortDesc: "An premium gated estate project boasting smart city integration, close proximity to the upcoming airport, and direct highway connectivity.",
    longDesc: "Krushna Signature County offers private estate plots for investors seeking high-end exclusivity. Backed by wide tree-lined avenues, underground fiber optics, and secure gated perimeters, it provides an exquisite living layout. It is situated along the main Ahmedabad-Dholera Expressway, ensuring quick connectivity to Ahmedabad airport within 45 minutes.",
    features: [
      "Premium luxury clubhouse access",
      "Direct frontage on 60m wide road",
      "Theme garden & plantation plots",
      "Vastu-compliant layouts",
      "Underground smart electricity cables",
      "24-hour video surveillance system"
    ],
    highlights: "Positioned directly on the Ahmedabad-Dholera Expressway corridor, facilitating seamless commute."
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedProject = featuredProjects.find((p) => p.id === selectedId);

  const handleOpenWhatsApp = (projectTitle) => {
    const text = `Hello Shree Krushna Developers, I would like to receive detailed brochures, pricing, and plot maps for "${projectTitle}" in Dholera SIR. Please connect me with an advisor.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="projects" className="py-24 bg-white text-text-primary scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-brand-gold font-semibold uppercase tracking-widest text-xs">
              <Sparkles className="w-4 h-4" />
              <span>Investment Showcases</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair tracking-tight">
              Featured Opportunities
            </h2>
            <p className="text-sm text-text-secondary max-w-xl font-light mt-1">
              Select a project card to view high-resolution blueprints, zoning clearances, and distance metrics to major Dholera infrastructure hubs.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-gold-dark transition-colors duration-300 flex-shrink-0"
          >
            View More Projects
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              key={project.id}
              className="flex flex-col rounded-luxury overflow-hidden bg-bg-secondary hover:shadow-xl transition-all duration-500 border border-bg-tertiary/20 cursor-pointer group"
              whileHover={{ y: -6 }}
            >
              {/* Image Container */}
              <motion.div
                layoutId={`card-image-${project.id}`}
                className="relative h-64 w-full overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 bg-white/95 px-3.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-text-primary shadow-sm">
                  {project.category}
                </div>
              </motion.div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 gap-4 justify-between">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1 text-xs text-text-secondary">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-playfair font-bold text-xl md:text-2xl text-text-primary group-hover:text-brand-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-text-secondary font-light line-clamp-2 mt-1">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-bg-tertiary/60 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-text-secondary uppercase tracking-widest font-semibold">
                      Guide Price
                    </span>
                    <span className="font-semibold text-brand-gold text-sm">
                      {project.price}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-text-primary group-hover:text-brand-gold hover:underline inline-flex items-center gap-1">
                    Explore Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal Overlay Detail View */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              layoutId={`card-container-${selectedProject.id}`}
              className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-luxury overflow-y-auto shadow-2xl z-10 flex flex-col md:grid md:grid-cols-12"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-25 bg-white/90 text-text-primary p-2 rounded-full hover:bg-brand-gold hover:text-white transition-colors shadow-md focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Image Section */}
              <div className="md:col-span-5 relative min-h-[300px] md:h-full w-full">
                <motion.img
                  layoutId={`card-image-${selectedProject.id}`}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-black/10 md:to-transparent" />
                <div className="absolute bottom-6 left-6 text-white flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold-light bg-black/45 px-2.5 py-0.5 rounded-full max-w-max">
                    {selectedProject.category}
                  </span>
                  <h4 className="font-playfair font-bold text-2xl">
                    {selectedProject.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-white/80">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold-light" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="md:col-span-7 p-8 flex flex-col gap-6 justify-between bg-bg-secondary">
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block mb-1">
                      {selectedProject.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold font-playfair text-text-primary">
                      Project Specifications
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs font-medium border-y border-bg-tertiary py-3">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-text-secondary text-[10px] uppercase tracking-wider">
                        Average Plot Size
                      </span>
                      <span className="text-text-primary font-bold">
                        {selectedProject.size}
                      </span>
                    </div>
                    <div className="h-8 w-[1px] bg-bg-tertiary hidden sm:block" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-text-secondary text-[10px] uppercase tracking-wider">
                        Pricing Tier
                      </span>
                      <span className="text-text-primary font-bold">
                        {selectedProject.price}
                      </span>
                    </div>
                    <div className="h-8 w-[1px] bg-bg-tertiary hidden sm:block" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-text-secondary text-[10px] uppercase tracking-wider">
                        Infrastructure Status
                      </span>
                      <span className="text-brand-gold font-bold flex items-center gap-1">
                        <Scale className="w-3 h-3" /> Fully Approved
                      </span>
                    </div>
                  </div>

                  {/* Long description */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary/90 flex items-center gap-1">
                      <Info className="w-3.5 h-3.5 text-brand-gold" />
                      Executive Summary
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed font-light">
                      {selectedProject.longDesc}
                    </p>
                  </div>

                  {/* Key highlights quote box */}
                  <div className="p-4 bg-brand-gold/5 rounded-xl border-l-2 border-brand-gold">
                    <span className="text-xs font-bold text-brand-gold block uppercase tracking-wider mb-0.5">
                      Advisory Highlight
                    </span>
                    <p className="text-xs text-text-primary italic font-light">
                      "{selectedProject.highlights}"
                    </p>
                  </div>

                  {/* List features */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary/90">
                      Legal Compliance & Approvals
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 pt-4 border-t border-bg-tertiary">
                  <button
                    onClick={() => handleOpenWhatsApp(selectedProject.title)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    Request Title Documents
                  </button>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="w-full sm:w-auto px-6 py-3.5 border border-text-primary/10 hover:border-text-primary text-text-primary rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer bg-white"
                  >
                    Close Brochure
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
