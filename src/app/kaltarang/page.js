"use client"
import NavbarKaltarang from "@/components/shared/navbarKaltarang";
import Footer from "@/components/shared/Footer";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { CosmicBackground } from "@/components/shared/Cosmicbackground";
// import styles from './kaltarang.module.css';

// Import the kaltarang section components
import { HeroSection } from "@/components/kaltarang/HeroSection";
import AboutSection from "@/components/kaltarang/AboutSection";
import { StatsSection } from "@/components/kaltarang/StatsSection";
import { EventsSection } from "@/components/kaltarang/EventsSection";
import { PastEventsSection } from "@/components/kaltarang/PastEventsSection";
import { GallerySection } from "@/components/kaltarang/GallerySection";
import  FestWeekSection  from "@/components/kaltarang/FestWeekSection";

// Add the 'default' keyword here to fix the export error
export default function kaltarangPage() {
  return (
    <div className="relative min-h-screen">

      {/* Navbar - Replace with your Navbar component */}
      <NavbarKaltarang />

      <main className="relative z-10 text-white">
        <HeroSection />
        <AboutSection />
        {/* <StatsSection /> */}
        <EventsSection />
        <PastEventsSection />
        
        <section id="gallery" className="py-16 text-center bg-transparent">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Visual Memories</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Immerse yourself in the visual journey of kaltarang.
            </p>
          </div>
        </section>
        
        <GallerySection />
        <FestWeekSection />
      </main>

      {/* Footer - Replace with your Footer component */}
      <Footer/>
    </div>
  );
}
