"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "Residential Plot",
    budget: "₹15L - ₹30L",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone number.");
      setIsSubmitting(false);
      return;
    }

    // Target agency WhatsApp number (e.g., +91 98765 43210)
    const whatsappNumber = "919033090280";

    // Construct pre-filled message text
    const text = `Hello Shree Krushna Developers,

I am interested in investing in Dholera SIR. Here are my details:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Investment Type: ${formData.interest}
• Budget Range: ${formData.budget}
${formData.message ? `• Requirements: ${formData.message}` : ""}

Please share the latest brochures and site availability details.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="w-full glass-panel p-8 md:p-10 rounded-luxury shadow-lg border border-white/50 flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <h3 className="font-playfair font-bold text-2xl text-text-primary">
          Begin Your Advisory
        </h3>
        <p className="text-xs text-text-secondary leading-normal">
          Connect directly with a Senior Portfolio Manager via WhatsApp for exclusive off-market listings.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-text-primary/80">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full px-4 py-3 rounded-xl border border-bg-tertiary focus:border-brand-gold focus:outline-none bg-white/70 text-sm transition-all duration-300"
          />
        </div>

        {/* Phone Input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-text-primary/80">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            required
            className="w-full px-4 py-3 rounded-xl border border-bg-tertiary focus:border-brand-gold focus:outline-none bg-white/70 text-sm transition-all duration-300"
          />
        </div>

        {/* Grid for Budget and Interest */}
        <div className="grid grid-cols-2 gap-4">
          {/* Interest */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-wider text-text-primary/80">
              Interest
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-3 py-3 rounded-xl border border-bg-tertiary focus:border-brand-gold focus:outline-none bg-white/70 text-sm transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="Residential Plot">Residential</option>
              <option value="Commercial Land">Commercial</option>
              <option value="Industrial Plot">Industrial</option>
              <option value="Consultancy Option">Consultancy</option>
            </select>
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-wider text-text-primary/80">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-3 py-3 rounded-xl border border-bg-tertiary focus:border-brand-gold focus:outline-none bg-white/70 text-sm transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="₹15L - ₹30L">₹15L - ₹30L</option>
              <option value="₹30L - ₹50L">₹30L - ₹50L</option>
              <option value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
              <option value="₹1Cr+">₹1Cr+</option>
            </select>
          </div>
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-text-primary/80">
            Preferred Requirements (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Looking for expressway-facing residential plot..."
            rows="2"
            className="w-full px-4 py-3 rounded-xl border border-bg-tertiary focus:border-brand-gold focus:outline-none bg-white/70 text-sm resize-none transition-all duration-300"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 inline-flex items-center justify-center gap-2 py-4 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl text-sm font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer disabled:opacity-85"
        >
          {isSubmitting ? (
            <span>Connecting...</span>
          ) : (
            <>
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire via WhatsApp</span>
            </>
          )}
        </button>
      </form>

    </div>
  );
}
