import React, { useEffect, useRef, useState } from 'react';

export default function SouharDyaAbout() {
  const statsBarRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Reset animation on component mount
  useEffect(() => {
    // Reset all stat values to 0
    const counters = document.querySelectorAll('.souhardya-stat-value');
    counters.forEach(counter => {
      counter.innerText = '0';
    });
    
    setHasAnimated(false); // Reset animation state on each visit
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll('.souhardya-stat-value');

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
          if (target === 10 || target === 400) {
            counter.innerText = target + '+';
          } else if (target === 8000) {
            counter.innerText = '8K+';
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

  // Removed cursor trail effect

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@300;400;600&display=swap');

.souhardya-about-root {
  --primary-color: #FF6B35;
  --secondary-color: #FF5722;
  --accent-color: #FF8A50;
  --text-color: #FFFFFF;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Poppins', sans-serif;
}

.souhardya-about-container {
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

/* Fade in animation */
.souhardya-content-wrapper {
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

.souhardya-main-heading {
  font-family: var(--font-heading);
  font-size: 5em;
  font-weight: 900;
  letter-spacing: 2px;
  color: var(--text-color);
  margin-bottom: 15px;
  text-shadow: 
    0 0 20px rgba(255, 107, 53, 0.8), 
    0 0 40px rgba(255, 107, 53, 0.6),
    0 0 60px rgba(255, 107, 53, 0.4);
  display: inline-block;
  transition: all 0.3s ease;
}

.souhardya-sub-heading {
  font-size: 1.8em;
  font-weight: 400;
  color: var(--accent-color);
  margin-bottom: 35px;
  text-shadow: 0 0 15px rgba(255, 138, 80, 0.8);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.souhardya-about-paragraph {
  font-size: 1.3em;
  font-weight: 300;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 50px auto;
  color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
}

.souhardya-stats-bar {
  background: rgba(255, 107, 53, 0.08);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 107, 53, 0.25);
  padding: 35px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
}

.souhardya-stat-item {
  text-align: center;
  transition: transform 0.3s ease;
}

.souhardya-stat-value {
  font-family: var(--font-heading);
  font-size: 3em;
  font-weight: 700;
  color: var(--text-color);
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.souhardya-stat-label {
  font-size: 1em;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 10px;
}

.souhardya-cta-button {
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
  border: 2px solid rgba(255, 152, 0, 0.5);
  cursor: pointer;
  transition: all 0.4s ease;
}

.souhardya-scroll-indicator {
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

.visit-counter {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 152, 0, 0.2);
  border: 1px solid rgba(255, 152, 0, 0.5);
  padding: 10px 20px;
  border-radius: 50px;
  color: var(--accent-color);
  font-family: var(--font-body);
  font-size: 0.9em;
  backdrop-filter: blur(10px);
  z-index: 100;
}

/* ----------- Tablet view ----------- */
@media (max-width: 1024px) {
  .souhardya-main-heading { font-size: 4em; }
  .souhardya-sub-heading { font-size: 1.6em; }
  .souhardya-about-paragraph { font-size: 1.15em; }
  .souhardya-stats-bar { gap: 25px; padding: 30px; }
  .souhardya-stat-value { font-size: 2.6em; }
}

/* ----------- Mobile view ----------- */
@media (max-width: 768px) {
  .souhardya-about-container {
    padding: 30px 20px;
    width: 95%;
    min-height: auto;
  }

  .souhardya-main-heading {
    font-size: 2.4em;
    line-height: 1.2;
  }

  .souhardya-sub-heading {
    font-size: 1.2em;
    margin-bottom: 25px;
  }

  .souhardya-about-paragraph {
    font-size: 1em;
    padding: 12px;
    line-height: 1.6;
  }

  .souhardya-stats-bar {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }

  .souhardya-stat-item {
    width: 100%;
  }

  .souhardya-stat-value {
    font-size: 2em;
  }

  .souhardya-cta-button {
    font-size: 1em;
    padding: 12px 30px;
  }


  .souhardya-scroll-indicator svg {
    width: 22px;
    height: 22px;
  }
}

/* ----------- Very small phones (below 400px) ----------- */
@media (max-width: 400px) {
  .souhardya-main-heading { font-size: 1.8em; }
  .souhardya-sub-heading { font-size: 1em; }
  .souhardya-about-paragraph { font-size: 0.9em; }
  .souhardya-stat-value { font-size: 1.8em; }
  .souhardya-cta-button { font-size: 0.9em; padding: 10px 25px; }
}


/* ----------- Mobile view ----------- */
@media (max-width: 768px) {
  .souhardya-about-container {
    padding: 40px 25px; /* more breathing space */
    width: 100%;
    min-height: auto;
    overflow-x: visible;
  }

  .souhardya-main-heading {
    font-size: 2.2em;
    line-height: 1.3;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    padding: 0 10px; /* prevents cutting on sides */
  }

  .souhardya-sub-heading {
    font-size: 1.2em;
    margin-bottom: 25px;
    padding: 0 8px;
  }

  .souhardya-about-paragraph {
    font-size: 1em;
    padding: 12px;
    line-height: 1.6;
  }

  .souhardya-stats-bar {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }

  .souhardya-stat-item {
    width: 100%;
  }

  .souhardya-stat-value {
    font-size: 2em;
  }

  .souhardya-cta-button {
    font-size: 1em;
    padding: 12px 30px;
  }


  .souhardya-scroll-indicator svg {
    width: 22px;
    height: 22px;
  }
}

/* ----------- Very small phones (below 400px) ----------- */
@media (max-width: 400px) {
  .souhardya-main-heading { 
    font-size: 1.7em; 
    padding: 0 12px;
  }
  .souhardya-sub-heading { 
    font-size: 1em; 
    padding: 0 8px;
  }
  .souhardya-about-paragraph { 
    font-size: 0.9em; 
  }
  .souhardya-stat-value { 
    font-size: 1.8em; 
  }
  .souhardya-cta-button { 
    font-size: 0.9em; 
    padding: 10px 25px; 
  }
}



`}</style>


      <div className="souhardya-about-root">

        <div className="souhardya-about-container">
          <div className="souhardya-content-wrapper">
            <h1 className="souhardya-main-heading">Spirit of Service</h1>
            <p className="souhardya-sub-heading">Souhardya: Where Hearts United</p>
            <p className="souhardya-about-paragraph">
              Souhardya is the inspiring annual social festival of RGIPT, a radiant celebration of compassion, community service, and social responsibility. It's where empathy meets action, individuals unite for a cause, and every contribution creates a meaningful impact on society and those around us.
            </p>

            <div className="souhardya-stats-bar" ref={statsBarRef}>
              <div className="souhardya-stat-item">
                <div className="souhardya-stat-value" data-value="10">0</div>
                <div className="souhardya-stat-label">Years of Impact</div>
              </div>
              <div className="souhardya-stat-item">
                <div className="souhardya-stat-value" data-value="400">0</div>
                <div className="souhardya-stat-label">Volunteers & Activists</div>
              </div>
              <div className="souhardya-stat-item">
                <div className="souhardya-stat-value" data-value="8000">0</div>
                <div className="souhardya-stat-label">Lives Touched</div>
              </div>
            </div>
          </div>
        </div>

        <div className="souhardya-scroll-indicator">
          <svg viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </div>
    </>
  );
}