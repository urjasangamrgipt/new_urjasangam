"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const pastEventsData = [
  {
    image: "/images/event1.jpg",
    title: "Cultural Night Gala",
    description: "A spectacular showcase of diverse cultural performances.",
    attendees: "800+",
    year: "2024",
  },
  {
    image: "/images/event2.jpg",
    title: "Dance Championship",
    description: "Witness breathtaking dance performances from across styles.",
    attendees: "600+",
    year: "2024",
  },
  {
    image: "/images/event3.jpg",
    title: "Battle of Bands",
    description: "Epic musical showdown featuring talented artists.",
    attendees: "750+",
    year: "2023",
  },
  {
    image: "/images/event4.jpg",
    title: "Drama Festival",
    description: "Compelling theatrical performances that moved hearts.",
    attendees: "500+",
    year: "2023",
  },
  {
    image: "/images/event5.jpg",
    title: "Poetry Slam Night",
    description: "Powerful words and emotions expressed on stage.",
    attendees: "400+",
    year: "2023",
  },
  {
    image: "/images/event6.jpg",
    title: "Art Exhibition",
    description: "Visual masterpieces displayed by emerging artists.",
    attendees: "550+",
    year: "2023",
  },
  {
    image: "/images/event7.jpg",
    title: "Fashion Show",
    description: "Glamorous runway showcasing creative fashion designs.",
    attendees: "700+",
    year: "2022",
  },
  {
    image: "/images/event8.jpg",
    title: "Film Festival",
    description: "Screening of outstanding short films and documentaries.",
    attendees: "450+",
    year: "2022",
  },
  {
    image: "/images/event9.jpg",
    title: "Folk Music Concert",
    description: "Traditional melodies celebrating cultural heritage.",
    attendees: "650+",
    year: "2022",
  },
];

export function PastEventsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
          }}
        />
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

      {/* Header */}
      <motion.div
        className="text-center mb-12 sm:mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative inline-block px-6 sm:px-12 py-6 sm:py-8 rounded-3xl">
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl shadow-orange-500/10" />
          <div className="relative z-10">
            <motion.h2
              className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 tracking-tight"
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                background:
                  "linear-gradient(135deg, #f97316 0%, #ea580c 25%, #fb923c 50%, #fdba74 75%, #f97316 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              OUR PAST INITIATIVES
            </motion.h2>

            <motion.div
              className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 rounded-full mx-auto shadow-lg shadow-orange-400/50"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.p
              className="text-orange-200 text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto drop-shadow-lg px-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Celebrating our journey of making a difference in society
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Swiper Section */}
      <motion.div
        className="w-full max-w-6xl relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) =>
              `<span class="${className}" style="background: linear-gradient(135deg, #f97316, #ea580c); box-shadow: 0 0 10px rgba(249,115,22,0.5);"></span>`,
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
                  className={`absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 rounded-3xl transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-70 blur-xl scale-105"
                      : "opacity-30 blur-md"
                  }`}
                  style={{
                    backgroundSize: "200% 100%",
                    animation:
                      hoveredIndex === index ? "shimmer 2s linear infinite" : "none",
                  }}
                />

                {/* Ultra Transparent Glass Card */}
                <div className="relative h-full flex flex-col backdrop-blur-3xl bg-white/[0.03] rounded-3xl overflow-hidden border border-white/20 group-hover:border-red-400/40 group-hover:bg-white/[0.06] transition-all duration-500 shadow-2xl">
                  {/* Image Container with Transparent Glass Overlay */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-red-500/10 to-orange-600/10 backdrop-blur-2xl flex items-center justify-center border-b border-white/10">
                      <div className="text-5xl sm:text-6xl opacity-40">🎭</div>
                    </div>

                    {/* Transparent Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-3 sm:pb-4">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredIndex === index ? 0 : 20,
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-2 sm:gap-4"
                      >
                        {/* Ultra Transparent Glass Info Badges */}
                        <div className="bg-white/10 backdrop-blur-2xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 shadow-xl shadow-red-500/20">
                          <span className="text-red-200 text-xs font-bold drop-shadow-lg">
                            👥 {event.attendees}
                          </span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-2xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 shadow-xl shadow-orange-500/20">
                          <span className="text-orange-200 text-xs font-bold drop-shadow-lg">
                            📅 {event.year}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 p-4 sm:p-5 flex flex-col relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none rounded-b-3xl" />

                    <h3
                      className="relative z-10 text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3 drop-shadow-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 transition-all duration-300"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      {event.title}
                    </h3>

                    <p
                      className="relative z-10 text-orange-100/70 text-xs sm:text-sm leading-relaxed flex-1 drop-shadow-md"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      {event.description}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 mt-3 sm:mt-4 w-full py-2 sm:py-3 bg-white/[0.08] backdrop-blur-2xl rounded-full text-white font-bold text-xs sm:text-sm border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden shadow-xl hover:bg-white/[0.12] hover:border-orange-400/50 hover:shadow-orange-400/30"
                    >
                      <span className="relative z-10">View Details</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"
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

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-lg hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* CSS */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </section>
  );
}