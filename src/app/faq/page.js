'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

const festivalData = {
  urjasangam: {
    name: 'URJA SANGAM',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-gradient-to-br from-orange-500/10 to-red-500/10',
    borderColor: 'border-orange-500/30',
    icon: '🔥',
    faqs: [
      {
        question: 'What is Urja Sangam?',
        answer: 'Urja Sangam is the annual mega festival of RGIPT that brings together four major festivals - Urjotsav (Tech), Kaltarang (Cultural), Energia (Sports), and Souhardya (Social) under one umbrella. It\'s a week-long celebration of innovation, creativity, sportsmanship, and social impact.'
      },
      {
        question: 'When and where is Urja Sangam 2025?',
        answer: 'Urja Sangam 2025 will be held at Rajiv Gandhi Institute of Petroleum Technology (RGIPT), Jais, Uttar Pradesh. The exact dates will be announced soon, typically taking place in November.'
      },
      {
        question: 'How can I register for Urja Sangam?',
        answer: 'Registration can be done through our official website or Unstop platform. Early bird registrations usually open 2-3 months before the event. Keep an eye on our social media channels for registration announcements.'
      },
      {
        question: 'Is there an entry fee for Urja Sangam?',
        answer: 'Entry fees vary depending on the events you want to participate in. Some events are free, while others may have nominal registration fees. Student discounts are available for most events.'
      },
      {
        question: 'What accommodation options are available?',
        answer: 'RGIPT provides hostel accommodation for outstation participants at reasonable rates. We also have tie-ups with nearby hotels and guest houses. Accommodation details will be provided after registration.'
      },
      {
        question: 'How can I stay updated about Urja Sangam?',
        answer: 'Follow our official social media handles on Instagram, Facebook, and LinkedIn. Subscribe to our newsletter and join our WhatsApp groups for real-time updates and announcements.'
      }
    ]
  },
  urjotsav: {
    name: 'URJOTSAV',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-500/10 to-emerald-500/10',
    borderColor: 'border-green-500/30',
    icon: '⚡',
    faqs: [
      {
        question: 'What is Urjotsav?',
        answer: 'Urjotsav is the technical festival of RGIPT, focusing on innovation, technology, and engineering excellence. It features hackathons, tech competitions, workshops, and exhibitions showcasing cutting-edge technology.'
      },
      {
        question: 'What technical events are included in Urjotsav?',
        answer: 'Urjotsav includes hackathons, coding competitions, robotics contests, AI/ML workshops, tech talks by industry experts, project exhibitions, and innovation challenges across various engineering domains.'
      },
      {
        question: 'Do I need to be a tech student to participate?',
        answer: 'Not necessarily! While Urjotsav is tech-focused, we welcome participants from all backgrounds. Many events are designed to be accessible to beginners, and we provide learning resources and mentorship.'
      },
      {
        question: 'What prizes and recognition are available?',
        answer: 'Winners receive cash prizes, certificates, internship opportunities, and recognition from industry partners. The total prize pool typically exceeds ₹5 lakhs across all events.'
      },
      {
        question: 'Are there any prerequisites for tech events?',
        answer: 'Prerequisites vary by event. Basic programming knowledge is helpful for coding competitions, while hackathons welcome all skill levels. We provide detailed requirements for each event during registration.'
      },
      {
        question: 'Can I participate in multiple Urjotsav events?',
        answer: 'Yes! You can participate in multiple events as long as the schedules don\'t conflict. We recommend checking the event timeline before registering for multiple competitions.'
      }
    ]
  },
  kaltarang: {
    name: 'KALTARANG',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-pink-500/10',
    borderColor: 'border-red-500/30',
    icon: '🎭',
    faqs: [
      {
        question: 'What is Kaltarang?',
        answer: 'Kaltarang is the cultural festival of RGIPT, celebrating art, music, dance, drama, and creative expression. It\'s where reality and soul converge through various cultural performances and competitions.'
      },
      {
        question: 'What cultural events are featured in Kaltarang?',
        answer: 'Kaltarang includes dance competitions, music performances, drama/theater, art exhibitions, fashion shows, literary events, photography contests, and cultural fusion nights showcasing diverse traditions.'
      },
      {
        question: 'Can I participate if I\'m not from RGIPT?',
        answer: 'Absolutely! Kaltarang welcomes participants from colleges across India. We encourage cultural diversity and have special categories for inter-college competitions.'
      },
      {
        question: 'What are the different categories in cultural events?',
        answer: 'Events are categorized by dance forms (classical, contemporary, folk), music genres (vocal, instrumental), art styles, and performance types. We also have group and solo categories.'
      },
      {
        question: 'Do I need to bring my own instruments/equipment?',
        answer: 'We provide basic sound equipment and some instruments. For specialized instruments or equipment, participants are advised to bring their own. Detailed equipment lists are provided before events.'
      },
      {
        question: 'How are cultural events judged?',
        answer: 'Events are judged by renowned artists, cultural experts, and industry professionals. Criteria include technical skill, creativity, presentation, and audience engagement. Detailed judging criteria are shared before competitions.'
      }
    ]
  },
  energia: {
    name: 'ENERGIA',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-gradient-to-br from-purple-500/10 to-violet-500/10',
    borderColor: 'border-purple-500/30',
    icon: '💪',
    faqs: [
      {
        question: 'What is Energia?',
        answer: 'Energia is the sports festival of RGIPT, celebrating athleticism, teamwork, and competitive spirit. It features various sports competitions, tournaments, and fitness challenges.'
      },
      {
        question: 'What sports are included in Energia?',
        answer: 'Energia includes cricket, football, basketball, volleyball, badminton, table tennis, athletics, swimming, chess, and many more. We also have fun sports and team-building activities.'
      },
      {
        question: 'Do I need to be a professional athlete to participate?',
        answer: 'Not at all! Energia welcomes participants of all skill levels. We have categories for beginners, intermediate, and advanced players. The focus is on participation, sportsmanship, and fun.'
      },
      {
        question: 'What are the team formation rules?',
        answer: 'Teams can be formed within colleges or as mixed teams. Specific rules vary by sport and are detailed in the event guidelines. We encourage diverse team compositions.'
      },
      {
        question: 'Are there individual and team events?',
        answer: 'Yes! Energia features both individual sports (athletics, swimming, chess) and team sports (cricket, football, basketball). You can participate in multiple events based on your interests.'
      },
      {
        question: 'What safety measures are in place?',
        answer: 'We have qualified sports officials, medical support, first aid facilities, and safety equipment. All participants are required to follow safety guidelines and wear appropriate gear.'
      }
    ]
  },
  souhardya: {
    name: 'SOUHARDYA',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10',
    borderColor: 'border-yellow-500/30',
    icon: '🤝',
    faqs: [
      {
        question: 'What is Souhardya?',
        answer: 'Souhardya is the social impact festival of RGIPT, focusing on community service, social awareness, and making a positive difference in society through various social initiatives and activities.'
      },
      {
        question: 'What social activities are included in Souhardya?',
        answer: 'Souhardya includes blood donation drives, environmental conservation projects, educational outreach programs, community service initiatives, social awareness campaigns, and volunteer activities.'
      },
      {
        question: 'How can I contribute to Souhardya?',
        answer: 'You can participate as a volunteer, organize awareness campaigns, contribute to social projects, donate resources, or lead community initiatives. Every contribution, big or small, makes a difference.'
      },
      {
        question: 'Are there any prerequisites for social activities?',
        answer: 'Most activities require enthusiasm and commitment to social causes. Some activities may require specific skills or certifications (like first aid for medical camps), which we provide training for.'
      },
      {
        question: 'What impact do Souhardya activities have?',
        answer: 'Our activities have reached thousands of people in surrounding communities, contributed to environmental conservation, supported education initiatives, and raised awareness about important social issues.'
      },
      {
        question: 'Can I suggest new social initiatives?',
        answer: 'Absolutely! We welcome innovative ideas for social impact. You can submit proposals for new initiatives, and selected ideas will be supported with resources and implementation assistance.'
      }
    ]
  }
}

