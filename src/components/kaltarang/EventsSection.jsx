"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function EventsSection() {
  const [activeTab, setActiveTab] = useState("music");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const eventsData = {
    literary: [
      {
        title: "Abhivyakti – Hindi Poetry Slam",
        icon: "📝",
        date: "14–16 November",
        venue: "RG Plaza",
        description:
          "An evocative stage for poets to express their deepest emotions in Hindi.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "https://unstop.com/o/uJYCVdb?lb=logged_out_user?utm_medium=Share&utm_source=logged_out_user&utm_campaign=Cultural",
      },
      {
        title: "English Poetry Slam",
        icon: "📜",
        date: "14–16 November",
        venue: "RG Plaza",
        description:
          "A powerful competition where wordsmiths perform their original English poetry.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "https://unstop.com/competitions/english-poetry-slam-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-1573070",
      },
      {
        title: "Vichar Vivaad – Debate Competition",
        icon: "🗣️",
        date: "14–16 November",
        venue: "AB-1, LR-1",
        description:
          "A battle of intellect and oratory in a formal Hindi debate competition.",
        participants: "Teams of 2",
        prizePool: "Trophy & Certificates",
        link: "",
      },
      {
        title: "JAM – Just A Minute",
        icon: "⏱️",
        date: "14–16 November",
        venue: "AB-1, LR-3",
        description:
          "A thrilling race against the clock to speak for one minute without hesitation.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "https://unstop.com/competitions/jam-just-a-minute-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-r-1572901",
      },
      {
        title: "Ghazalkaar – Ghazal Competition",
        icon: "🎶",
        date: "14–16 November",
        venue: "RG Plaza",
        description:
          "An enchanting evening dedicated to the soulful and poetic art of Ghazals.",
        participants: "Solo/Duet",
        prizePool: "Trophy & Certificates",
        link: "",
      },
      {
        title: "Tale Tangle – Storytelling Challenge",
        icon: "📖",
        date: "14–16 November",
        venue: "RG Plaza",
        description:
          "A creative challenge where storytellers weave captivating narratives to enthrall the audience.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "https://unstop.com/events/tale-tangle-storytelling-challenge-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-t-1573322",
      },
      {
        title: "Creative Writing Competition",
        icon: "✍️",
        date: "14–16 November",
        venue: "RG Plaza",
        description:
          "A creative challenge for writers to express imagination and originality through written words.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "",
      },
    ],
    drama: [
      {
        title: "Kalpana Kaarvan - Stageplay",
        icon: "🎭",
        date: "14–16 November",
        venue: "Vivekanand Sabhaghar",
        description:
          "A theatrical journey where compelling stories come to life on stage.",
        participants: "Teams of 10–15",
        prizePool: "Trophy & Certificates",
        link: "",
      },
      {
        title: "Aksherang - Monoact",
        icon: "🎬",
        date: "14–16 November",
        venue: "Vivekanand Sabhaghar",
        description:
          "A powerful solo performance where one actor commands the entire stage.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "",
      },
      {
        title: "Abhinay Vistaar - Improv Challenge",
        icon: "🎭",
        date: "14–16 November",
        venue: "Vivekanand Sabhaghar",
        description:
          "A spontaneous acting challenge where creativity is tested on the spot.",
        participants: "Group/Individual",
        prizePool: "Trophy & Certificates",
        link: "",
      },
    ],
    fmc: [
      {
        title: "51 Frames (51 Hour Short Film Making)",
        icon: "🎥",
        date: "14–16 November",
        venue: "AB (if available for screening)",
        description:
          "Contestants will be given a set of ideas or film-making styles exactly 51 hours before the submission deadline, challenging them to craft unique stories under pressure.",
        participants: "Teams of 4–6",
        prizePool: "Trophy & Certificates",
        link: "https://unstop.com/events/51-frames-the-51-hour-short-film-making-competition-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institu-1573326",
      },
      {
        title: "Film Fever (Film Quiz)",
        icon: "🎞️",
        date: "14–16 November",
        venue: "AB",
        description:
          "A 3-round film quiz designed to test participants’ knowledge of cinema and pop culture.",
        participants: "Teams of 2–3",
        prizePool: "Trophy & Certificates",
        link: "https://unstop.com/quiz/film-fever-the-ultimate-film-quiz-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-tech-1573327",
      },
    ],
    art: [
      {
        title: "Re-Release (Movie Poster Redesign)",
        icon: "🎨",
        date: "14–16 November",
        venue: "N/A",
        description:
          "Give a cinematic classic a modern premiere by redesigning its iconic poster with your unique vision.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "",
      },
      {
        title: "Cover Replay (Cover Art Redesign)",
        icon: "🖌️",
        date: "14–16 November",
        venue: "N/A",
        description:
          "Hit replay on your favorite album's visuals by redesigning its iconic cover art with a fresh, creative spin.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "",
      },
      {
        title: "Comic Conquest (Storytelling through Digital Comics)",
        icon: "📚",
        date: "14–16 November",
        venue: "N/A",
        description:
          "Conquer the digital canvas by forging an original comic with a compelling story to claim victory.",
        participants: "Solo/Team",
        prizePool: "Trophy & Certificates",
        link: "",
      },
      {
        title: "Memetic",
        icon: "😂",
        date: "14–16 November",
        venue: "Online",
        description: "A competition to create the funniest and most viral memes on the given themes.",
        participants: "Solo/Team",
        prizePool: "Trophy & Certificates",
        link: "https://unstop.com/hackathons/memetic-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-ut-1573127",
      },
    ],
    music: [
      {
        title: "Band Blitz - Battle of Bands",
        icon: "🎸",
        date: "14–16 November",
        venue: "Open Stage",
        description:
          "An electrifying musical showdown where bands compete for ultimate supremacy.",
        participants: "Bands of 4–8",
        prizePool: "Trophy & Certificates",
        link: "https://unstop.com/competitions/band-blitz-battle-of-bands-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-tec-1573067",
      },
      {
        title: "Voice of Mridang",
        icon: "🎤",
        date: "14–16 November",
        venue: "Vivekanand Sabhaghar",
        description:
          "A melodic competition celebrating the soulful voices of Bollywood and semi-classical singing.",
        participants: "Solo/Duet",
        prizePool: "Trophy & Certificates",
        link: "https://unstop.com/events/voice-of-mridang-soloduo-singing-competition-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-p-1573323",
      },
      {
        title: "Sur Sangam ",
        icon: "🎵",
        date: "14–16 November",
        venue: "Vivekanand Sabhaghar",
        description:
          "A prestigious platform showcasing the discipline and artistry of classical vocalists.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "",
      },
      {
        title: "Instrumental Impulse ",
        icon: "🎹",
        date: "14–16 November",
        venue: "Vivekanand Sabhaghar",
        description:
          "A captivating showcase where instrumentalists let their music speak for itself.",
        participants: "Solo/Duet",
        prizePool: "Trophy & Certificates",
        link: "",
      },
      {
        title: "Rap Mania ",
        icon: "🎧",
        date: "14–16 November",
        venue: "Vivekanand Sabhaghar",
        description:
          "A high-energy lyrical battle where rappers drop beats and spit fire.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "https://unstop.com/events/rap-mania-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-utta-1573324",
      },
      {
        title: "Western Solo Singing Event",
        icon: "🎶",
        date: "14–16 November",
        venue: "Vivekanand Sabhaghar",
        description:
          "A stage for solo vocalists to shine with their command of Western music genres.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "https://unstop.com/events/western-solo-singing-competition-urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-tec-1573325",
      },
    ],
    dance: [
      {
        title: "Eka Kalaa - Solo Dance",
        icon: "💃",
        date: "14–16 November",
        venue: "Vivekanand Sabhaghar",
        description:
          "A dynamic solo competition for dancers to showcase their Western-style moves.",
        participants: "Solo",
        prizePool: "Trophy & Certificates",
        link: "",
      },
      {
        title: "Groove Fusion - Street Style Faceoff",
        icon: "🕺",
        date: "14–16 November",
        venue: "RG Plaza",
        description:
          "An intense dance battle where street styles clash in an epic faceoff.",
        participants: "Solo/Group",
        prizePool: "Trophy & Certificates",
        link: "",
      },
      {
        title: "Sync & Soar - Group Dance",
        icon: "👯‍♀️",
        date: "14–16 November",
        venue: "On Stage",
        description:
          "Group Dance is a lively performance where dancers unite to showcase coordination, energy, and creativity.",
        participants: "Groups of 6–12",
        prizePool: "Trophy & Certificates",
        link: "",
      },
    ],
  };

  const tabs = [
    { id: "music", label: "Mridang", icon: "🎵" },
    { id: "literary", label: "Kalam Kriti", icon: "📖" },
    { id: "fmc", label: "Film & Media", icon: "🎥" },
    { id: "drama", label: "Damru", icon: "🎭" },
    { id: "art", label: "Pen&Pixel", icon: "🎨" },
    { id: "dance", label: "Tarang", icon: "💃" },
  ];

  const eventsToShow = eventsData[activeTab];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const renderEventCard = (event, index) => (
    <motion.div
      key={event.title}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="relative group cursor-pointer"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500" />

      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-red-500/30 group-hover:border-red-400/60 transition-all duration-300 overflow-hidden flex flex-col h-full">
        {/* Icon Background Glow */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="text-center relative z-10">
          <motion.div
            className="text-5xl sm:text-6xl mb-4 sm:mb-5 inline-block"
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-red-400/40 rounded-full" />
              <span className="relative">{event.icon}</span>
            </div>
          </motion.div>

          <h3 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 mb-2">
            {event.title}
          </h3>
          <p className="text-red-300/80 mt-2 font-medium text-sm sm:text-base">
            {event.date}
          </p>
        </div>

        {/* Expandable Details */}
        <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-4 sm:group-hover:mt-6 transition-all duration-500 ease-in-out flex-grow flex flex-col">
          <div className="border-t border-red-500/30 pt-4 flex-grow flex flex-col justify-between">
            <div>
              <p className="text-red-100/90 leading-relaxed text-xs sm:text-sm mb-4">
                {event.description}
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <motion.div
                  className="bg-red-500/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-red-500/20 hover:border-red-400/40 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-red-400 text-xs font-bold mb-1">
                    📍 Venue
                  </div>
                  <div className="text-white text-xs sm:text-sm">
                    {event.venue}
                  </div>
                </motion.div>

                <motion.div
                  className="bg-red-500/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-red-500/20 hover:border-red-400/40 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-red-400 text-xs font-bold mb-1">
                    👥 Participants
                  </div>
                  <div className="text-white text-xs sm:text-sm">
                    {event.participants}
                  </div>
                </motion.div>

                <motion.div
                  className="bg-red-500/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-red-500/20 hover:border-red-400/40 transition-all col-span-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-red-400 text-xs font-bold mb-1">
                    🏆 Prize
                  </div>
                  <div className="text-white text-xs sm:text-sm">
                    {event.prizePool}
                  </div>
                </motion.div>
              </div>
            </div>

            {event.link ? (
              <motion.a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 sm:mt-6 block w-full text-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-orange-600 border border-red-400/50 rounded-full font-bold hover:from-red-500 hover:to-orange-500 transition-all duration-300 text-white text-sm sm:text-base shadow-lg shadow-red-500/30 relative overflow-hidden"
              >
                <span className="relative z-10">Register Now</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            ) : (
              <motion.button
                disabled
                className="mt-4 sm:mt-6 w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600/50 rounded-full font-bold text-white/50 text-sm sm:text-base shadow-lg cursor-not-allowed"
              >
                Coming Soon
              </motion.button>
            )}
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 opacity-10">
          <div className="absolute inset-0 border-t-2 border-r-2 border-red-400 rounded-tr-2xl" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-12 sm:py-20 relative overflow-hidden"
    >
      {/* Animated Background Orbs - Red Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)",
            top: "0%",
            left: "-15%",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, transparent 70%)",
            bottom: "0%",
            right: "-15%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 tracking-tight"
            style={{
              background:
                "linear-gradient(135deg, #ef4444 0%, #f97316 25%, #fb923c 50%, #dc2626 75%, #ef4444 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 40px rgba(239, 68, 68, 0.5))",
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
            Cultural Events
          </motion.h2>

          <motion.div
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <p className="text-base sm:text-xl text-red-300/80 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Celebrate art, culture and creativity across diverse domains
          </p>
        </motion.div>

        {/* Tab Switcher - Mobile Responsive */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-red-950/30 backdrop-blur-xl rounded-full p-1 sm:p-2 border border-red-500/30 shadow-lg shadow-red-500/20 inline-flex gap-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 whitespace-nowrap text-xs sm:text-base ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-red-300/70 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"
                    style={{ boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)" }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <span className="text-base sm:text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label}</span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid - Mobile Responsive */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {eventsToShow.map((event, index) => renderEventCard(event, index))}
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-red-400/40 hidden sm:block"
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