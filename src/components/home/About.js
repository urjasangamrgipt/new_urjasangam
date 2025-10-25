import React, { useEffect, useRef } from 'react';

const Convergence = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');

    let width = container.clientWidth;
    let height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const particleColor = "#FFFFFF";
    const particleDensity = 1200;
    const minSize = 0.4;
    const maxSize = 1.0;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.alpha = Math.random() * 0.8 + 0.2;
      }

      update() {
        const mouse = mouseRef.current;
        if (mouse.x !== null) {
          let dx = this.x - mouse.x;
          let dy = this.y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 50) {
            this.x += dx / distance * 2;
            this.y += dy / distance * 2;
          }
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      particlesRef.current = [];
      let numberOfParticles = (width * height / 100000) * particleDensity / 5;
      if (numberOfParticles > 300) numberOfParticles = 300;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update();
        particlesRef.current[i].draw();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const handleMouseMove = () => { };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .sparkles-mask {
          mask-image: radial-gradient(ellipse 350px 150px at 50% 0%, transparent 20%, white);
          -webkit-mask-image: radial-gradient(ellipse 350px 150px at 50% 0%, transparent 20%, white);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fadeIn-slow {
          animation: fadeIn 1.5s ease-out;
        }
        
        .animate-fadeIn-slower {
          animation: fadeIn 2s ease-out;
        }
      `}</style>

      <div className="font-['Montserrat',sans-serif] max-w-[950px] text-center relative z-10">
        <h1
          className="font-['Bebas_Neue',cursive] text-[clamp(2rem,12vw,8rem)] md:text-[clamp(2rem,15vw,5rem)] font-normal mb-2 tracking-[0.2em] uppercase relative z-20 animate-fadeIn"
          style={{
            color: '#e0e6f9',
            textShadow: '0 0 15px rgba(0, 191, 255, 0.4), 0 0 25px rgba(135, 206, 235, 0.2)'
          }}
        >
          CONVERGENCE
        </h1>

        <div ref={containerRef} className="w-[40rem] max-w-[90vw] h-[6rem] relative mx-auto mb-2">
          <div
            className="absolute top-0 left-0 right-0 h-[2px] w-3/4 mx-auto blur-sm"
            style={{
              backgroundImage: 'linear-gradient(to right, transparent, #6366f1, transparent)'
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-[1px] w-3/4 mx-auto"
            style={{
              backgroundImage: 'linear-gradient(to right, transparent, #6366f1, transparent)'
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-[4px] w-1/4 mx-auto blur-sm"
            style={{
              backgroundImage: 'linear-gradient(to right, transparent, #0ea5e9, transparent)'
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-[1px] w-1/4 mx-auto"
            style={{
              backgroundImage: 'linear-gradient(to right, transparent, #0ea5e9, transparent)'
            }}
          />
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
          <div className="sparkles-mask absolute inset-0 w-full h-full" />
        </div>



        <div className="mb-0">
          <p className="text-[1.3rem] md:text-[1.1rem] leading-[1.7] text-[#cccccc] font-light animate-fadeIn-slow">
            <span
              className="font-semibold"
              style={{
                color: '#87CEEB',
                textShadow: '0 0 10px rgba(135, 206, 235, 0.5)',
              }}
            >
              URJA SANGAM
            </span>{' '}
            is the grand convergence of passion, talent, and innovation — the ultimate
            7-day celebration at <strong className="font-bold text-white">RGIPT</strong>.
            For the first time ever, RGIPT unites its four iconic festivals into one
            electrifying experience — where{' '}
            <strong className="font-bold text-white">Sports</strong>,{' '}
            <strong className="font-bold text-white">Technology</strong>,{' '}
            <strong className="font-bold text-white">Culture</strong>, and{' '}
            <strong className="font-bold text-white">Community</strong> collide to create
            a legacy of brilliance.
          </p>

          <p className="mt-5 text-[1.3rem] md:text-[1.1rem] leading-[1.7] text-[#cccccc] font-light animate-fadeIn-slow">
            Witness the genesis of a new era: a week where the power of{' '}
            <strong className="font-bold text-white">Athleticism</strong>, creativity of{' '}
            <strong className="font-bold text-white">Innovation</strong>, rhythm of{' '}
            <strong className="font-bold text-white">Culture</strong>, and spirit of{' '}
            <strong className="font-bold text-white">Collaboration</strong> merge into one
            unforgettable spectacle. True to its name —{' '}
            <span
              className="font-semibold"
              style={{
                color: '#87CEEB',
                textShadow: '0 0 10px rgba(135, 206, 235, 0.5)',
              }}
            >
              URJA
            </span>{' '}
            (energy) meets{' '}
            <span
              className="font-semibold"
              style={{
                color: '#87CEEB',
                textShadow: '0 0 10px rgba(135, 206, 235, 0.5)',
              }}
            >
              SANGAM
            </span>{' '}
            (confluence) — it transcends boundaries, inspiring students, creators, and
            dreamers to connect, compete, and create something extraordinary.
          </p>

          <p className="mt-5 text-[1.3rem] md:text-[1.1rem] leading-[1.7] text-[#cccccc] font-light animate-fadeIn-slow">
            With <strong className="font-bold text-white">10,000+</strong> participants
            from <strong className="font-bold text-white">50+</strong> colleges,{' '}
            <span
              className="font-semibold"
              style={{
                color: '#87CEEB',
                textShadow: '0 0 10px rgba(135, 206, 235, 0.5)',
              }}
            >
              URJA SANGAM
            </span>{' '}
            stands as a symbol of synergy — where{' '}
            <strong className="font-bold text-white">Passion</strong> meets{' '}
            <strong className="font-bold text-white">Innovation</strong>,{' '}
            <strong className="font-bold text-white">Tradition</strong> meets{' '}
            <strong className="font-bold text-white">Creativity</strong>, and stories
            become part of something timeless.
          </p>

          <div
            className="mt-10 text-[1.8rem] md:text-[1.4rem] font-medium animate-fadeIn-slower"
            style={{
              color: '#87CEEB',
              textShadow: '0 0 20px rgba(135, 206, 235, 0.6)',
            }}
          >
            The saga unfolds from{' '}
            <span
              className="font-['Bebas_Neue',cursive] text-[2.3rem] md:text-[1.8rem] tracking-[1.5px] font-normal text-white"
              style={{
                textShadow:
                  '0 0 25px rgba(0, 191, 255, 0.8), 0 0 40px rgba(135, 206, 235, 0.6)',
              }}
            >
              10th to 16th November
            </span>
            .
          </div>
        </div>











      </div>
    </div>
  );
};

export default Convergence;