export default function FAQPage() {
  const [activeFestival, setActiveFestival] = useState('urjasangam')
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent"
            >
              FREQUENTLY ASKED QUESTIONS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Find answers to common questions about Urja Sangam and all our festivals
            </motion.p>
          </div>
        </section>

        {/* Festival Tiles */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              {Object.entries(festivalData).map(([key, festival]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFestival(key)}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 backdrop-blur-sm ${
                    activeFestival === key
                      ? `${festival.bgColor} ${festival.borderColor} border-opacity-100`
                      : 'bg-black/20 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{festival.icon}</div>
                    <h3 className={`text-lg font-bold ${
                      activeFestival === key 
                        ? `bg-gradient-to-r ${festival.color} bg-clip-text text-transparent`
                        : 'text-white'
                    }`}>
                      {festival.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              key={activeFestival}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="text-center mb-8">
                <h2 className={`text-3xl font-bold bg-gradient-to-r ${festivalData[activeFestival].color} bg-clip-text text-transparent mb-2`}>
                  {festivalData[activeFestival].name} FAQs
                </h2>
                <div className={`w-24 h-1 bg-gradient-to-r ${festivalData[activeFestival].color} mx-auto rounded-full`}></div>
              </div>

              {festivalData[activeFestival].faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${festivalData[activeFestival].bgColor} ${festivalData[activeFestival].borderColor} border rounded-xl overflow-hidden backdrop-blur-sm`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl"
                    >
                      ▼
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-purple-500/10 border border-orange-500/30 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-gray-400 mb-6">
                Can't find the answer you're looking for? Contact our team and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:urjasangam@rgipt.ac.in"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                >
                  Email Us
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Contact Form
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
