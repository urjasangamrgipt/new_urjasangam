"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function EventsSection() {
  const [activeTab, setActiveTab] = useState("indoor");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const indoorEventsData = [
    {
      title: "Table Tennis",
      icon: "🏓",
      date: "10-11 November",
      description:
        "International Table Tennis Federation's rules are followed as boys and girls compete in group stage followed by knockouts.",
      participants: "Singles & Doubles",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/table-tennis-urja-sangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais--1576152",
    },
    {
      title: "Chess",
      icon: "♟️",
      date: "10-11 November",
      description:
        "4 to 5 players of each team, with their existing FIDE ratings, compete under the Swiss System Format.",
      participants: "Individual",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/chess-urja-sangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-uttar-p-1576021",
    },
    {
      title: "Snooker",
      icon: "🎱",
      date: "10-11 November",
      description:
        "Players aim to pot balls in a specific order on a 12x6 feet snooker table.",
      participants: "Individual",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/snooker-urja-sangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-uttar-1576194",
    },
    {
      title: "Power-Lifting",
      icon: "🏋️",
      date: "10-11 November",
      description:
        "Athletes compete in three lifts: squat, bench press, and deadlift. The heaviest successful lift in each category is counted.",
      participants: "Individual",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/powerlifting-urja-sangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais--1576026",
    },
    {
      title: "Carrom",
      icon: "🎯",
      date: "10-11 November",
      description:
        "Players compete on a square board, using their fingers to flick wooden discs into corner pockets.",
      participants: "Individual",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/carrom-urja-sangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-uttar--1574430",
    },
  ];

  const outdoorEventsData = [
    {
      title: "Basketball",
      icon: "🏀",
      date: "10-11 November",
      description:
        "High-flying dunks and fast-paced action. Assemble your team and dominate the court.",
      participants: "Teams of 5",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/basketball-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-utt-1574427",
    },
    {
      title: "Volleyball",
      icon: "🏐",
      date: "10-11 November",
      description:
        "Spike, set, and serve your way to glory in this thrilling team-based competition.",
      participants: "Teams of 6",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/volleyball-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-utt-1574426",
    },
    {
      title: "Badminton",
      icon: "🏸",
      date: "10-11 November",
      description:
        "A test of agility, precision, and speed. Compete in singles or doubles categories.",
      participants: "Singles & Doubles",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/badminton-urja-sangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-utt-1574425",
    },
    {
      title: "Athletics-Male",
      icon: "🏃‍♂️",
      date: "10-11 November",
      description:
        "Push your limits in track and field events including sprints, relays, and long jump.",
      participants: "Individual & Teams",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/athletics-male-urja-sangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jai-1576154",
    },
    {
      title: "Athletics-Female",
      icon: "🏃🏻‍♀",
      date: "10-11 November",
      description:
        "Push your limits in track and field events including sprints, relays, and long jump.",
      participants: "Individual & Teams",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/athletics-female-urja-sangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-j-1576168",
    },
    {
      title: "Lawn Tennis",
      icon: "🎾",
      date: "10-11 November",
      description:
        "Serve an ace and dominate the court in intense singles and doubles matches.",
      participants: "Singles & Doubles",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/lawn-tennis-urja-sangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-u-1574428",
    },
    {
  title: "Kho-Kho",
  icon: "🏃‍♂️💨",
  date: "10-11 November",
  description:
    "A traditional Indian sport that combines elements of tag and wrestling. Quick reflexes and strategy are key!",
  participants: "Teams of 8",
  prizePool: "Trophy & Medals",
  link: "https://unstop.com/events/kho-kho-urja-sangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-uttar-1576180",
},

    {
      title: "Kabaddi",
      icon: "🤸‍♂️",
      date: "10-11 November",
      description:
        "A traditional sport of strength, strategy, and breath control. Raid and defend for points.",
      participants: "Teams of 7",
      prizePool: "Trophy & Medals",
      link: "https://unstop.com/events/kabaddi-urja-sangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-uttar-1576185",
    },
  ];

  const eventsToShow =
    activeTab === "indoor" ? indoorEventsData : outdoorEventsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const renderEventCard = (event) => (
    <motion.div
      key={event.title}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.3 } }}
      className="relative group cursor-pointer font-sans"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500" />

      <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-6 rounded-2xl border border-violet-500/30 group-hover:border-purple-400/60 transition-all duration-300 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="text-center relative z-10">
          <motion.div
            className="text-6xl mb-5 inline-block"
            whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.6 } }}
          >
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-purple-400/40 rounded-full" />
              <span className="relative">{event.icon}</span>
            </div>
          </motion.div>

          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 mb-2">
            {event.title}
          </h3>
          <p className="text-purple-300/80 mt-2 font-medium">{event.date}</p>
        </div>

        <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 ease-in-out">
          <div className="border-t border-violet-500/30 pt-4">
            <p className="text-purple-100/90 leading-relaxed text-sm mb-4">
              {event.description}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <motion.div
                className="bg-violet-500/10 backdrop-blur-sm p-3 rounded-lg border border-violet-500/20 hover:border-purple-400/40 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-purple-400 text-xs font-bold mb-1">
                  👥 Participants
                </div>
                <div className="text-white text-sm">{event.participants}</div>
              </motion.div>

              <motion.div
                className="bg-violet-500/10 backdrop-blur-sm p-3 rounded-lg border border-violet-500/20 hover:border-purple-400/40 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-purple-400 text-xs font-bold mb-1">
                  🏆 Prize Pool
                </div>
                <div className="text-white text-sm">{event.prizePool}</div>
              </motion.div>
            </div>

            {/* ✅ Fixed Button (Opens in new tab) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 border border-violet-400/50 rounded-full font-bold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 text-white shadow-lg shadow-violet-500/30 relative overflow-hidden group/btn"
            >
              <Link
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Register Now</span>
              </Link>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-20 relative overflow-hidden font-sans"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Energia Competitions
          </motion.h2>

          <p className="text-xl text-purple-300/80 mb-12 max-w-3xl mx-auto">
            From the track to the court, find your arena of glory.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-violet-950/30 backdrop-blur-xl rounded-full p-2 border border-purple-500/30 shadow-lg shadow-violet-500/20">
            <motion.button
              onClick={() => setActiveTab("indoor")}
              className={`relative px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === "indoor"
                  ? "text-white"
                  : "text-purple-300/70 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === "indoor" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Indoor Sports</span>
            </motion.button>

            <motion.button
              onClick={() => setActiveTab("outdoor")}
              className={`relative px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === "outdoor"
                  ? "text-white"
                  : "text-purple-300/70 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === "outdoor" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Outdoor Sports</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {eventsToShow.map(renderEventCard)}
        </motion.div>
      </div>
    </section>
  );
}
