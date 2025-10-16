import React, { useEffect, useRef, useState } from 'react';

export default function UrjotsavAbout() {
  const statsBarRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const counters = document.querySelectorAll('.stat-value');

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
          if (target === 12 || target === 50) {
            counter.innerText = target + '+';
          } else if (target === 10000) {
            counter.innerText = '10K+';
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
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Montserrat:wght@300;400;600&display=swap');

        .urjotsav-about-root {
          --primary-color: #00BFFF;
          --secondary-color: #483D8B;
          --accent-color: #00F0FF;
          --text-color: #FFFFFF;
          --font-heading: 'Orbitron', sans-serif;
          --font-body: 'Montserrat', sans-serif;
        }

        .urjotsav-about-container {
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

        .urjotsav-content-wrapper {
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

        .urjotsav-main-heading {
          font-family: var(--font-heading);
          font-size: 5em;
          font-weight: 900;
          letter-spacing: 2px;
          color: var(--text-color);
          margin-bottom: 15px;
          text-shadow: 
            0 0 20px rgba(0, 191, 255, 0.8), 
            0 0 40px rgba(0, 191, 255, 0.6),
            0 0 60px rgba(0, 191, 255, 0.4);
          position: relative;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .urjotsav-main-heading:hover {
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

        .urjotsav-sub-heading {
          font-size: 1.8em;
          font-weight: 400;
          color: var(--accent-color);
          margin-bottom: 35px;
          text-shadow: 0 0 15px rgba(0, 240, 255, 0.8);
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .urjotsav-about-paragraph {
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

        .urjotsav-stats-bar {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 35px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 30px;
          margin-bottom: 50px;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 8px 32px 0 rgba(0, 191, 255, 0.15),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 0 rgba(255, 255, 255, 0.1);
        }

        .urjotsav-stats-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.7s ease;
        }

        .urjotsav-stats-bar:hover::before {
          left: 100%;
        }

        .urjotsav-stat-item {
          text-align: center;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .urjotsav-stat-item:hover {
          transform: translateY(-10px) scale(1.05);
        }

        .urjotsav-stat-value {
          font-family: var(--font-heading);
          font-size: 3em;
          font-weight: 700;
          color: var(--text-color);
          min-width: 140px;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(0, 191, 255, 0.5));
        }

        .urjotsav-stat-label {
          font-size: 1em;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 10px;
        }

        .urjotsav-cta-button {
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
          border: 2px solid rgba(0, 191, 255, 0.5);
          cursor: pointer;
          box-shadow: 
            0 0 30px rgba(0, 191, 255, 0.5),
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

        .urjotsav-cta-button::before {
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

        .urjotsav-cta-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .urjotsav-cta-button:hover {
          transform: scale(1.08) translateY(-5px);
          box-shadow: 
            0 0 50px rgba(0, 191, 255, 0.8),
            0 15px 35px rgba(0, 0, 0, 0.4);
          border-color: var(--accent-color);
        }

        .urjotsav-cta-button span {
          position: relative;
          z-index: 1;
        }

        .urjotsav-scroll-indicator {
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

        .urjotsav-scroll-indicator svg {
          width: 30px;
          height: 30px;
          fill: var(--primary-color);
          filter: drop-shadow(0 0 10px var(--primary-color));
        }

        @media (max-width: 768px) {
          .urjotsav-main-heading { font-size: 3em; }
          .urjotsav-sub-heading { font-size: 1.4em; }
          .urjotsav-about-paragraph { font-size: 1.1em; padding: 15px; }
          .urjotsav-stats-bar { flex-direction: column; gap: 30px; padding: 25px; }
          .urjotsav-stat-value { font-size: 2.5em; }
          .urjotsav-about-container { padding: 30px 20px; }
          .urjotsav-cta-button { font-size: 1em; padding: 15px 35px; }
        }
      `}</style>

      <div className="urjotsav-about-root">
        <div className="urjotsav-about-container">
          <div className="urjotsav-content-wrapper">
            <h1 className="urjotsav-main-heading">The Genesis of Innovation</h1>
            <p className="urjotsav-sub-heading">Urjotsav: Where Ideas Converge</p>
            <p className="urjotsav-about-paragraph">
              Urjotsav is the annual techno-cultural festival of RGIPT, a nationally acclaimed platform where technology, creativity, and culture intertwine. It stands as a beacon for aspiring innovators, uniting the brightest minds to celebrate a shared passion for discovery and excellence.
            </p>

            <div className="urjotsav-stats-bar" ref={statsBarRef}>
              <div className="urjotsav-stat-item">
                <div className="urjotsav-stat-value stat-value" data-value="12">0</div>
                <div className="urjotsav-stat-label">Years of Legacy</div>
              </div>
              <div className="urjotsav-stat-item">
                <div className="urjotsav-stat-value stat-value" data-value="50">0</div>
                <div className="urjotsav-stat-label">Events & Competitions</div>
              </div>
              <div className="urjotsav-stat-item">
                <div className="urjotsav-stat-value stat-value" data-value="10000">0</div>
                <div className="urjotsav-stat-label">Annual Footfall</div>
              </div>
            </div>
          </div>
        </div>

        <div className="urjotsav-scroll-indicator">
          <svg viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </div>
    </>
  );
}