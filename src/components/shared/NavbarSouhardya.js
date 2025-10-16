"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarSouhardya() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else if (pathname !== "/souhardya") {
      window.location.href = `/souhardya${id}`;
    }
  };

  const redirectToHome = () => (window.location.href = "/");

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[95%] mx-auto flex justify-between items-center px-4 md:px-8">
          {/* 🔵 Logo — redirects to homepage */}
          <button
            onClick={redirectToHome}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/photos/UrjaSangam/urjasangam_logo_background.png"
              alt="Souhardya Logo"
              width={45}
              height={45}
            />
            <span className="font-semibold text-lg md:text-xl text-white group-hover:text-[#33aaff] transition-all">
              Souhardya
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-3 items-center">
            {navLinks.map((link) => (
              <motion.li key={link.href} whileHover={{ scale: 1.05 }}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="px-5 py-2 font-medium text-sm uppercase text-gray-400 hover:text-[#33aaff] transition-all duration-300"
                >
                  {link.label}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[998]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-black/95 border-l border-white/10 z-[999]"
            >
              <div className="p-8">
                <div className="flex justify-end mb-8">
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <FiX className="text-2xl text-white" />
                  </button>
                </div>

                <ul className="flex flex-col gap-3">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <button
                        onClick={() => {
                          scrollToSection(link.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block text-left w-full px-6 py-4 rounded-lg font-medium text-base uppercase tracking-wider text-gray-300 hover:text-[#33aaff] hover:bg-white/5 transition-all"
                      >
                        {link.label}
                      </button>
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
