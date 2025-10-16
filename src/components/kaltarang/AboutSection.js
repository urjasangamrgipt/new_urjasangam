import React, { useEffect, useRef, useState } from 'react';

export default function KaltarangAbout() {
  const statsBarRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const counters = document.querySelectorAll('.kaltarang-stat-value');

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
          if (target === 12 || target === 500) {
            counter.innerText = target + '+';
          } else if (target === 15000) {
            counter.innerText = '15K+';
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
            counters.forEach((counter) => startCounter(counter));
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

  // Removed cursor trail effect



  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@300;400;600&display=swap');

        .kaltarang-about-root {
          --primary-color: #E53935;
          --secondary-color: #C62828;
          --accent-color: #FF5252;
          --text-color: #FFFFFF;
          --font-heading: 'Playfair Display', serif;
          --font-body: 'Poppins', sans-serif;
        }

        .kaltarang-about-container {
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

        .kaltarang-content-wrapper {
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

        .kaltarang-main-heading {
          font-family: var(--font-heading);
          font-size: 5em;
          font-weight: 900;
          letter-spacing: 2px;
          color: var(--text-color);
          margin-bottom: 15px;
          text-shadow: 
            0 0 20px rgba(229, 57, 53, 0.8), 
            0 0 40px rgba(229, 57, 53, 0.6),
            0 0 60px rgba(229, 57, 53, 0.4);
          position: relative;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .kaltarang-main-heading:hover {
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

        .kaltarang-sub-heading {
          font-size: 1.8em;
          font-weight: 400;
          color: var(--accent-color);
          margin-bottom: 35px;
          text-shadow: 0 0 15px rgba(255, 82, 82, 0.8);
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .kaltarang-about-paragraph {
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

        .kaltarang-stats-bar {
          background: rgba(229, 57, 53, 0.08);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 20px;
          border: 1px solid rgba(229, 57, 53, 0.25);
          padding: 35px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 30px;
          margin-bottom: 50px;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 8px 32px 0 rgba(229, 57, 53, 0.2),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 0 rgba(255, 255, 255, 0.1);
        }

        .kaltarang-stats-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 82, 82, 0.25),
            transparent
          );
          transition: left 0.7s ease;
        }

        .kaltarang-stats-bar:hover::before {
          left: 100%;
        }

        .kaltarang-stat-item {
          text-align: center;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .kaltarang-stat-item:hover {
          transform: translateY(-10px) scale(1.05);
        }

        .kaltarang-stat-value {
          font-family: var(--font-heading);
          font-size: 3em;
          font-weight: 700;
          color: var(--text-color);
          min-width: 140px;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(229, 57, 53, 0.6));
        }

        .kaltarang-stat-label {
          font-size: 1em;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 10px;
        }

        .kaltarang-cta-button {
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
          border: 2px solid rgba(229, 57, 53, 0.5);
          cursor: pointer;
          box-shadow: 
            0 0 30px rgba(229, 57, 53, 0.5),
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

        .kaltarang-cta-button::before {
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

        .kaltarang-cta-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .kaltarang-cta-button:hover {
          transform: scale(1.08) translateY(-5px);
          box-shadow: 
            0 0 50px rgba(229, 57, 53, 0.8),
            0 15px 35px rgba(0, 0, 0, 0.4);
          border-color: var(--accent-color);
        }

        .kaltarang-cta-button span {
          position: relative;
          z-index: 1;
        }

        .kaltarang-scroll-indicator {
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

        .kaltarang-scroll-indicator svg {
          width: 30px;
          height: 30px;
          fill: var(--primary-color);
          filter: drop-shadow(0 0 10px var(--primary-color));
        }

        @media (max-width: 768px) {
          .kaltarang-main-heading { font-size: 3em; }
          .kaltarang-sub-heading { font-size: 1.4em; }
          .kaltarang-about-paragraph { font-size: 1.1em; padding: 15px; }
          .kaltarang-stats-bar { flex-direction: column; gap: 30px; padding: 25px; }
          .kaltarang-stat-value { font-size: 2.5em; }
          .kaltarang-about-container { padding: 30px 20px; }
          .kaltarang-cta-button { font-size: 1em; padding: 15px 35px; }
        }
      `}</style>

      <div className="kaltarang-about-root">
        <div className="kaltarang-about-container">
          <div className="kaltarang-content-wrapper">
            <h1 className="kaltarang-main-heading">A Celebration of Culture</h1>
            <p className="kaltarang-sub-heading">Kaltarang: Where Art Comes Alive</p>
            <p className="kaltarang-about-paragraph">
              Kaltarang is the grand annual cultural festival of RGIPT, a vibrant explosion of art, music, dance, and creativity. It's where traditions meet innovation, and diverse talents unite to create an unforgettable celebration of our rich cultural heritage and artistic excellence.
            </p>

            <div className="kaltarang-stats-bar" ref={statsBarRef}>
              <div className="kaltarang-stat-item">
                <div className="kaltarang-stat-value" data-value="12">0</div>
                <div className="kaltarang-stat-label">Years of Tradition</div>
              </div>
              <div className="kaltarang-stat-item">
                <div className="kaltarang-stat-value" data-value="500">0</div>
                <div className="kaltarang-stat-label">Artists & Performers</div>
              </div>
              <div className="kaltarang-stat-item">
                <div className="kaltarang-stat-value" data-value="15000">0</div>
                <div className="kaltarang-stat-label">Cultural Enthusiasts</div>
              </div>
            </div>
          </div>
        </div>

        <div className="kaltarang-scroll-indicator">
          <svg viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </div>
    </>
  );
}