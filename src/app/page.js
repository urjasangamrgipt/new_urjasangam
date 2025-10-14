'use client'

import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import FestSlider from '@/components/home/FestSlider'
import Gallery from '@/components/home/Gallery'
import Timeline from '@/components/home/Timeline'
import Sponsors from '@/components/home/Sponsors'
import Contact from '@/components/home/Contact'
import RegistrationModal from '@/components/shared/RegistrationModal'
import Footer from "@/components/shared/Footer";
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      const progressBar = document.getElementById('scroll-progress')
      if (progressBar) {
        progressBar.style.width = scrolled + '%'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Hero onRegisterClick={() => setIsModalOpen(true)} />
      <About />
      <FestSlider />
      <Gallery />
      <Timeline />
      <Sponsors />
      <Contact />
      <Footer/>
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}