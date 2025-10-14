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
    image: "/images/gallery/Entrepreneur's Escape.jpeg",
    title: "The Entrepreneur's Escape",
    description: "An electrifying challenge where participants showcased creativity and critical thinking by navigating real-world startup scenarios and solving high-stakes business puzzles.",
    year: "2025",
  },
  {
    image: "/images/gallery/expo.jpg",
    title: "Vyapar Expo",
    description: "A vibrant showcase of innovation and networking, featuring a variety of stalls where participants tested their selling capacity and entrepreneurial skills.",
    year: "2023",
  },
  {
    image: "/images/gallery/Capital Quest 1.jpeg",
    title: "Capital Quest",
    description: "A mock pitching competition where startups showcased their ideas to investors. An exciting platform to experience the thrill of entrepreneurship and pitching.",
    year: "2024",
  },
  {
    image: "/images/gallery/E-summit 1.jpg",
    title: "E-Summit – IIT Bombay",
    description: "We participated in the E-Summit, organized by E-Cell, IIT Bombay, where our team took part in several events and reached the finals.",
    year: "2025",
  },
  {
    image: "/images/gallery/Math-a-thon.png",
    title: "Math-A-Thon",
    description: "An electrifying 7-day online mental math competition with mind-bending challenges and amazing rewards.",
    year: "2025",
  },
  {
    image: "/images/gallery/Corporate Duel.jpeg",
    title: "Corporate Duel",
    description: "A simulation of real-world business scenarios where participants managed resources and employed dynamic strategies to dominate the market.",
    year: "2025",
  },
  {
    image: "/images/gallery/CodeSprint.jpg",
    title: "CodeSprint",
    description: "A beginner-friendly competitive coding series on Codeforces, featuring customized contests to encourage coding culture and help students begin competitive programming.",
    year: "2025",
  },
  {
    image: "/images/gallery/CodeQuest.JPG",
    title: "CodeQuest",
    description: "A two-round competition with an MCQ quiz on DSA & algorithms, followed by a coding contest testing algorithmic thinking and problem-solving skills.",
    year: "2k24",
  },
  {
    image: "/images/gallery/Code Decipher.JPG",
    title: "Code Decipher",
    description: "A debugging contest where participants identify and fix logical and syntax errors in code. A true test of problem-solving and coding accuracy.",
    year: "2k24",
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
      {/* Animated Background Orbs - Cyan/Blue Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
            bottom: "10%",
            right: "-10%",
          }}
        />
      </div>

      {/* Header Section */}
      <motion.div
        className="text-center mb-12 sm:mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 tracking-tight"
          style={{
            fontFamily: "'Times New Roman', Times, serif",
            background:
              "linear-gradient(135deg, #06b6d4 0%, #3b82f6 25%, #0ea5e9 50%, #60a5fa 75%, #06b6d4 100%)",
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
          OUR PAST EVENTS
        </motion.h2>

        <motion.div
          className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full mx-auto shadow-lg shadow-cyan-400/50"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <motion.p
          className="text-cyan-200 text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto drop-shadow-lg px-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Explore our journey through innovation and excellence
        </motion.p>
      </motion.div>

      {/* Swiper Section */}
      <motion.div
        className="w-full max-w-6xl relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
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
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                '" style="background: linear-gradient(135deg, #06b6d4, #3b82f6); box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);"></span>'
              );
            },
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
                className="relative h-full rounded-3xl overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Completely Transparent Card */}
                <div className={`relative h-full flex flex-col backdrop-blur-0 bg-transparent rounded-3xl overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index
                    ? "border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/40 backdrop-blur-md bg-white/[0.05]"
                    : "border border-cyan-400/0"
                }`}>
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-48 sm:h-56 object-cover"
                    />

                    {/* Hover Overlay */}
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
                        <div className="bg-cyan-600/30 backdrop-blur-2xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400/40 shadow-xl shadow-cyan-500/30">
                          <span className="text-cyan-200 text-xs font-bold drop-shadow-lg">
                            📅 {event.year}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-4 sm:p-5 flex flex-col relative">
                    <h3 className="relative z-10 text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3 drop-shadow-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      {event.title}
                    </h3>

                    <p className="relative z-10 text-cyan-100/70 text-xs sm:text-sm leading-relaxed flex-1 drop-shadow-md"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      {event.description}
                    </p>

                    {/* Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 mt-3 sm:mt-4 w-full py-2 sm:py-3 bg-gradient-to-r from-cyan-600 to-blue-600 backdrop-blur-2xl rounded-full text-white font-bold text-xs sm:text-sm border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50"
                    >
                      <span className="relative z-10 drop-shadow-lg flex items-center justify-center gap-2">
                        View Highlights ⚡
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 sm:w-12 h-10 sm:h-12 opacity-40">
                    <div className="absolute inset-0 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-xl" />
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-10 sm:w-12 h-10 sm:h-12 opacity-40">
                    <div className="absolute inset-0 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-xl" />
                  </div>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent pointer-events-none"
                    animate={
                      hoveredIndex === index
                        ? {
                            x: ["-100%", "100%"],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      repeat: hoveredIndex === index ? Infinity : 0,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-cyan-400/20 backdrop-blur-md border border-cyan-300/40 shadow-lg shadow-cyan-500/30 hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

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