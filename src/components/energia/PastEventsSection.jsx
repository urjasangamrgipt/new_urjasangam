"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
// Use Next.js Image for better performance
import Image from "next/image"; 
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// --- Component Data (Unified and improved for clarity) ---
const pastEventsData = [
  {
    image: "/photos/energia/pastEvent/khokho.jpg",
    title: "KHOKHO",
    description: "A thrilling traditional sport event that showcases agility and teamwork.",
    attendees: "800+",
    year: "2024",
    alt: "Players in action during a Kho-Kho match."
  },
  {
    image: "/photos/energia/pastEvent/kabaddi.jpg",
    title: "KABADDI",
    description: "Experience the intensity and excitement of traditional Kabaddi matches.",
    attendees: "600+",
    year: "2024",
    alt: "Kabaddi players in a fierce match."
  },
  {
    image: "/photos/energia/pastEvent/national-day.jpg",
    title: "National Day",
    description: "A grand celebration of our nation's heritage with vibrant performances and ceremonies.",
    attendees: "750+",
    year: "2025",
    alt: "National Day event."
  },
  {
    image: "/photos/energia/football.png",
    title: "Football Tournament",
    description: "An exhilarating football tournament featuring top teams from the region.",
    attendees: "500+",
    year: "2023",
    alt: "Players competing in a football match."
  },
  {
    image: "/photos/energia/pastEvent/carrom.jpg",
    title: "Carrom Championship",
    description: "Intense carrom matches showcasing skill and strategy.",
    attendees: "400+",
    year: "2023",
    alt: "Players focused on a carrom board."
  },
  {
    image: "/photos/energia/pastEvent/1.jpg",
    title: "Basketball Finals",
    description: "An action-packed finale showcasing the best teams in thrilling matchups.",
    attendees: "550+",
    year: "2023",
    alt: "Winners celebrating with the trophy after a basketball final."
  },
  {
    image: "/photos/energia/pastEvent/badminton.jpg",
    title: "Fashion Show",
    description: "Glamorous runway showcasing creative, avant-garde fashion designs.",
    attendees: "700+",
    year: "2022",
    alt: "Model walking the runway during a fashion show."
  },
  {
    image: "/photos/energia/pastEvent/chess.jpg",
    title: "Film Festival",
    description: "Screening of outstanding short films and documentaries from global creators.",
    attendees: "450+",
    year: "2022",
    alt: "A projector light shining on a cinema screen."
  },
  {
    image: "/photos/energia/pastEvent/gym.jpg",
    title: "Folk Music Concert",
    description: "Traditional melodies and instruments celebrating rich cultural heritage.",
    attendees: "650+",
    year: "2022",
    alt: "Musicians playing folk instruments on an outdoor stage."
  },
];

// Generates stable, random particle positions using useMemo
const generateParticlePositions = (count) => {
    return Array.from({ length: count }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
    }));
};

