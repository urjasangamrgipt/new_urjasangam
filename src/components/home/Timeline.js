"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const festivals = [
  {
    id: "energia",
    name: "Energia",
    date: "10-11 November",
    description:
      "Witness the spirit of sportsmanship and competitive excellence.",
    image: "/photos/energia/energia1.jpg",
    tags: ["Sports Complex", "2000+"],
    color: "#9D50FF",
  },
  {
    id: "urjotsav",
    name: "Urjotsav",
    date: "12-13 November",
    description:
      "A battle of wits and digital craftsmanship, showcasing technological innovation.",
    image: "/photos/hero/Urjotsava1.jpg",
    tags: ["Main Auditorium", "30+ Events"],
    color: "#007BFF",
  },
  {
    id: "souhardya",
    name: "Souhardya",
    date: "12-13 November",
    description:
      "An initiative for community engagement and social change.",
    image: "/photos/hero/Souhardahya1.jpg",
    tags: ["Campus Quad", "Community"],
    color: "#FF9933",
  },
  {
    id: "kaltarang",
    name: "Kaltarang",
    date: "14-16 November",
    description:
      "A vibrant explosion of art, music, and dance that celebrates our culture.",
    image: "/photos/energia/Kaltarang1.jpg",
    tags: ["Open Air Theatre", "500+ Artists"],
    color: "#E53935",
  },
];

export default function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-poppins">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center font-orbitron">
        Timeline
      </h2>

      {/* Timeline Bar */}
      <div className="relative w-full max-w-6xl px-4">
        <div className="absolute top-1/2 left-0 w-full h-[3px] bg-white/20 -translate-y-1/2" />

        <div className="flex justify-between relative z-10">
          {festivals.map((fest, index) => (
            <div
              key={fest.id}
              onClick={() => setActive(index)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <motion.div
                className={`w-6 h-6 rounded-full border-2 border-white transition-all duration-300 ${
                  active === index
                    ? "bg-white scale-125 shadow-[0_0_20px_4px_rgba(255,255,255,0.5)]"
                    : "bg-black group-hover:scale-110"
                }`}
                whileTap={{ scale: 0.9 }}
              />
              <span
                className={`mt-3 text-sm text-center transition-colors ${
                  active === index ? "text-white" : "text-gray-400"
                }`}
              >
                {fest.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Active Card */}
      <motion.div
        key={festivals[active].id}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 max-w-3xl w-full px-4"
      >
        <div
          className="rounded-3xl overflow-hidden border border-white/20 shadow-lg backdrop-blur-md"
          style={{
            background: `linear-gradient(135deg, ${festivals[active].color}20, #111)`,
          }}
        >
          <img
            src={festivals[active].image}
            alt={festivals[active].name}
            className="w-full h-60 object-cover"
          />
          <div className="p-6 md:p-8">
            <h3
              className="text-3xl md:text-4xl font-orbitron font-bold mb-2"
              style={{ color: festivals[active].color }}
            >
              {festivals[active].name}
            </h3>
            <p className="text-white/80 mb-4">{festivals[active].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {festivals[active].tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/10 rounded-lg text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70 font-medium">
                {festivals[active].date}
              </span>
              <Link
                href={`/${festivals[active].id}#events`}
                className="px-5 py-2 bg-white text-black rounded-full font-semibold text-sm hover:scale-105 transition-transform"
              >
                View Events
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
