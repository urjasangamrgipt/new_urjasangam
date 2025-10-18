"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  // Particle class for sparkles
  class Particle {
    constructor(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * (1.2 - 0.5) + 0.5;
      this.speedX = Math.random() * 0.4 - 0.2;
      this.speedY = Math.random() * 0.4 - 0.2;
      this.alpha = Math.random() * 0.8 + 0.2;
      this.width = width;
      this.height = height;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0) this.x = this.width;
      if (this.x > this.width) this.x = 0;
      if (this.y < 0) this.y = this.height;
      if (this.y > this.height) this.y = 0;
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Initialize sparkles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    function initSparkles() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;

      particlesRef.current = [];
      let numberOfParticles = (width * height / 100000) * 1000 / 5;
      if (numberOfParticles > 200) numberOfParticles = 200;

      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push(new Particle(width, height));
      }
    }

    function animateSparkles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationId = requestAnimationFrame(animateSparkles);
    }

    initSparkles();
    animateSparkles();

    window.addEventListener('resize', initSparkles);

    return () => {
      window.removeEventListener('resize', initSparkles);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden relative"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Teko:wght@700&family=Rajdhani:wght@700&display=swap');

        .kaltarang-title {
          font-family: 'Bebas Neue', cursive;
          font-size: clamp(3rem, 16vw, 12rem);
          letter-spacing: clamp(0.3rem, 3.5vw, 1.5rem);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          font-weight: 900;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 25%, #b91c1c 50%, #dc2626 75%, #ef4444 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(239, 68, 68, 0.3);
          animation: fadeInScale 1.5s ease-out forwards;
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .sparkles-container {
          width: 100%;
          height: 8rem;
          position: relative;
          margin: -7rem auto 0 auto;
        }

        .sparkle-gradient {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-image: linear-gradient(to right, transparent, var(--color), transparent);
        }

        .sparkles-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .sparkles-mask {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          mask-image: radial-gradient(ellipse 60% 150px at 50% 50%, transparent 20%, white);
          -webkit-mask-image: radial-gradient(ellipse 60% 150px at 50% 50%, transparent 20%, white);
        }

        .cta-buttons {
          animation: fadeInUp 1.5s ease-out 0.8s forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .kaltarang-title {
            font-size: 4rem;
            margin-bottom: 1rem;
          }
          .sparkles-container {
            height: 5rem;
            margin-top: -1rem;
          }
          .sparkles-mask {
            mask-image: radial-gradient(ellipse 200px 75px at 50% 50%, transparent 20%, white);
            -webkit-mask-image: radial-gradient(ellipse 200px 75px at 50% 50%, transparent 20%, white);
          }
        }
      `}</style>

      {/* Video Background */}
      <video
        id="hero-video"
        className="absolute inset-0 w-full h-[120%] opacity-40 object-cover z-0"
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
      <div className="absolute inset-0 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Title with Gradient */}
        <h1 className="kaltarang-title">KALTARANG</h1>

        {/* Sparkles Container with Glowing Line */}
        <div ref={containerRef} className="sparkles-container">
          {/* Red gradient lines */}
          <div 
            className="sparkle-gradient" 
            style={{ 
              '--color': '#f87171', 
              height: '3px', 
              width: '60%', 
              filter: 'blur(5px)' 
            }}
          ></div>
          <div 
            className="sparkle-gradient" 
            style={{ 
              '--color': '#f87171', 
              height: '1px', 
              width: '60%' 
            }}
          ></div>
          <div 
            className="sparkle-gradient" 
            style={{ 
              '--color': '#ef4444', 
              height: '6px', 
              width: '20%', 
              filter: 'blur(6px)' 
            }}
          ></div>
          <div 
            className="sparkle-gradient" 
            style={{ 
              '--color': '#ef4444', 
              height: '2px', 
              width: '20%' 
            }}
          ></div>
          
          {/* Sparkles canvas */}
          <canvas ref={canvasRef} className="sparkles-canvas"></canvas>
          <div className="sparkles-mask"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-red-200 tracking-widest font-bold -mt-4 mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
           Celebrate Tradition with Energy
        </p>

        {/* CTA Button */}
        <div className="cta-buttons">
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