"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export function EventsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const eventsData = [
    {
      title: "Science Exhibition",
      icon: "🩸",
      date: "12 November",
      time: "9:00 AM - 5:00 PM",
      venue: "Auditorium",
      description: "Save lives by donating blood. Every drop counts in making a difference.",
      participants: "Individual",
      prizePool: "Certificate & Refreshments",
      link: "https://unstop.com/o/MdFBuED?lb=logged_out_user?utm_medium=Share&utm_source=logged_out_user&utm_campaign=Online_coding_challenge",
    },
    {
      title: "Nirmaan",
      icon: "🌳",
      date: "12-13 November",
      time: "7:00 AM - 11:00 AM",
      venue: "Auditorium",
      description: "Join a dynamic conclave where NGO's, Engineers and Innovators unite to drive real-world social impact.",
      participants: "Individual & Teams",
      prizePool: "Certificate of Participation",
      link: "https://unstop.com/o/MdFBuED?lb=logged_out_user?utm_medium=Share&utm_source=logged_out_user&utm_campaign=Online_coding_challenge",



    },
    {
      title: "Kavi Sammelan",
      icon: "♻️",
      date: "14 November",
      time: "6:00 AM - 10:00 AM",
      venue: "Auditorium",
      description: "This events brings together renowned poets from across India, each weaving stories , emotions and reflection into their verses.",
      participants: "Teams of 5-10",
      prizePool: "Certificate & Recognition",
      link: "https://unstop.com/o/MdFBuED?lb=logged_out_user?utm_medium=Share&utm_source=logged_out_user&utm_campaign=Online_coding_challenge",
    },
    {
      title: "Pratbimb",
      icon: "📚",
      date: "12-13 November",
      time: "2:00 PM - 5:00 PM",
      venue: "Auditorium",
      description: "A short film making competition. This event invites new passionate students to show their talent in film making",
      participants: "Individual & Teams",
      prizePool: "Certificate of Appreciation",
      link: "https://unstop.com/o/MdFBuED?lb=logged_out_user?utm_medium=Share&utm_source=logged_out_user&utm_campaign=Online_coding_challenge",
    },
    {
      title: "Riwaaz",
      icon: "🏥",
      date: "13 November",
      time: "9:00 AM - 4:00 PM",
      venue: "Ground",
      description: " A vibrant exhibition showcasing traditional arts, crafts, and cultural heritage through interactive displays and live demonstrations.",
      participants: "Volunteers",
      prizePool: "Certificate & Recognition",
      link: "https://unstop.com/o/MdFBuED?lb=logged_out_user?utm_medium=Share&utm_source=logged_out_user&utm_campaign=Online_coding_challenge",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const renderEventCard = (event, index) => (
    <motion.div
      key={event.title}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.3 } }}
      className="relative group cursor-pointer"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500" />
      <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-orange-500/30 group-hover:border-orange-400/60 transition-all duration-300 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="text-center relative z-10">
          <motion.div
            className="text-5xl sm:text-6xl mb-4 sm:mb-5 inline-block"
            whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.6 } }}
          >
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-orange-400/40 rounded-full" />
              <span className="relative">{event.icon}</span>
            </div>
          </motion.div>
          <h3 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 mb-2">
            {event.title}
          </h3>
          <p className="text-orange-300/80 mt-2 font-medium text-sm sm:text-base">{event.date}</p>
        </div>

        <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-4 sm:group-hover:mt-6 transition-all duration-500 ease-in-out">
          <div className="border-t border-orange-500/30 pt-4">
            <p className="text-orange-100/90 leading-relaxed text-xs sm:text-sm mb-4">{event.description}</p>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <motion.div className="bg-orange-500/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-orange-500/20 hover:border-orange-400/40 transition-all" whileHover={{ scale: 1.05 }}>
                <div className="text-orange-400 text-xs font-bold mb-1">⏰ Time</div>
                <div className="text-white text-xs sm:text-sm">{event.time}</div>
              </motion.div>
              <motion.div className="bg-orange-500/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-orange-500/20 hover:border-orange-400/40 transition-all" whileHover={{ scale: 1.05 }}>
                <div className="text-orange-400 text-xs font-bold mb-1">📍 Venue</div>
                <div className="text-white text-xs sm:text-sm">{event.venue}</div>
              </motion.div>
              <motion.div className="bg-orange-500/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-orange-500/20 hover:border-orange-400/40 transition-all" whileHover={{ scale: 1.05 }}>
                <div className="text-orange-400 text-xs font-bold mb-1">👥 Participants</div>
                <div className="text-white text-xs sm:text-sm">{event.participants}</div>
              </motion.div>
              <motion.div className="bg-orange-500/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-orange-500/20 hover:border-orange-400/40 transition-all" whileHover={{ scale: 1.05 }}>
                <div className="text-orange-400 text-xs font-bold mb-1">🏆 Recognition</div>
                <div className="text-white text-xs sm:text-sm">{event.prizePool}</div>
              </motion.div>
            </div>


            <Link href={event.link}>   <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(event.link, "_blank")}
              className="mt-4 sm:mt-6 w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-600 to-amber-600 border border-orange-400/50 rounded-full font-bold hover:from-orange-500 hover:to-amber-500 transition-all duration-300 text-white text-sm sm:text-base shadow-lg shadow-orange-500/30 relative overflow-hidden group/btn"
            >
              <span className="relative z-10">Join Now</span>
              <motion.div
                className="absolute inset-0 bg-white/20 pointer-events-none"  // <-- add this
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            </Link>


          </div>
        </div>

        <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 opacity-10">
          <div className="absolute inset-0 border-t-2 border-r-2 border-orange-400 rounded-tr-2xl" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="timeline" ref={sectionRef} className="py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)', top: '0%', left: '-15%' }}
        />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, transparent 70%)', bottom: '0%', right: '-15%' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.8 }}>
          <motion.h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 tracking-tight"
            style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 25%, #fb923c 50%, #fdba74 75%, #f97316 100%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            Social Services Events
          </motion.h2>
          <motion.div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ width: 0 }} animate={isInView ? { width: 96 } : { width: 0 }} transition={{ duration: 1, delay: 0.3 }} />
          <p className="text-base sm:text-xl text-orange-300/80 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Join us in making a positive impact on society
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {eventsData.map((event, index) => renderEventCard(event, index))}
        </motion.div>

        {[...Array(8)].map((_, i) => (
          <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-orange-400/40 hidden sm:block"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
          />
        ))}
      </div>
    </section>
  );
}
