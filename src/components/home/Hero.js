import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export default function UrjaSangam() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const marqueePositionRef = useRef(0);

  // Particle class
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

  // Initialize sparkles
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

  // Marquee animation
  useEffect(() => {
    const marqueeContent = marqueeRef.current;

    if (marqueeContent) {
      const speed = 0.5;
      const originalWidth = marqueeContent.scrollWidth / 2;

      function scrollMarquee() {
        marqueePositionRef.current += speed;

        if (marqueePositionRef.current >= originalWidth) {
          marqueePositionRef.current = 0;
        }

        marqueeContent.style.transform = `translateX(-${marqueePositionRef.current}px)`;

        animationRef.current = requestAnimationFrame(scrollMarquee);
      }

      scrollMarquee();

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, []);

  const marqueeItems = [
    'INNOVATION',
    'CULTURE',
    'POWER',
    'COMMUNITY',
    'THE CONVERGENCE IS HERE'
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden  text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
        }

        .title-text {
          font-family: 'Exo 2', cursive;
          font-size: clamp(2rem, 15vw, 10rem);
          letter-spacing: clamp(0.2rem, 3vw, 1rem);
          margin-bottom: 2rem;
          text-transform: uppercase;
          color: #fff;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
          animation: fadeInScale 1.5s ease-out forwards;
        }
        
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .sparkles-container {
          width: 100%;
          height: 10rem;
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
          .title-text {
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



      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center pt-20 relative z-10">
        <h1 className="title-text " style={{ fontFamily: 'Exo 2, cursive' }}>URJA SANGAM</h1>

        {/* Sparkles Container */}
        <div ref={containerRef} className="sparkles-container">
          <div className="sparkle-gradient" style={{ '--color': '#87CEEB', left: '50%', transform: 'translateX(-50%)', height: '3px', width: '60%', filter: 'blur(5px)' }}></div>
          <div className="sparkle-gradient" style={{ '--color': '#87CEEB', left: '50%', transform: 'translateX(-50%)', height: '1px', width: '60%' }}></div>
          <div className="sparkle-gradient" style={{ '--color': '#00BFFF', left: '50%', transform: 'translateX(-50%)', height: '6px', width: '20%', filter: 'blur(6px)' }}></div>
          <div className="sparkle-gradient" style={{ '--color': '#00BFFF', left: '50%', transform: 'translateX(-50%)', height: '2px', width: '20%' }}></div>
          <canvas ref={canvasRef} className="sparkles-canvas"></canvas>
          <div className="sparkles-mask"></div>
        </div>

        {/* Marquee Section */}
        <div className="w-full py-4 overflow-hidden -mt-12 z-10"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
          }}>
          <div ref={marqueeRef} className="flex w-fit">
            {/* Original content */}
            {marqueeItems.map((item, index) => (
              <span key={`original-${index}`} className="text-base md:text-xl font-semibold uppercase px-4 md:px-8 whitespace-nowrap text-white/80 tracking-wider">
                {item} <span className="mx-2 md:mx-3 text-gray-500">✦</span>
              </span>
            ))}
            {/* Cloned content for seamless loop */}
            {marqueeItems.map((item, index) => (
              <span key={`clone-${index}`} className="text-base md:text-xl font-semibold uppercase px-4 md:px-8 whitespace-nowrap text-white/80 tracking-wider">
                {item} <span className="mx-2 md:mx-3 text-gray-500">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons flex flex-col md:flex-row gap-6 mt-8 md:mt-16">
          <Link href={"https://unstop.com/college-fests/urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-uttar-pradesh-403716"}><span className="px-10 py-4 text-base font-semibold no-underline border-2 border-white/50 rounded-full text-white bg-transparent transition-all hover:bg-white hover:text-black hover:border-white backdrop-blur-sm">
            Explore Events
          </span></Link>
          <a href="#realms" className="px-10 py-4 text-base font-semibold no-underline border-2 border-white/50 rounded-full text-white bg-transparent transition-all hover:bg-white hover:text-black hover:border-white backdrop-blur-sm">
            About Us
          </a>
        </div>
      </div>
    </div>
  );
}