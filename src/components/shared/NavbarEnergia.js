"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavbarEnergia() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#images", label: "Images" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[1000] ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[95%] mx-auto flex justify-between items-center px-4">
          {/* Logo (redirects to home page) */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/photos/UrjaSangam/urjasangam_logo_background.png"
              alt="Logo"
              width={40}
              height={40}
            />
            <span className="text-lg font-bold group-hover:text-[#00c3ff] transition">
              Energia
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-sm">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-gray-300 hover:text-[#00c3ff] transition"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-[70%] h-full bg-black/90 text-white p-6 z-50"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  scrollTo(link.href);
                  setMenuOpen(false);
                }}
                className="block w-full text-left py-3 border-b border-white/10"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
