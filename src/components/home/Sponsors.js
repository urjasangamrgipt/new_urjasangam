import React, { useState } from 'react';

const PastSponsorsMarquee = () => {
  const [hoveredSponsor, setHoveredSponsor] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const sponsors = [
    { id: 1, name: "ASUS", image: "/photos/UrjaSangam/ASUS.png" },
    { id: 2, name: "Baskin Robbins", image: "/photos/UrjaSangam/Baskin Robbins.png" },
    { id: 3, name: "BURGER SINGH", image: "/photos/UrjaSangam/BURGER SINGH.png" },
    { id: 4, name: "Gail", image: "/photos/UrjaSangam/Gail.png" },
    { id: 5, name: "BOB", image: "/photos/UrjaSangam/BOB.png" },
    { id: 6, name: "BSNL", image: "/photos/UrjaSangam/BSNL.png" },
    { id: 7, name: "EBAY", image: "/photos/UrjaSangam/EBAY.png" },
    { id: 8, name: "CPCL", image: "/photos/UrjaSangam/CPCL.png" },
    { id: 9, name: "NRL", image: "/photos/UrjaSangam/NRL.png" },
    { id: 10, name: "ICICI Bank", image: "/photos/UrjaSangam/ICICI_bnk.png" },
    { id: 11, name: "HMEL", image: "/photos/UrjaSangam/HMEL.png" },
    { id: 12, name: "HINDUSTAN PETROLEUM", image: "/photos/UrjaSangam/HINDUSTAN PETROLEUM.png" },
    { id: 13, name: "INDIAN OIL", image: "/photos/UrjaSangam/INDIAN OIL.png" },
    { id: 14, name: "ISRO", image: "/photos/UrjaSangam/ISRO.png" },
    { id: 15, name: "JIO SAVAN", image: "/photos/UrjaSangam/JIO SAVAN.png" },
    { id: 16, name: "UNSTOP", image: "/photos/UrjaSangam/UNSTOP.png" },
    { id: 19, name: "KWIKPIC", image: "/photos/UrjaSangam/KWIKPIC.png" },
    { id: 22, name: "UNION", image: "/photos/UrjaSangam/UNION.png" },
    { id: 23, name: "UP tourism", image: "/photos/UrjaSangam/UP tourism.png" },
    { id: 24, name: "ROYAL ENFIELD", image: "/photos/UrjaSangam/ROYAL ENFIELD.png" },
    { id: 25, name: "JIO SAVAN", image: "/photos/UrjaSangam/JIO SAVAN.png" },
    { id: 26, name: "PNB", image: "/photos/UrjaSangam/PNB.png" },
    { id: 27, name: "AMAR ujala", image: "/photos/UrjaSangam/AMAR ujala.png" },
    { id: 28, name: "BURGER SINGH", image: "/photos/UrjaSangam/BURGER SINGH.png" },
    { id: 29, name: "FUJIFILM", image: "/photos/UrjaSangam/FUJIFILM.png" },
    { id: 30, name: "GFG", image: "/photos/UrjaSangam/GFG.jpg" },
    { id: 31, name: "SBI", image: "/photos/UrjaSangam/SBI.png" },
    { id: 32, name: "ROYAL ENFIELD", image: "/photos/UrjaSangam/ROYAL ENFIELD.png" },
    { id: 33, name: "PNB", image: "/photos/UrjaSangam/PNB.png" },
    
  ];

  // Split sponsors into two tracks
  const leftSponsors = sponsors.slice(0, Math.ceil(sponsors.length / 2));
  const rightSponsors = sponsors.slice(Math.ceil(sponsors.length / 2));

  const SponsorCard = ({ sponsor }) => (
    <div
      className={`relative flex-shrink-0 mx-4 group cursor-pointer transition-all duration-500 ${
        hoveredSponsor === sponsor.id ? 'scale-110 z-10' : 'scale-100'
      }`}
      onMouseEnter={() => setHoveredSponsor(sponsor.id)}
      onMouseLeave={() => setHoveredSponsor(null)}
    >
      <div 
        className="relative w-48 h-52 bg-white rounded-2xl overflow-hidden border border-purple-500/20 group-hover:border-purple-400/60 transition-all duration-500"
        style={{
          boxShadow: hoveredSponsor === sponsor.id 
            ? '0 20px 60px rgba(168, 85, 247, 0.6), 0 0 80px rgba(236, 72, 153, 0.4)' 
            : '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        <img
          src={sponsor.image}
          alt={sponsor.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
          <p className="text-white text-sm font-bold text-center px-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
            style={{
              textShadow: '0 0 20px rgba(168, 85, 247, 0.8)'
            }}
          >
            {sponsor.name}
          </p>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.3) 0%, transparent 70%)'
          }}
        />
      </div>
    </div>
  );

  const MarqueeTrack = ({ sponsors, direction, speed = 30 }) => {
    const extendedSponsors = [...sponsors, ...sponsors, ...sponsors];
    
    return (
      <div className="relative overflow-hidden py-8">
        <div
          className={`flex ${isPaused ? 'pause-animation' : ''}`}
          style={{
            animation: `scroll-${direction} ${speed}s linear infinite`,
            width: 'max-content'
          }}
        >
          {extendedSponsors.map((sponsor, index) => (
            <SponsorCard 
              key={`${sponsor.id}-${index}`} 
              sponsor={sponsor}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen  relative overflow-hidden py-20 px-4">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="max-w-full mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          
          <h1 
            className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 50px rgba(102,126,234,0.7))',
              animation: 'gradientShift 6s linear infinite'
            }}
          >
            Past Sponsors
          </h1>
          
          <p className="text-xl text-purple-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Trusted by Industry Leaders & Innovators who believed in our vision
          </p>
          
         
        </div>

        {/* Marquee Container */}
        <div className="space-y-4">
          <MarqueeTrack sponsors={leftSponsors} direction="left" speed={40} />
          <MarqueeTrack sponsors={rightSponsors} direction="right" speed={35} />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(20px);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-20deg);
          }
          100% {
            transform: translateX(200%) skewX(-20deg);
          }
        }

        .pause-animation {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default PastSponsorsMarquee;