// --- Component Definition ---
export function PastEventsSection() {
  const sectionRef = useRef(null);
  // Increased margin for earlier loading effect
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" }); 
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const particlePositions = useMemo(() => generateParticlePositions(10), []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-6 overflow-hidden bg-gray-950 text-white"
    >
      
      {/* Animated Background Orbs (Red/Orange Theme) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orb 1: Top Left */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
          }}
        />
        {/* Orb 2: Bottom Right */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(251, 146, 60, 0.5) 0%, transparent 70%)",
            bottom: "10%",
            right: "-10%",
          }}
        />
      </div>

      {/* Header Section */}
      <motion.div
        className="text-center mb-12 sm:mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="relative inline-block px-6 sm:px-12 py-6 sm:py-8 rounded-3xl">
          {/* Frosted Glass Background */}
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl shadow-red-500/10" />

          <div className="relative z-10">
            <motion.h2
              className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 tracking-tight"
              // Removed inline animation and kept the gradient styles for performance
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                background:
                  "linear-gradient(135deg, #ef4444 0%, #f97316 25%, #fb923c 50%, #dc2626 75%, #ef4444 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              OUR PAST EVENTS
            </motion.h2>

            <motion.div
              className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full mx-auto shadow-lg shadow-red-400/50"
              initial={{ width: 0 }}
              animate={isInView ? { width: "6rem" } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.p
              className="text-red-200 text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto drop-shadow-lg px-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Relive the magic of our cultural celebrations
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Swiper Section */}
      <motion.div
        className="w-full max-w-6xl relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            // Use the globally defined custom class
            renderBullet: (index, className) => `<span class="${className} swiper-pagination-bullet-custom-red"></span>`,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className="!pb-12 sm:!pb-16"
        >
          {pastEventsData.map((event, index) => (
            <SwiperSlide
              key={index}
              className="!w-[280px] sm:!w-[320px] !h-[380px] sm:!h-[420px]"
            >
              <div
                className="relative h-full p-1 rounded-3xl overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Border Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-3xl transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-70 blur-xl scale-105"
                      : "opacity-30 blur-md"
                  }`}
                  style={{
                    backgroundSize: "200% 100%",
                    animation:
                      hoveredIndex === index ? "shimmer-red 2s linear infinite" : "none",
                  }}
                />

                {/* Glass Card */}
                <div className="relative h-full flex flex-col backdrop-blur-3xl bg-white/[0.03] rounded-3xl overflow-hidden border border-white/20 group-hover:border-red-400/40 group-hover:bg-white/[0.06] transition-all duration-500 shadow-2xl">
                  
                  {/* Image Section - Using Next.js Image for optimization */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-t-2xl border-b border-white/10">
                    <Image
                      src={event.image}
                      alt={event.alt || event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index < 3} // Prioritize first few images
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Info Badges on Hover */}
                  <div className="absolute top-0 left-0 h-48 sm:h-56 w-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-3 sm:pb-4 pointer-events-none">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredIndex === index ? 0 : 20,
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-2 sm:gap-4 pointer-events-auto"
                    >
                      <div className="bg-white/10 backdrop-blur-2xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 shadow-xl shadow-red-500/20">
                        <span className="text-red-200 text-xs font-bold drop-shadow-lg" aria-label={`Attendees: ${event.attendees}`}>
                          👥 {event.attendees}
                        </span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-2xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 shadow-xl shadow-orange-500/20">
                        <span className="text-orange-200 text-xs font-bold drop-shadow-lg" aria-label={`Year: ${event.year}`}>
                          📅 {event.year}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 p-4 sm:p-5 flex flex-col relative">
                    <h3
                      className="relative z-10 text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3 drop-shadow-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-300 group-hover:to-orange-300 transition-all duration-300"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      {event.title}
                    </h3>

                    <p
                      className="relative z-10 text-red-100/70 text-xs sm:text-sm leading-relaxed flex-1 drop-shadow-md"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      {event.description}
                    </p>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 mt-3 sm:mt-4 w-full py-2 sm:py-3 bg-white/[0.08] backdrop-blur-2xl rounded-full text-white font-bold text-xs sm:text-sm border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden shadow-xl hover:bg-white/[0.12] hover:border-red-400/50 hover:shadow-red-400/30"
                      aria-label={`View details for ${event.title}`}
                    >
                      <span className="relative z-10 drop-shadow-lg">
                        View Details
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-orange-400/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Floating Particles (Optimized with useMemo) */}
      {particlePositions.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-lg hidden sm:block pointer-events-none"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* CSS for custom animations and Swiper bullets */}
      <style jsx global>{`
        /* Global Shimmer Animation for the Border Glow */
        @keyframes shimmer-red {
          0% {
            background-position: -200% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        /* Custom Swiper Pagination Bullet Styles */
        .swiper-pagination-bullet-custom-red {
          background: linear-gradient(135deg, #ef4444, #f97316) !important;
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
          transition: all 0.3s ease-out;
        }

        .swiper-pagination-bullet-active.swiper-pagination-bullet-custom-red {
          transform: scale(1.2);
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.8), 0 0 5px rgba(251, 146, 60, 0.4);
        }
      `}</style>
    </section>
  );
}