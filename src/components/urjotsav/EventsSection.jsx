"use client"

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function EventsSection() {
  const [activeTab, setActiveTab] = useState('coding');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const unstopLink = "https://unstop.com/college-fests/urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-uttar-pradesh-403716";

  const eventsData = {
    coding: [
      { title: "WebXplore", icon: "💻", date: "12-13 November 2025", time: "3 hours", venue: "Lecture Room", description: "A 3-hour web development challenge where teams build a full-stack website from scratch using any tech stack.", participants: "Teams", link: 'https://unstop.com/hackathons/webxplore-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais--1573289' },
      { title: "Code Climb", icon: "🧗", date: "12-13 November 2025", time: "3 hours", venue: "Lecture Room", description: "A 3-hour online coding hackathon where participants solve algorithmic problems on platforms like Codeforces or HackerEarth.", participants: "Individual", link: 'https://unstop.com/hackathons/codeclimb-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais--1573292' },
      { title: "RCPC", icon: "🏆", date: "12-13 November 2025", time: "3 hours", venue: "Lecture Room", description: "A team-based ICPC-style coding contest held offline at RGIPT, featuring 8 problems in 3 hours and a live leaderboard.", participants: "Teams", link: 'https://unstop.com/hackathons/rcpc-rgipt-collegiate-programming-contest-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of--1573313' },
      { title: "UI Express", icon: "🎨", date: "12-13 November 2025", time: "3 hours", venue: "Lecture Room", description: "A design challenge where teams create UI/UX solutions based on a surprise theme using tools like Figma or Canva.", participants: "Teams", link: 'https://unstop.com/hackathons/ui-xpress-design-that-speaks-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-tec-1573291' },
      { title: "Code Decipher", icon: "🔍", date: "12-13 November 2025", time: "Two rounds", venue: "Lecture Room", description: "A two-round debugging competition where participants fix errors in given code after an aptitude test.", participants: "Individual", link: 'https://unstop.com/hackathons/code-decipher-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-j-1572902' }
    ],
    robotic: [
      { title: "Maze Spark", icon: "🤖", date: "12-13 November 2025", venue: "Lecture Room", description: "Design and program an autonomous robot that can solve a walled maze from start to finish in the shortest time.", participants: "Teams", link: unstopLink },
      { title: "Robosoccer", icon: "⚽", date: "12-13 November 2025", venue: "Lecture Room", description: "Participants design and build manually or autonomously controlled robots that play football against opponents.", participants: "Teams", link: unstopLink },
      { title: "Robo Rescue", icon: "🦾", date: "12-13 November 2025", venue: "Lecture Room", description: "Design and build a pick-and-place robot capable of navigating a rescue arena and transporting objects to a safe zone.", participants: "Teams", link: unstopLink },
      { title: "RC Plane", icon: "✈️", date: "12-13 November 2025", venue: "Lecture Room", description: "Design, build, and pilot a radio-controlled aircraft to demonstrate flight stability, control, and aerodynamic efficiency.", participants: "Teams", link: unstopLink },
      { title: "RC Boat", icon: "🚤", date: "12-13 November 2025", venue: "Lecture Room", description: "Participants design, build, and operate remote-controlled boats to test speed, control, and stability over a water track.", participants: "Teams", link: 'https://unstop.com/competitions/rc-boat-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais--1572898' },
    ],
    entrepreneurial: [
      { title: "Sell Me If You Can", icon: "🎤", date: "12-13 November 2025", description: "Pitch everyday or weird products in the most creative and convincing way possible.", participants: "Individual/Teams", link: 'https://unstop.com/hackathons/sell-me-if-you-can-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rg-1573134' },
      { title: "Trader's Arena", icon: "📈", date: "12-13 November 2025", description: "A virtual stock market game where participants buy, sell, and trade shares to build the biggest portfolio.", participants: "Individual/Teams", link: unstopLink },
      { title: "Capital Quest", icon: "💡", date: "12-13 November 2025", description: "An ideathon and pitching challenge where participants brainstorm and present innovative business solutions.", participants: "Teams", link: unstopLink },
      { title: "Startup Fair", icon: "🚀", date: "12-13 November 2025", description: "A startup expo where innovators pitch ideas, showcase ventures, and network with industry leaders.", participants: "Startups", link: unstopLink },
      { title: "MUN (UNHRC)", icon: "🌐", date: "12-13 November 2025", description: "Simulate global debates on pressing international issues in a Model United Nations conference.", participants: "Delegates", link: unstopLink },
    ],
    creative: [
      { event_name: "Water Rocket", icon: '🚀', date: "12-13 November 2025", description: "Design and construct a water rocket that can achieve the maximum air time and distance.", participants: "Teams", link: 'https://unstop.com/competitions/water-rocket-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt--1572896' },
      { event_name: "CAD Challenge", icon: '🧊', date: "12-13 November 2025", description: "Design a 3D model based on a given problem statement using any CAD software.", participants: "Individual/Teams", link: unstopLink },
      { event_name: "Bridge Making", icon: '🌉', date: "12-13 November 2025", description: "Design and build a strong, stable, and creative truss bridge using provided materials.", participants: "Teams", link: unstopLink },
      { event_name: "KINεTIC KRASH", icon: '💥', date: "12-13 November 2025", description: "Construct an innovative bot powered purely by physics or chemistry that moves autonomously without any electrical power.", participants: "Teams", link: 'https://unstop.com/competitions/kinetic-krash-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-1573013' },
    ]
  };

  const eventsToShow = eventsData[activeTab];

  const tabs = [
    { id: 'coding', label: 'Coding', icon: '💻' },
    { id: 'robotic', label: 'Robotic', icon: '🤖' },
    { id: 'entrepreneurial', label: 'Entrepreneurial', icon: '🚀' },
    { id: 'creative', label: 'Creative', icon: '🎨' }
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const renderEventCard = (event) => (
    <motion.div
      key={event.title || event.event_name}
      variants={itemVariants}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="relative group cursor-pointer h-full"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500" />

      <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/30 group-hover:border-blue-400/60 transition-all duration-300 overflow-hidden h-full flex flex-col">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="text-center relative z-10">
          <motion.div
            className="text-6xl mb-5 inline-block"
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 }
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-blue-400/40 rounded-full" />
              <span className="relative">{event.icon}</span>
            </div>
          </motion.div>

          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mb-2">
            {event.title || event.event_name}
          </h3>
          <p className="text-blue-300/80 mt-2 font-medium">{event.date}</p>
        </div>

        <div className="flex-grow flex flex-col justify-end overflow-hidden max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 ease-in-out">
          <div className="border-t border-blue-500/30 pt-4">
            <p className="text-blue-100/90 leading-relaxed text-sm mb-4">
              {event.description}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {event.time && (
                <motion.div
                  className="bg-blue-500/10 backdrop-blur-sm p-3 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-blue-400 text-xs font-bold mb-1">⏰ Time</div>
                  <div className="text-white text-sm">{event.time}</div>
                </motion.div>
              )}
              {event.venue && (
                <motion.div
                  className="bg-blue-500/10 backdrop-blur-sm p-3 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-blue-400 text-xs font-bold mb-1">📍 Venue</div>
                  <div className="text-white text-sm">{event.venue}</div>
                </motion.div>
              )}
              {event.participants && (
                <motion.div
                  className="bg-blue-500/10 backdrop-blur-sm p-3 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all col-span-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-blue-400 text-xs font-bold mb-1">👥 Participants</div>
                  <div className="text-white text-sm">{event.participants}</div>
                </motion.div>
              )}
            </div>

            <a href={event.link} target="_blank" rel="noopener noreferrer" className="block mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 border border-blue-400/50 rounded-full font-bold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 text-white shadow-lg shadow-blue-500/30 relative overflow-hidden group/btn"
              >
                <span className="relative z-10">Register Now</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </a>
          </div>
        </div>

        <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
          <div className="absolute inset-0 border-t-2 border-r-2 border-blue-400 rounded-tr-2xl" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="events"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 25%, #0ea5e9 50%, #60a5fa 75%, #3b82f6 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.5))',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Tech Events
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <p className="text-xl text-blue-300/80 mb-12 max-w-3xl mx-auto">
            Explore our comprehensive technology competitions
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-blue-950/30 backdrop-blur-xl rounded-full p-2 border border-blue-500/30 shadow-lg shadow-blue-500/20">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === tab.id
                    ? 'text-white'
                    : 'text-blue-300/70 hover:text-white'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                    style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {eventsToShow.map((event) => renderEventCard(event))}
        </motion.div>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}