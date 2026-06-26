"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Building, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-tertiary border-t border-bg-tertiary/20 pt-16 pb-8 text-text-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Info Column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Link href="/#home" className="flex flex-col select-none">
            <span className="font-playfair text-xl font-bold tracking-tight text-text-primary">
              SHREE KRUSHNA
            </span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-brand-gold font-inter -mt-1">
              DEVELOPERS
            </span>
          </Link>
          <p className="text-text-secondary text-sm max-w-sm mt-2 leading-relaxed">
            As a leading property consultancy in Dholera SIR, we specialize in high-growth, government-approved residential, commercial, and industrial plots. We guide elite investors to secure tomorrow's fortunes, today.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-3 text-text-secondary text-sm">
              <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>G-10, Circle P Building, SG Highway, Ahmedabad, India</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary text-sm">
              <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>+91 98765 43210 / +91 78901 23456</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary text-sm">
              <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>invest@shreekrushnadevelopers.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-playfair font-semibold text-base text-text-primary tracking-wide">
            Investment Zones
          </h4>
          <nav className="flex flex-col gap-2.5">
            <a
              href="https://dholerasir.gujarat.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-brand-gold transition-colors inline-flex items-center gap-1"
            >
              Dholera SIR Portal
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="/#projects" className="text-sm text-text-secondary hover:text-brand-gold transition-colors">
              Premium Residential Plots
            </a>
            <a href="/#projects" className="text-sm text-text-secondary hover:text-brand-gold transition-colors">
              Commercial Hubs
            </a>
            <a href="/#projects" className="text-sm text-text-secondary hover:text-brand-gold transition-colors">
              Industrial Parcels
            </a>
          </nav>
        </div>

        {/* Trust/Disclaimer Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-playfair font-semibold text-base text-text-primary tracking-wide">
            Safety & Credentials
          </h4>
          <p className="text-text-secondary text-xs leading-relaxed">
            All listed properties are fully verified with 100% transparent NA/NOC titles. We strictly adhere to Dholera Development Authority (DDA) guidelines and RERA compliances.
          </p>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold uppercase tracking-wider mt-2 border border-brand-gold/30 p-2.5 rounded-lg max-w-max">
            <Building className="w-4 h-4" />
            <span>Govt. Approved Developer</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-text-secondary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-secondary">
          &copy; {currentYear} Shree Krushna Developers. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-xs text-text-secondary hover:text-brand-gold transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-text-secondary hover:text-brand-gold transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
