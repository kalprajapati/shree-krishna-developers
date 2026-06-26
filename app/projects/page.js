"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, ChevronRight, X, Sparkles, Scale, Info, CheckCircle2, Building, MessageCircle } from "lucide-react";
import Link from "next/link";

const allProjects = [
  {
    id: "proj-1",
    title: "Krushna Elite Residency",
    category: "Residential",
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
    category: "Industrial",
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
    category: "Residential",
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
  },
  {
    id: "proj-4",
    title: "Krushna Capital Boulevard",
    category: "Commercial",
    subtitle: "High-Traffic Commercial Plots",
    location: "City Center (Zone 2), Dholera SIR",
    price: "₹60 Lakhs onwards",
    size: "4,500 to 12,000 Sq.Ft.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Premium commercial spaces intended for shopping complexes, corporate offices, and luxury hotels in Dholera's city center.",
    longDesc: "Krushna Capital Boulevard is in Dholera SIR's primary retail and office zone. It is designed to capture pedestrian flow from the surrounding high-density residential blocks. As corporate entities initiate their smart offices in Dholera, the demand for premium corporate infrastructure will surge rapidly.",
    features: [
      "Commercial zoning clearance",
      "1.5 to 2.5 Floor Space Index (FSI)",
      "Adjoining 150-space public parking",
      "Approved for multi-story builds",
      "High capacity telecom wiring",
      "100% legal title guaranteed"
    ],
    highlights: "Targeted for retail developers looking to tap into Dholera's upcoming population centers."
  },
  {
    id: "proj-5",
    title: "Krushna Industrial Logistics Park",
    category: "Industrial",
    subtitle: "Strategic Warehousing Plots",
    location: "Logistics Zone, Dholera SIR",
    price: "₹1.2 Crore onwards",
    size: "20,000 to 90,000 Sq.Ft.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    shortDesc: "High-capacity logistics and warehousing lands positioned near the upcoming Dholera International Airport cargo complex.",
    longDesc: "This massive warehousing and industrial layout is strategically located within the high-access transport zone. Designed for cold storage, logistics hubs, and light manufacturing, the project is backed by high-capacity electrical grids and heavy-vehicle access roads already constructed by the government.",
    features: [
      "Dedicated heavy vehicle entry-exit gates",
      "Pre-installed storm-water drains",
      "Dual source industrial power grid connection",
      "Near dedicated freight corridor station",
      "100% legal titles with industrial NOCs",
      "24/7 security patrol services"
    ],
    highlights: "Located just 12 minutes from the cargo loading bay of the Dholera International Airport."
  },
  {
    id: "proj-6",
    title: "Krushna Premium Commercial Boulevard",
    category: "Commercial",
    subtitle: "High-Visibility Commercial Frontage",
    location: "Airport Ring Road Corridor, Dholera SIR",
    price: "₹80 Lakhs onwards",
    size: "5,000 to 18,000 Sq.Ft.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    shortDesc: "High-visibility plots on the main Airport Ring Road, ideal for premium showrooms, car dealerships, and corporate headquarters.",
    longDesc: "Positioned directly on the primary ring road linking Dholera International Airport to the main smart city zones, these plots offer maximum exposure for high-end brands. Highly recommended for commercial property developers aiming for premium long-term corporate leasing.",
    features: [
      "Direct Ring Road frontage (100m width)",
      "High commercial FSI eligibility",
      "Ready utility connections to property boundary",
      "RERA approved and title cleared",
      "Immediate registry availability",
      "Landscaping and perimeter completed"
    ],
    highlights: "Direct visibility along the high-traffic airport corridor guarantees excellent long-term corporate tenant potential."
  }
];

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const filters = ["All", "Residential", "Commercial", "Industrial"];

  const filteredProjects = allProjects.filter((project) => {
    const matchesFilter = selectedFilter === "All" || project.category === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const selectedProject = allProjects.find((p) => p.id === selectedId);

  const handleOpenWhatsApp = (projectTitle) => {
    const text = `Hello Shree Krushna Developers, I would like to receive detailed brochures, pricing, and plot maps for "${projectTitle}" in Dholera SIR. Please connect me with an advisor.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-bg-secondary pt-32 pb-24 text-text-primary">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Page Header */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-2 text-brand-gold font-semibold uppercase tracking-widest text-xs">
            <Building className="w-4 h-4" />
            <span>Exclusive Catalog</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-playfair tracking-tight">
            Dholera SIR Portfolio
          </h1>
          <p className="text-sm text-text-secondary max-w-xl font-light leading-relaxed">
            Browse our pre-vetted, legal-title cleared residential, commercial, and industrial plots. Filter by zone and infrastructure category.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-12 bg-white p-4 rounded-2xl shadow-sm border border-bg-tertiary">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedFilter === filter
                    ? "bg-text-primary text-white shadow-sm"
                    : "bg-bg-secondary text-text-secondary hover:text-text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search by title, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-bg-tertiary focus:border-brand-gold focus:outline-none bg-bg-secondary text-xs transition-all duration-300"
            />
            <Search className="w-4 h-4 text-text-secondary absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Catalog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedId(project.id)}
                key={project.id}
                className="flex flex-col rounded-luxury overflow-hidden bg-white hover:shadow-xl border border-bg-tertiary/20 cursor-pointer group transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-text-primary shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex flex-col flex-grow gap-4 justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1 text-[11px] text-text-secondary">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-playfair font-bold text-lg md:text-xl text-text-primary group-hover:text-brand-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-secondary font-light line-clamp-2 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-bg-tertiary/60 pt-4 mt-2">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-text-secondary uppercase tracking-widest font-semibold">
                        Guide Price
                      </span>
                      <span className="font-semibold text-brand-gold text-xs">
                        {project.price}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-text-primary group-hover:text-brand-gold hover:underline inline-flex items-center gap-0.5">
                      View details
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white border border-bg-tertiary rounded-luxury">
            <p className="text-sm text-text-secondary font-light">
              No matching investment opportunities found. Please refine your filter parameters.
            </p>
          </div>
        )}
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
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                <img
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
                    <MessageCircle className="w-4 h-4 fill-white" />
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
    </div>
  );
}
