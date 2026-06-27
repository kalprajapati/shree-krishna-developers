"use client";

import Hero from "@/components/sections/Hero";
import WhyDholera from "@/components/sections/WhyDholera";
import Projects from "@/components/sections/Projects";
import InvestmentGrowth from "@/components/sections/InvestmentGrowth";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Clock, User, ShieldAlert, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [booking, setBooking] = useState({
    date: "",
    timeSlot: "11:00 AM - 12:00 PM",
    mode: "In-Person (Ahmedabad Office)",
    name: "",
    phone: "",
  });
  
  const [bookedStatus, setBookedStatus] = useState(false);

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookSession = (e) => {
    e.preventDefault();
    if (!booking.name || !booking.phone || !booking.date) {
      alert("Please fill in your Name, Phone and preferred Date.");
      return;
    }
    
    // Construct message
    const text = `Hello Shree Krushna Developers,

I would like to book a private consultation session:
• Investor Name: ${booking.name}
• Contact Phone: ${booking.phone}
• Selected Date: ${booking.date}
• Selected Time Slot: ${booking.timeSlot}
• Advisory Mode: ${booking.mode}

Please confirm if this slot is available.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919876543210&text=${encodedText}`;
    
    setBookedStatus(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setBookedStatus(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full bg-bg-secondary overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Why Dholera Section */}
      <WhyDholera />

      {/* Featured Projects Section */}
      <Projects />

      {/* Investment Growth Section */}
      <InvestmentGrowth />

      {/* About Us Section */}
      <AboutUs />

      {/* Services Section */}
      <Services />

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-bg-secondary text-text-primary scroll-mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Private Advisory</span>
                </span>
                <h2 className="text-3xl md:text-5xl font-bold font-playfair tracking-tight">
                  Schedule an Exclusive Consultation
                </h2>
                <p className="text-sm text-text-secondary font-light leading-relaxed mt-2">
                  Investing in the Special Investment Region requires careful planning and due diligence. Select a preferred date and time to reserve a slot with our Senior Portfolio Advisers.
                </p>
              </div>

              {/* Office Details */}
              <div className="flex flex-col gap-4 bg-white p-6 md:p-8 rounded-luxury border border-bg-tertiary shadow-sm">
                <h3 className="font-playfair font-bold text-lg text-text-primary mb-2">
                  Ahmedabad Headquarters
                </h3>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                        Address
                      </span>
                      <span className="text-xs text-text-secondary font-light mt-0.5 leading-relaxed">
                        G-10, Circle P Building, SG Highway, Ahmedabad, Gujarat 380054
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                        Direct Advisory Line
                      </span>
                      <span className="text-xs text-text-secondary font-light mt-0.5">
                        +91 98765 43210 (Mon-Sat, 9AM to 7PM)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                        Official Inquiries
                      </span>
                      <span className="text-xs text-text-secondary font-light mt-0.5">
                        invest@shreekrushnadevelopers.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-red-100 max-w-lg">
                <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-text-secondary leading-normal">
                  <strong>Notice to Foreign Investors:</strong> Dholera land acquisitions are subject to RBI guidelines (FEMA regulations). We provide complete legal consultancy for overseas and NRI clients.
                </p>
              </div>
            </div>

            {/* Right Booking Column */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-white p-8 md:p-10 rounded-luxury shadow-lg border border-bg-tertiary flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h3 className="font-playfair font-bold text-xl text-text-primary">
                    Reserve Appointment
                  </h3>
                  <p className="text-[11px] text-text-secondary">
                    Select your preferred schedule below. Our officer will verify availability.
                  </p>
                </div>

                <form onSubmit={handleBookSession} className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="booking-name" className="text-[10px] font-bold uppercase tracking-wider text-text-primary/75">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="booking-name"
                        name="name"
                        value={booking.name}
                        onChange={handleBookingChange}
                        placeholder="Investor Name"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-bg-tertiary focus:border-brand-gold focus:outline-none bg-bg-secondary text-xs transition-all"
                      />
                      <User className="w-4 h-4 text-text-secondary absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="booking-phone" className="text-[10px] font-bold uppercase tracking-wider text-text-primary/75">
                      Contact Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="booking-phone"
                        name="phone"
                        value={booking.phone}
                        onChange={handleBookingChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-bg-tertiary focus:border-brand-gold focus:outline-none bg-bg-secondary text-xs transition-all"
                      />
                      <Phone className="w-4 h-4 text-text-secondary absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="booking-date" className="text-[10px] font-bold uppercase tracking-wider text-text-primary/75">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="booking-date"
                        name="date"
                        value={booking.date}
                        onChange={handleBookingChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-bg-tertiary focus:border-brand-gold focus:outline-none bg-bg-secondary text-xs transition-all"
                      />
                      <Calendar className="w-4 h-4 text-text-secondary absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Time slots */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="booking-time" className="text-[10px] font-bold uppercase tracking-wider text-text-primary/75">
                      Preferred Time Slot
                    </label>
                    <select
                      id="booking-time"
                      name="timeSlot"
                      value={booking.timeSlot}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-3 rounded-xl border border-bg-tertiary focus:border-brand-gold focus:outline-none bg-bg-secondary text-xs appearance-none cursor-pointer transition-all"
                    >
                      <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                      <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                      <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                    </select>
                  </div>

                  {/* Advisory Mode */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="booking-mode" className="text-[10px] font-bold uppercase tracking-wider text-text-primary/75">
                      Consultation Mode
                    </label>
                    <select
                      id="booking-mode"
                      name="mode"
                      value={booking.mode}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-3 rounded-xl border border-bg-tertiary focus:border-brand-gold focus:outline-none bg-bg-secondary text-xs appearance-none cursor-pointer transition-all"
                    >
                      <option value="In-Person (Ahmedabad Office)">In-Person (Ahmedabad Office)</option>
                      <option value="Video Conference (Zoom/Google Meet)">Video Conference (Zoom/Google Meet)</option>
                      <option value="Direct Call / WhatsApp Audio">Direct Call / WhatsApp Audio</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={bookedStatus}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-4 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer disabled:opacity-85"
                  >
                    {bookedStatus ? (
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-white" /> Requesting...
                      </span>
                    ) : (
                      <span>Request Appointment</span>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
