"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Projects", href: "/#projects" },
  { name: "About Us", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    // If we're on a sub-page (like /projects) and click a hash link, go to homepage first
    if (pathname !== "/" && href.startsWith("/#")) {
      router.push(href);
      return;
    }

    const targetId = href.replace("/#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      if (window.lenis) {
        window.lenis.scrollTo(targetElement, { offset: -80 });
      } else {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (href === "/#home") {
      if (window.lenis) {
        window.lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "py-4 glass-panel shadow-sm bg-white"
          : "py-6 bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/#home"
            onClick={(e) => handleLinkClick(e, "/#home")}
            className="flex flex-col select-none"
          >
            <span className="font-playfair text-xl md:text-2xl font-bold tracking-tight text-text-primary">
              SHREE KRUSHNA
            </span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-brand-gold font-inter -mt-1">
              DEVELOPERS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium tracking-wide text-text-secondary hover:text-brand-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "/#contact")}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300 text-xs font-semibold uppercase tracking-wider"
            >
              Inquire Now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-24 pb-8 px-6 bg-white flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-lg font-playfair font-semibold text-text-primary hover:text-brand-gold block transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="h-[1px] bg-bg-tertiary w-full" />
              <p className="text-xs text-text-secondary tracking-wider">
                Dholera SIR Investment Hub
              </p>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "/#contact")}
                className="w-full py-4 text-center rounded-full bg-brand-gold text-white font-semibold text-sm uppercase tracking-widest shadow-sm hover:bg-brand-gold-dark transition-colors duration-300"
              >
                Inquire Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
