import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Festival data remains the same
const festivals = [
  { id: 'energia', name: 'Energia', date: '10-11 November', description: 'Witness the spirit of sportsmanship and competitive excellence.', image: '/photos/energia/energia1.jpg', tags: ['Sports Complex', '2000+'], color: '#9D50FF' },
  { id: 'urjotsav', name: 'Urjotsav', date: '12-13 November', description: 'A battle of wits and digital craftsmanship, showcasing technological innovation.', image: '/photos/hero/Urjotsava1.jpg', tags: ['Main Auditorium', '30+ Events'], color: '#007BFF' },
  { id: 'souhardya', name: 'Souhardya', date: '12-13 November', description: 'An initiative for community engagement and social change.', image: '/photos/hero/Souhardahya1.jpg', tags: ['Campus Quad', 'Community'], color: '#FF9933' },
  { id: 'kaltarang', name: 'Kaltarang', date: '14-16 November', description: 'A vibrant explosion of art, music, and dance that celebrates our culture.', image: '/photos/energia/Kaltarang1.jpg', tags: ['Open Air Theatre', '500+ Artists'], color: '#E53935' }
];

export default function TimelineComponent() {
  const [activeSection, setActiveSection] = useState(0);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // NEW: State to detect if the view is mobile (SSR-safe)
  const [isMobile, setIsMobile] = useState(false);

  const scrollerRef = useRef(null);
  const sectionRefs = useRef([]);
  const timelineContainerRef = useRef(null);

  // NEW: Effect to set and update isMobile (guarded for SSR)
  useEffect(() => {
    const compute = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.6 };
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach(ref => {
      if (ref) sectionObserver.observe(ref);
    });

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => setTimelineVisible(entry.isIntersecting));
    }, { threshold: 0.1 });

    if (timelineContainerRef.current) {
      navObserver.observe(timelineContainerRef.current);
    }

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) sectionObserver.unobserve(ref);
      });
      if (timelineContainerRef.current) {
        navObserver.unobserve(timelineContainerRef.current);
      }
    };
  }, []);

  // UPDATED: Scroll-hijacking effect now respects the isMobile state
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || isMobile) return; // Do not attach listener on mobile

    const handleWheel = (event) => {
      if (isScrolling) {
        event.preventDefault();
        return;
      }
      const scrollDirection = event.deltaY;
      if (Math.abs(scrollDirection) > 1) {
        if (scrollDirection > 0 && activeSection < festivals.length - 1) {
          event.preventDefault();
          setIsScrolling(true);
          const nextSection = sectionRefs.current[activeSection + 1];
          scroller.scrollTop = nextSection.offsetTop;
          setTimeout(() => setIsScrolling(false), 1200);
        } else if (scrollDirection < 0 && activeSection > 0) {
          event.preventDefault();
          setIsScrolling(true);
          const prevSection = sectionRefs.current[activeSection - 1];
          scroller.scrollTop = prevSection.offsetTop;
          setTimeout(() => setIsScrolling(false), 1200);
        }
      }
    };
    scroller.addEventListener('wheel', handleWheel, { passive: false });
    return () => scroller.removeEventListener('wheel', handleWheel);
  }, [activeSection, isScrolling, isMobile]); // Added isMobile dependency

  const getOrbPosition = () => `${(activeSection / (festivals.length - 1)) * 100}%`;

  return (
    <div id="timeline" className="h-screen overflow-hidden text-[#f0f0f0]" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Poppins:wght@400;600&display=swap');
        .main-scroller::-webkit-scrollbar { display: none; }
        .main-scroller { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      {/* UPDATED: Timeline Navigation with conditional render so it only exists within the section */}
      {timelineVisible && (
        <nav 
          className={`fixed top-1/2 z-50 pointer-events-none transition-all duration-500 ease-in-out 
            md:left-1/2 left-6 opacity-100 visible scale-100`}
          style={{ transform: isMobile ? 'translateY(-50%)' : 'translate(-50%, -50%)' }}
        >
          <div className="relative w-1 h-[50vh] bg-white/10 rounded-full">
            <div 
              className="absolute left-1/2 w-10 h-10 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] -z-10"
              style={{ top: getOrbPosition(), background: `radial-gradient(circle, ${festivals[activeSection].color} 0%, rgba(0,0,0,0) 60%)` }}
            />
            <ul className="relative h-full flex flex-col justify-between">
              {festivals.map((fest, idx) => (
                <li key={fest.id} className={`w-3 h-3 rounded-full relative left-1/2 -translate-x-1/2 transition-all duration-300 ${activeSection === idx ? 'bg-white scale-150' : 'bg-white/30'}`} />
              ))}
            </ul>
          </div>
        </nav>
      )}

      {/* Heading */}
      <div className="w-full text-center pt-16">
        <h2 className="text-4xl md:text-6xl font-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>Timeline</h2>
      </div>

      {/* UPDATED: Main Scroller with mobile snap-scroll */}
      <div ref={scrollerRef} className="main-scroller h-screen overflow-y-scroll md:scroll-smooth snap-y snap-mandatory">
        <main ref={timelineContainerRef} className="relative">
          {festivals.map((fest, idx) => (
            <section
              key={fest.id}
              ref={el => sectionRefs.current[idx] = el}
              className="h-screen w-full relative flex items-center snap-start md:block"
              style={{ perspective: isMobile ? 'none' : '1000px' }}
            >
              {/* UPDATED: Event Card with responsive classes and styles */}
              <Link href={`/${fest.id}`} className="block">
              <div
                className={`
                  rounded-3xl overflow-hidden border border-white/10 
                  transition-opacity duration-600 ease-in-out
                  w-[calc(100vw-100px)] max-w-[400px] ml-[75px] mr-[25px] relative
                  md:absolute md:w-2/5 md:max-w-[550px] md:ml-0 md:mr-0 md:transition-all
                  ${idx % 2 === 0 ? 'md:left-[5%]' : 'md:right-[5%]'}
                  ${!isMobile && activeSection !== idx ? 'opacity-0' : 'opacity-100'}
                `}
                style={{
                  transform: isMobile ? 'none' : (
                    activeSection === idx 
                      ? (idx % 2 === 0 ? 'translateX(0) rotateY(5deg)' : 'translateX(0) rotateY(-5deg)')
                      : (idx % 2 === 0 ? 'translateX(-40px) rotateY(10deg)' : 'translateX(40px) rotateY(-10deg)')
                  ),
                  transitionProperty: isMobile ? 'opacity' : 'opacity, transform, box-shadow',
                }}
                onMouseEnter={(e) => {
                  if (!isMobile && activeSection === idx) {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.03) rotateY(0deg)';
                    e.currentTarget.style.boxShadow = `0 15px 45px -10px ${fest.color}`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile && activeSection === idx) {
                    e.currentTarget.style.transform = idx % 2 === 0 ? 'translateX(0) rotateY(5deg)' : 'translateX(0) rotateY(-5deg)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <div className={`flex w-full flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  {/* Date Column */}
                  <div
                    className="flex items-center justify-center p-5 flex-none w-full md:w-20 text-center border-b md:border-b-0 border-white/10"
                    style={{
                      writingMode: isMobile ? 'horizontal-tb' : 'vertical-rl',
                      textOrientation: 'mixed',
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: isMobile ? '1.5rem' : '1.8rem',
                      letterSpacing: '4px',
                      color: fest.color,
                      [idx % 2 === 0 ? 'borderLeft' : 'borderRight']: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {fest.date.split(' ')[0]}
                    <span className="font-poppins text-lg font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {' ' + fest.date.split(' ')[1]}
                    </span>
                  </div>
                  {/* Info Column */}
                  <div className="flex-1">
                    <div className="relative h-[220px]">
                      <img src={fest.image} alt={fest.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-7">
                      <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: 'Orbitron, sans-serif', color: fest.color }}>{fest.name}</h2>
                      <p className="text-white/80 leading-relaxed mb-5">{fest.description}</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-7 pb-7 gap-4">
                      <div className="flex gap-2">
                        {fest.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="text-xs py-1 px-2.5 bg-white/10 rounded-lg">{tag}</span>
                        ))}
                      </div>
                      <a href={`/${fest.id}#events`} className="px-5 py-2.5 rounded-full font-semibold text-sm text-black transition-all duration-300 hover:scale-105" style={{ background: fest.color, boxShadow: `0 0 20px -5px ${fest.color}` }}>
                        View Events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}