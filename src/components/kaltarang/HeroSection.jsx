"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden relative"
    >
      {/* Video Background */}
      {/* Video Background - Scaled to hide watermark */}
      <video
        id="hero-video"
        className="absolute inset-0 w-full h-[120%] opacity-50 object-cover z-0"
        style={{
          objectPosition: "center top",
          bottom: "-10%",
        }}
        autoPlay
        muted
        loop
        playsInline
        src="videos/Kaltarang/kaltarangback.mp4"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0  z-10" />

      {/* Main Content */}
      <div className="relative z-20">
        {/* Title with Gradient Only */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-widest"
          style={{
            background:
              "linear-gradient(135deg, #ef4444 0%, #dc2626 25%, #f87171 50%, #fb923c 75%, #ef4444 100%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          KALTARANG
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xl md:text-2xl mt-4 text-red-200 tracking-wider"
        >
          Innovation & Technology Converge
        </motion.p>
        {/* Explore Events CTA */}
        <div className="mt-6">
          <a
            href="https://unstop.com/college-fests/urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-uttar-pradesh-403716"
            className="px-10 py-4 text-base font-semibold no-underline border-2 border-white/50 rounded-full text-white bg-transparent transition-all hover:bg-white hover:text-black hover:border-white backdrop-blur-sm"
          >
            Explore Events
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
          onClick={scrollToNext}
        >
          <span className="text-sm font-semibold mb-2 tracking-wider">
            SCROLL
          </span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
