import React, { useEffect, useRef, useState } from 'react';

export default function EnergiaAbout() {
  const statsBarRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  // Reset animation on component mount
  useEffect(() => {
    // Reset all stat values to 0
    const counters = document.querySelectorAll('.energia-stat-value');
    counters.forEach(counter => {
      counter.innerText = '0';
    });
    
    setVisitCount(prev => prev + 1);
    setHasAnimated(false); // Reset animation state on each visit
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll('.energia-stat-value');

    const startCounter = (counter) => {
      const target = +counter.getAttribute('data-value');
      const duration = 2500;
      const intervalTime = 20;
      const increment = target / (duration / intervalTime);

      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          if (target === 8 || target === 300) {
            counter.innerText = target + '+';
          } else if (target === 5000) {
            counter.innerText = '5K+';
          } else {
            counter.innerText = target;
          }
        } else {
          counter.innerText = Math.ceil(current);
        }
      }, intervalTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
              counters.forEach((counter) => startCounter(counter));
            }, 100);
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsBarRef.current) {
      observer.observe(statsBarRef.current);
    }

    return () => {
      if (statsBarRef.current) {
        observer.unobserve(statsBarRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.style.position = 'fixed';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      trail.style.width = '5px';
      trail.style.height = '5px';
      trail.style.borderRadius = '50%';
      trail.style.background = 'rgba(124, 77, 255, 0.6)';
      trail.style.pointerEvents = 'none';
      trail.style.zIndex = '9999';
      trail.style.transition = 'all 0.5s ease';
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(2)';
      }, 50);

      setTimeout(() => {
        trail.remove();
      }, 550);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleExperienceClick = () => {
    window.location.href = '/gallery';
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@300;400;600&display=swap');

        .energia-about-root {
          --primary-color: #7C4DFF;
          --secondary-color: #651FFF;
          --accent-color: #9C78FF;
          --text-color: #FFFFFF;
          --font-heading: 'Playfair Display', serif;
          --font-body: 'Poppins', sans-serif;
        }

        .energia-about-container {
          position: relative;
          z-index: 1;
          width: 90%;
          max-width: 1000px;
          text-align: center;
          padding: 60px 40px;
          margin: 0 auto;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: var(--font-body);
          color: var(--text-color);
        }

        .energia-content-wrapper {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.2s ease-out 0.3s forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .energia-main-heading {
          font-family: var(--font-heading);
          font-size: 5em;
          font-weight: 900;
          letter-spacing: 2px;
          color: var(--text-color);
          margin-bottom: 15px;
          text-shadow: 
            0 0 20px rgba(124, 77, 255, 0.8), 
            0 0 40px rgba(124, 77, 255, 0.6),
            0 0 60px rgba(124, 77, 255, 0.4);
          position: relative;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .energia-main-heading:hover {
          animation: glitch 0.3s ease-in-out;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        .energia-sub-heading {
          font-size: 1.8em;
          font-weight: 400;
          color: var(--accent-color);
          margin-bottom: 35px;
          text-shadow: 0 0 15px rgba(156, 120, 255, 0.8);
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .energia-about-paragraph {
          font-size: 1.3em;
          font-weight: 300;
          line-height: 2;
          max-width: 800px;
          margin: 0 auto 50px auto;
          color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(5px);
          padding: 20px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
        }

        .energia-stats-bar {
          background: rgba(124, 77, 255, 0.08);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 20px;
          border: 1px solid rgba(124, 77, 255, 0.25);
          padding: 35px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 30px;
          margin-bottom: 50px;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 8px 32px 0 rgba(124, 77, 255, 0.2),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 0 rgba(255, 255, 255, 0.1);
        }

        .energia-stats-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(156, 120, 255, 0.25),
            transparent
          );
          transition: left 0.7s ease;
        }

        .energia-stats-bar:hover::before {
          left: 100%;
        }

        .energia-stat-item {
          text-align: center;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .energia-stat-item:hover {
          transform: translateY(-10px) scale(1.05);
        }

        .energia-stat-value {
          font-family: var(--font-heading);
          font-size: 3em;
          font-weight: 700;
          color: var(--text-color);
          min-width: 140px;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(124, 77, 255, 0.6));
        }

        .energia-stat-label {
          font-size: 1em;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 10px;
        }

        .energia-cta-button {
          display: inline-block;
          background: linear-gradient(135deg, var(--secondary-color), var(--primary-color), var(--accent-color));
          background-size: 200% 200%;
          color: var(--text-color);
          padding: 18px 45px;
          border-radius: 50px;
          text-decoration: none;
          font-family: var(--font-heading);
          font-size: 1.2em;
          font-weight: 600;
          border: 2px solid rgba(124, 77, 255, 0.5);
          cursor: pointer;
          box-shadow: 
            0 0 30px rgba(124, 77, 255, 0.5),
            0 10px 25px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .energia-cta-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }

        .energia-cta-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .energia-cta-button:hover {
          transform: scale(1.08) translateY(-5px);
          box-shadow: 
            0 0 50px rgba(124, 77, 255, 0.8),
            0 15px 35px rgba(0, 0, 0, 0.4);
          border-color: var(--accent-color);
        }

        .energia-cta-button span {
          position: relative;
          z-index: 1;
        }

        .energia-scroll-indicator {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          opacity: 0.6;
          z-index: 10;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        .energia-scroll-indicator svg {
          width: 30px;
          height: 30px;
          fill: var(--primary-color);
          filter: drop-shadow(0 0 10px var(--primary-color));
        }

        .visit-counter {
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(124, 77, 255, 0.2);
          border: 1px solid rgba(124, 77, 255, 0.5);
          padding: 10px 20px;
          border-radius: 50px;
          color: var(--accent-color);
          font-family: var(--font-body);
          font-size: 0.9em;
          backdrop-filter: blur(10px);
          z-index: 100;
        }

        @media (max-width: 768px) {
          .energia-main-heading { font-size: 3em; }
          .energia-sub-heading { font-size: 1.4em; }
          .energia-about-paragraph { font-size: 1.1em; padding: 15px; }
          .energia-stats-bar { flex-direction: column; gap: 30px; padding: 25px; }
          .energia-stat-value { font-size: 2.5em; }
          .energia-about-container { padding: 30px 20px; }
          .energia-cta-button { font-size: 1em; padding: 15px 35px; }
          .visit-counter { top: 10px; right: 10px; font-size: 0.8em; padding: 8px 15px; }
        }
      `}</style>

      <div className="energia-about-root">
        <div className="visit-counter">Visit #{visitCount}</div>

        <div className="energia-about-container">
          <div className="energia-content-wrapper">
            <h1 className="energia-main-heading">Power of Athletics</h1>
            <p className="energia-sub-heading">Energia: Where Champions Rise</p>
            <p className="energia-about-paragraph">
              Energia is the electrifying annual sports festival of RGIPT, a dynamic celebration of athletic excellence, competitive spirit, and team pride. It's where champions emerge, bonds strengthen, and every athlete discovers their true potential through thrilling competitions and unforgettable moments.
            </p>

            <div className="energia-stats-bar" ref={statsBarRef}>
              <div className="energia-stat-item">
                <div className="energia-stat-value" data-value="8">0</div>
                <div className="energia-stat-label">Years of Glory</div>
              </div>
              <div className="energia-stat-item">
                <div className="energia-stat-value" data-value="300">0</div>
                <div className="energia-stat-label">Athletes & Teams</div>
              </div>
              <div className="energia-stat-item">
                <div className="energia-stat-value" data-value="5000">0</div>
                <div className="energia-stat-label">Sports Enthusiasts</div>
              </div>
            </div>

            <button onClick={handleExperienceClick} className="energia-cta-button">
              <span>Join The Action</span>
            </button>
          </div>
        </div>

        <div className="energia-scroll-indicator">
          <svg viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </div>
    </>
  );
}