"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NavbarHome() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10 py-4"
    >
      <div className="max-w-[95%] mx-auto flex justify-between items-center px-4 md:px-8">
        {/* 🏠 Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/photos/UrjaSangam/urjasangam_logo_background.png"
            alt="Urja Sangam Logo"
            width={45}
            height={45}
          />
          <span className="font-semibold text-lg md:text-xl text-white group-hover:text-[#00bfff] transition-all">
            URJA SANGAM
          </span>
        </Link>

        {/* 🔗 Nav Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#home" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition">
            About
          </Link>
          <Link href="#images" className="text-gray-300 hover:text-white transition">
            Images
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition">
            Contact
          </Link>

          
        </div>
      </div>
    </motion.nav>
  );
}
