"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarHome() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const festLinks = [
    { href: '/urjotsav', label: 'URJOTSAV', subtitle: 'Technology & Innovation', color: '#007BFF' },
    { href: '/kaltarang', label: 'KALTARANG', subtitle: 'Culture & Arts', color: '#E53935' },
    { href: '/energia', label: 'ENERGIA', subtitle: 'Sports & Athletics', color: '#9D50FF' },
    { href: '/souhardya', label: 'SOUHARDYA', subtitle: 'Social & Community', color: '#FF9933' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveDropdown(null);
      }
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        
        .cosmic-glow {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 229, 255, 0.1),
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .nav-item-glow::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(90deg, #00e5ff, #7c4dff, #00e5ff);
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s;
          z-index: -1;
          filter: blur(4px);
        }
        
        .nav-item-glow:hover::before {
          opacity: 0.3;
        }
        
        .dropdown-glow {
          box-shadow: 
            0 0 40px rgba(0, 229, 255, 0.2),
            0 0 80px rgba(124, 77, 255, 0.1),
            inset 0 0 20px rgba(255, 255, 255, 0.05);
        }
        
        .fest-card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fest-card-hover:hover {
          transform: translateX(5px);
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
        style={{
          background: isScrolled
            ? 'linear-gradient(180deg, rgba(13, 13, 30, 0.95) 0%, rgba(13, 13, 30, 0.85) 100%)'
            : 'linear-gradient(180deg, rgba(13, 13, 30, 0.7) 0%, transparent 100%)',
          backdropFilter: 'blur(12px) saturate(150%)',
          WebkitBackdropFilter: 'blur(12px) saturate(150%)',
        }}
      >
        <div className="relative">
          {/* Cosmic shimmer effect */}
          <div className="absolute inset-0 cosmic-glow opacity-30" />
          
          <div className="max-w-[90%] mx-auto flex justify-between items-center px-4 relative z-10">
            
            {/* Logos Container - Clickable to Homepage */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r  from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300" />
                <Image
                  src="/photos/Souhardya/soudharya.png"
                  alt="College Logo"
                  width={65}
                  height={65}
                  className="relative z-10 text-2xl rounded-full"
                />
              </motion.div>

              {/* Separator with glow */}
              <div className="relative h-6 w-[1px]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-sm animate-pulse" />
              </div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: -360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300" />
                <Image
                  src="/photos/UrjaSangam/urjasangam_logo_background.png"
                  alt="Urja Sangam Logo"
                  width={40}
                  height={40}
                  className="relative z-10 rounded-full"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-1">
              {/* Home */}
              <Link 
                href="#"
                onMouseEnter={() => setHoveredItem('home')}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-5 py-2 text-[13px] font-medium tracking-wider uppercase text-gray-300 hover:text-white transition-all duration-300 nav-item-glow"
              >
                <span className="relative z-10">Home</span>
                {hoveredItem === 'home' && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>

              {/* About - Smooth Scroll */}
              <Link 
                href="#about"
                onClick={(e) => handleSmoothScroll(e, '#about')}
                onMouseEnter={() => setHoveredItem('about')}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-5 py-2 text-[13px] font-medium tracking-wider uppercase text-gray-300 hover:text-white transition-all duration-300 nav-item-glow"
              >
                <span className="relative z-10">About</span>
                {hoveredItem === 'about' && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>

              {/* Fests Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('fests')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="relative px-5 py-2 text-[13px] font-medium tracking-wider uppercase text-gray-300 hover:text-white transition-all duration-300 nav-item-glow flex items-center gap-1"
                >
                  <span className="relative z-10">Fests</span>
                  <motion.svg
                    animate={{ rotate: activeDropdown === 'fests' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-3 h-3 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                  {activeDropdown === 'fests' && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {activeDropdown === 'fests' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-72 py-3 rounded-xl dropdown-glow"
                      style={{
                        background: 'linear-gradient(135deg, rgba(13, 13, 30, 0.98) 0%, rgba(25, 25, 50, 0.95) 100%)',
                        backdropFilter: 'blur(20px) saturate(150%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                      
                      {festLinks.map((fest, index) => (
                        <motion.div
                          key={fest.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={fest.href}
                            className="group block px-5 py-3 fest-card-hover"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div 
                                  className="font-semibold text-sm mb-1 transition-colors"
                                  style={{ color: fest.color }}
                                >
                                  {fest.label}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {fest.subtitle}
                                </div>
                              </div>
                              <div 
                                className="w-2 h-2 rounded-full animate-pulse"
                                style={{ 
                                  backgroundColor: fest.color,
                                  boxShadow: `0 0 10px ${fest.color}50`
                                }}
                              />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
               <Link 
                href="#events"
                onClick={(e) => handleSmoothScroll(e, '#events')}
                onMouseEnter={() => setHoveredItem('events')}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-5 py-2 text-[13px] font-medium tracking-wider uppercase text-gray-300 hover:text-white transition-all duration-300 nav-item-glow"
              >
                <span className="relative z-10">Events</span>
                {hoveredItem === 'events' && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>

              {/* FAQ */}
              <Link 
                href="/faq"
                onMouseEnter={() => setHoveredItem('faq')}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-5 py-2 text-[13px] font-medium tracking-wider uppercase text-gray-300 hover:text-white transition-all duration-300 nav-item-glow"
              >
                <span className="relative z-10">FAQ</span>
                {hoveredItem === 'faq' && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>

              {/* Gallery */}
              <Link 
                href="#gallery"
                onClick={(e) => handleSmoothScroll(e, '#gallery')}
                onMouseEnter={() => setHoveredItem('gallery')}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-5 py-2 text-[13px] font-medium tracking-wider uppercase text-gray-300 hover:text-white transition-all duration-300 nav-item-glow"
              >
                <span className="relative z-10">Gallery</span>
                {hoveredItem === 'gallery' && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>

              {/* events */}
              
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(124, 77, 255, 0.1))',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div className="space-y-1">
                <motion.div
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                  className="w-5 h-0.5 bg-white"
                />
                <motion.div
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  className="w-5 h-0.5 bg-white"
                />
                <motion.div
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                  className="w-5 h-0.5 bg-white"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ paddingTop: '60px' }}
          >
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(13, 13, 30, 0.98) 0%, rgba(25, 25, 50, 0.95) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderLeft: '1px solid rgba(0, 229, 255, 0.2)',
              }}
            >
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white uppercase tracking-wider text-sm font-medium rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    Home
                  </Link>
                  <Link
                    href="#about"
                    onClick={(e) => {
                      handleSmoothScroll(e, '#about');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-4 py-3 text-white uppercase tracking-wider text-sm font-medium rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    About
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white uppercase tracking-wider text-sm font-medium rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="#gallery"
                    onClick={(e) => {
                      handleSmoothScroll(e, '#gallery');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-4 py-3 text-white uppercase tracking-wider text-sm font-medium rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    Gallery
                  </Link>
                  <Link
                    href="#events"
                    onClick={(e) => {
                      handleSmoothScroll(e, '#events');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-4 py-3 text-white uppercase tracking-wider text-sm font-medium rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    events
                  </Link>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-wider text-cyan-400 mb-3 px-4">Fests</p>
                  <div className="space-y-2">
                    {festLinks.map((fest) => (
                      <Link
                        key={fest.href}
                        href={fest.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                      >
                        <div className="font-medium text-sm" style={{ color: fest.color }}>
                          {fest.label}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {fest.subtitle}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}