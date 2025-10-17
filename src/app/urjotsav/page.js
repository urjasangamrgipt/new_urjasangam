"use client";
import NavbarUrjotsav from "@/components/shared/NavbarUrjotsava";
import Footer from "@/components/shared/Footer";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { CosmicBackground } from "@/components/shared/Cosmicbackground";
// import styles from './urjotsav.module.css';

// Import the Urjotsav section components
import { HeroSection } from "@/components/urjotsav/HeroSection";
import AboutSection from "@/components/urjotsav/AboutSection";
import { StatsSection } from "@/components/urjotsav/StatsSection";
import { EventsSection } from "@/components/urjotsav/EventsSection";
import { PastEventsSection } from "@/components/urjotsav/PastEventsSection";
import { GallerySection } from "@/components/urjotsav/GallerySection";
import FestWeekSection from "@/components/urjotsav/FestWeekSection";

// Add the 'default' keyword here to fix the export error
export default function UrjotsavPage() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar - Replace with your Navbar component */}
      <NavbarUrjotsav />

      <main className="relative z-10 text-white">
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        {/* <StatsSection /> */}

        <section id="events">
          <EventsSection />
        </section>
        <PastEventsSection />

        <section id="gallery" className="py-16 text-center bg-transparent">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Visual Memories
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Immerse yourself in the visual journey of URJOTSAV.
            </p>
          </div>
        </section>

        <GallerySection />
        <FestWeekSection />
      </main>

      {/* Footer - Replace with your Footer component */}
      <Footer />
    </div>
  );
}
