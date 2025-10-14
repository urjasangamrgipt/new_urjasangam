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
    image: "/photos/energia/Energia 2.png",
    title: "Energia Championship '24",
    description: "The grand finale featuring top athletes in a fierce competition.",
    athletes: "1500+",
    year: "2024",
  },
  {
    image: "/photos/energia/Box Cricket.png",
    title: "Inter-Dept. Cricket Clash",
    description: "A thrilling tournament where departments battled for the ultimate bragging rights.",
    athletes: "200+",
    year: "2024",
  },
  {
    image: "/photos/energia/Gallary 2.JPG",
    title: "Annual Sports Meet '23",
    description: "A celebration of sportsmanship with track, field, and team events.",
    athletes: "1200+",
    year: "2023",
  },
  {
    image: "/photos/energia/Football.png",
    title: "Football League Finals",
    description: "An unforgettable night of passion, skill, and last-minute goals.",
    athletes: "150+",
    year: "2023",
  },
  {
    image: "/photos/energia/League.png",
    title: "Volleyball Victor's Cup",
    description: "Teams spiked their way to glory in this high-energy competition.",
    athletes: "100+",
    year: "2022",
  },
  {
    image: "/photos/energia/Hero 1.png",
    title: "The Badminton Open",
    description: "Showcasing incredible agility, precision, and lightning-fast rallies.",
    athletes: "80+",
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
      className="relative w-full py-24 px-6 overflow-hidden font-sans"
    >
      {/* Animated Purple Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)",
            bottom: "10%",
            right: "-10%",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tight"
          style={{
            background:
              "linear-gradient(135deg, #a855f7 0%, #9333ea 25%, #7c3aed 50%, #a855f7 75%, #c084fc 100%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 40px rgba(168, 85, 247, 0.8))",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          ENERGIA LEGACY
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 rounded-full mx-auto shadow-lg shadow-purple-500/50"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <motion.p
          className="text-purple-200 text-lg mt-6 max-w-2xl mx-auto drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Relive the electrifying moments of athletic excellence and sporting glory.
        </motion.p>
      </motion.div>

      {/* Swiper with Actual Images */}
      <motion.div
        className="w-full max-w-6xl mx-auto relative z-10"
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
              `<span class="${className}" style="background: linear-gradient(135deg, #9333ea, #a855f7); box-shadow: 0 0 15px rgba(168,85,247,0.6);"></span>`,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className="!pb-16"
        >
          {pastEventsData.map((event, index) => (
            <SwiperSlide key={index} className="!w-[320px] !h-[420px]">
              <div
                className="relative h-full rounded-3xl overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-500 ${
                    hoveredIndex === index
                      ? "border-2 border-purple-400/60 shadow-2xl shadow-purple-500/40 backdrop-blur-md bg-white/[0.05]"
                      : "border border-purple-400/0"
                  }`}
                >
                  {/* Actual Image */}
                  <div className="relative overflow-hidden rounded-t-2xl w-full h-56 border-b border-purple-500/20">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredIndex === index ? 0 : 20,
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-4"
                      >
                        <div className="bg-purple-600/30 backdrop-blur-2xl px-4 py-2 rounded-full border border-purple-400/40 shadow-xl shadow-purple-500/30">
                          <span className="text-purple-200 text-xs font-bold drop-shadow-lg">
                            🏃‍♂️ {event.athletes}
                          </span>
                        </div>
                        <div className="bg-purple-600/30 backdrop-blur-2xl px-4 py-2 rounded-full border border-purple-400/40 shadow-xl shadow-purple-500/30">
                          <span className="text-purple-200 text-xs font-bold drop-shadow-lg">
                            📅 {event.year}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col relative">
                    <h3 className="text-white text-xl font-bold mb-3 drop-shadow-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-purple-400 transition-all duration-300">
                      {event.title}
                    </h3>
                    <p className="text-purple-100/70 text-sm leading-relaxed flex-1 drop-shadow-md">
                      {event.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 w-full py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full text-white font-bold text-sm border border-purple-400/30 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl shadow-purple-500/30 hover:shadow-purple-400/50"
                    >
                      View Highlights ⚡
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Floating Purple Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-400/20 backdrop-blur-md border border-purple-300/40 shadow-lg shadow-purple-500/30"
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
    </section>
  );
}
