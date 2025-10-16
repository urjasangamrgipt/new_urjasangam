"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarUrjotsav() {
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
    } else if (pathname !== "/urjotsav") {
      window.location.href = `/urjotsav${id}`;
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
          <button
            onClick={redirectToHome}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/photos/UrjaSangam/urjasangam_logo_background.png"
              alt="Urjotsav Logo"
              width={45}
              height={45}
            />
            <span className="font-semibold text-lg md:text-xl text-white group-hover:text-[#FFD700] transition-all">
              Urjotsav
            </span>
          </button>

          <ul className="hidden lg:flex gap-3 items-center">
            {navLinks.map((link) => (
              <motion.li key={link.href} whileHover={{ scale: 1.05 }}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="px-5 py-2 font-medium text-sm uppercase text-gray-400 hover:text-white transition-all duration-300"
                >
                  {link.label}
                </button>
              </motion.li>
            ))}
          </ul>

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

      <AnimatePresence>
        {isMobileMenuOpen && (
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
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      scrollToSection(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-left text-gray-300 hover:text-[#FFD700] py-3 px-5 rounded-lg transition-all"
                  >
                    {link.label}
                  </button>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
