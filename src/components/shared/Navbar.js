"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Normalize pathname to avoid trailing slash issues
  const normalizedPath =
    pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

  // Check if on home page
  const isHomePage = normalizedPath === "/";

  // Nav links change href depending on whether we're on home page or not
  const navLinks = [
    {
      href: isHomePage ? "#about" : "/#about",
      label: "About",
    },
    {
      href: isHomePage ? "#events" : "/#events",
      label: "Events",
    },
    {
      href: isHomePage ? "#gallery" : "/#gallery",
      label: "Gallery",
    },
    {
      href: "/faq",
      label: "FAQ",
    },
    {
      href: isHomePage ? "#contact" : "/#contact",
      label: "Contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["home", "about", "events", "gallery", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initially to detect active section on page load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-[95%] mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/photos/UrjaSangam/urjasangam_logo_background.png"
                alt="Urja Sangam Logo"
                width={200}
                height={200}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-3 items-center">
            {navLinks.map((link) => {
              // Extract anchor from href for active check, fallback to ''
              const anchor = link.href.split("#")[1] || "";
              const isActive = activeSection === anchor;

              return (
                <motion.li key={link.href} whileHover={{ scale: 1.05 }}>
                  {link.href.startsWith("#") || link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className={`relative px-5 py-2 font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeSection"
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 border border-orange-500/30 -z-10"
                        />
                      )}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative px-5 py-2 font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeSection"
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 border border-orange-500/30 -z-10"
                        />
                      )}
                    </Link>
                  )}
                </motion.li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            className="lg:hidden w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <FiX className="text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <FiMenu className="text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[998]"
              onClick={toggleMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-black/98 backdrop-blur-2xl border-l border-white/10 z-[999] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMobileMenu}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
                    aria-label="Close mobile menu"
                  >
                    <FiX className="text-xl" />
                  </motion.button>
                </div>

                <ul className="flex flex-col gap-3">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-6 py-4 rounded-lg font-medium text-base uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/5"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
