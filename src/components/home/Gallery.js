'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const galleryImages = [
    { 
      url: '/photos/hero/kalatarang2.jpg',
      title: 'Tech Innovation',
      category: 'Urjotsav'
    },
    { 
      url: '/photos/hero/kaltarang1.jpg',
      title: 'Team Collaboration',
      category: 'Urjotsav'
    },
    { 
      url: '/photos/hero/kaltarang3.jpg',
      title: 'Cultural Dance',
      category: 'Kaltarang'
    },
    { 
      url: '/photos/hero/urjotsav1.JPG',
      title: 'Music Performance',
      category: 'Kaltarang'
    },
    { 
      url: '/photos/hero/urjotsav3.jpg',
      title: 'Sports Excellence',
      category: 'Energia'
    },
    { 
      url: '/photos/hero/souhardya3.jpg',
      title: 'Team Victory',
      category: 'Energia'
    },
    { 
      url: '/photos/hero/urjotsav2.JPG',
      title: 'Community Service',
      category: 'Souardhya'
    },
    { 
      url: '/photos/hero/sourhardya1.jpeg',
      title: 'Live Concert',
      category: 'Kaltarang'
    },
    { 
      url: '/photos/hero/urjotsav4.jpg',
      title: 'Grand Performance',
      category: 'Kaltarang'
    },
    { 
      url: '/photos/hero/kaltarang2.jpg',
      title: 'Night Event',
      category: 'Kaltarang'
    },
    { 
      url: '/photos/hero/kaltarang5.jpg',
      title: 'Hackathon',
      category: 'Urjotsav'
    },
    { 
      url: '/photos/energia/League.png',
      title: 'Festival Crowd',
      category: 'All Fests'
    },
    { 
      url: '/photos/energia/Gallary 4.jpg',
      title: 'Festival Crowd',
      category: 'All Fests'
    },
    { 
      url: '/photos/hero/souhardya2.JPG',
      title: 'Festival Crowd',
      category: 'All Fests'
    },
  ]

  const categoryColors = {
    'Urjotsav': 'from-urjotsav/80 to-urjotsav/40',
    'Kaltarang': 'from-kaltarang/80 to-kaltarang/40',
    'Energia': 'from-energia/80 to-energia/40',
    'Souardhya': 'from-souardhya/80 to-souardhya/40',
    'All Fests': 'from-purple-500/80 to-pink-500/40'
  }

  const createRow = (startIndex, reverse = false, speed = 40) => (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: startIndex * 0.1 }}
      className="relative overflow-hidden mb-3 md:mb-4"
    >
      <motion.div
        className="flex gap-3 md:gap-6 hover:[animation-play-state:paused]"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%']
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* Duplicate images for seamless loop */}
        {[...galleryImages.slice(startIndex), ...galleryImages.slice(startIndex), ...galleryImages.slice(startIndex)].map((img, idx) => (
          <motion.div
            key={`${startIndex}-${idx}`}
            // ⭐ RESPONSIVE IMAGE SIZE - Mobile: 200x130, Tablet: 280x180, Desktop: 380x220
            className="flex-shrink-0 w-[200px] h-[130px] sm:w-[280px] sm:h-[180px] md:w-[380px] md:h-[220px] rounded-2xl md:rounded-3xl overflow-hidden relative group cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              zIndex: 10,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => setSelectedImage({ ...img, index: idx })}
            onMouseEnter={() => setHoveredIndex(`${startIndex}-${idx}`)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image */}
            <motion.img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-600"
              initial={{ scale: 1.1 }}
              whileHover={{ 
                scale: 1.2,
                rotateY: 5,
              }}
              transition={{ duration: 0.6 }}
            />

            {/* Gradient Overlay */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${categoryColors[img.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 md:border-4 border-transparent group-hover:border-white/50 rounded-2xl md:rounded-3xl transition-all duration-500"
              animate={hoveredIndex === `${startIndex}-${idx}` ? {
                borderColor: ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.5)']
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{ transform: 'skewX(-20deg)' }}
            />

            {/* Category Badge */}
            <motion.div
              className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-1 md:px-4 md:py-2 rounded-full backdrop-blur-md bg-black/50 border border-white/30"
              initial={{ y: -20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-xs md:text-sm font-bold">{img.category}</span>
            </motion.div>

            {/* Zoom Icon */}
            <motion.div
              className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-12 md:h-12 rounded-full backdrop-blur-md bg-black/50 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <FiZoomIn className="text-white text-sm md:text-xl" />
            </motion.div>

            {/* Title and Description */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent"
              initial={{ y: 100, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-white text-sm md:text-2xl font-bold mb-1 md:mb-2">{img.title}</h3>
              <p className="text-white/80 text-xs md:text-sm hidden sm:block">Click to view full image</p>
            </motion.div>

            {/* Particle Effect on Hover - Desktop Only */}
            {hoveredIndex === `${startIndex}-${idx}` && (
              <div className="absolute inset-0 pointer-events-none hidden md:block">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    initial={{
                      x: '50%',
                      y: '50%',
                      opacity: 1,
                    }}
                    animate={{
                      x: `${50 + (Math.random() - 0.5) * 100}%`,
                      y: `${50 + (Math.random() - 0.5) * 100}%`,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      repeatDelay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )

  const handlePrev = () => {
    const currentIndex = galleryImages.findIndex(img => img.url === selectedImage.url)
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    setSelectedImage({ ...galleryImages[prevIndex], index: prevIndex })
  }

  const handleNext = () => {
    const currentIndex = galleryImages.findIndex(img => img.url === selectedImage.url)
    const nextIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    setSelectedImage({ ...galleryImages[nextIndex], index: nextIndex })
  }

  return (
    <section id="gallery" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1)_0%,transparent_60%)]" />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-urjotsav/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-kaltarang/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-6 md:mb-12 font-black tracking-wider px-4"
          style={{
            fontSize: 'clamp(2rem, 8vw, 6rem)',
            fontFamily: 'Orbitron, sans-serif',
          }}
        >
          Captured Moments
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-white/90 max-w-3xl mx-auto mb-8 md:mb-16 text-base md:text-xl px-4"
        >
          Relive the magic through our lens - hover to bring memories to life
        </motion.p>

        {/* Gallery Rows - ⭐ FASTER SPEED: 20, 18, 22 seconds */}
        {createRow(0, false, 20)}
        {createRow(4, true, 18)}
        {createRow(8, false, 22)}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 md:p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 md:top-6 md:right-6 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-10 border border-white/20"
            >
              <FiX className="text-xl md:text-3xl text-white" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1, x: -5 }}
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className="absolute left-2 md:left-6 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-10 border border-white/20"
            >
              <FiChevronLeft className="text-xl md:text-3xl text-white" />
            </motion.button>

            <motion.button
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1, x: 5 }}
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-2 md:right-6 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-10 border border-white/20"
            >
              <FiChevronRight className="text-xl md:text-3xl text-white" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[85vh] md:max-h-[90vh] w-full"
            >
              <motion.img
                key={selectedImage.url}
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-2xl md:rounded-3xl"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Image Info Overlay */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 md:p-8 rounded-b-2xl md:rounded-b-3xl"
              >
                <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3">
                  <span className={`px-2 py-1 md:px-4 md:py-2 rounded-full bg-gradient-to-r ${categoryColors[selectedImage.category]} text-white font-bold text-xs md:text-sm`}>
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-4xl font-bold text-white mb-1 md:mb-2">{selectedImage.title}</h3>
                <p className="text-white/70 text-xs md:text-base">Urjasangam 2024 - A moment to remember</p>
              </motion.div>
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 px-3 py-1.5 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-xs md:text-base border border-white/20"
            >
              {(galleryImages.findIndex(img => img.url === selectedImage.url) + 1)} / {galleryImages.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}