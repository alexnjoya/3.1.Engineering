'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ApplicationModal } from '@/components/ApplicationModal'
import { Button } from '@/components/Button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function CareersPage() {
  const positionsRef = useScrollAnimation({ threshold: 0.15 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openPositions = [
    {
      title: 'Site Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'London, UK',
    },
    {
      title: 'Project Manager',
      department: 'Management',
      type: 'Full-time',
      location: 'London, UK',
    },
    {
      title: 'Construction Worker',
      department: 'Operations',
      type: 'Full-time',
      location: 'London, UK',
    },
    {
      title: 'Safety Officer',
      department: 'Health & Safety',
      type: 'Full-time',
      location: 'London, UK',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-background via-[var(--accent-green)]/5 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 rounded-full mb-6">
                <span className="text-sm font-semibold text-[var(--accent-green)]">Join Our Team</span>
            </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Build Your Career</span>{' '}
                <span className="text-[var(--accent-green)]">With Us</span>
            </h1>
              
              <p className="text-lg lg:text-xl text-foreground/80 mb-8 leading-relaxed">
              Join our growing team of construction professionals. We're looking for talented individuals
              who are passionate about building excellence and delivering quality results.
            </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  className="w-auto sm:w-auto"
                >
                  Apply Now
                </Button>
                <Button
                  href="#positions"
                  variant="secondary"
                  className="w-auto sm:w-auto"
                >
                  View Open Positions
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-[var(--border-color)] order-1 lg:order-2">
              <Image
                src="/services/download (6).jpg"
                alt="Construction team working together"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                priority
                quality={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" ref={positionsRef.ref} className="py-20 lg:py-28 bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${positionsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Open</span>{' '}
              <span className="text-[var(--accent-green)]">Positions</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore current job opportunities and find the perfect role for you
            </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className={`bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-none p-6 hover:border-[var(--accent-green)]/50 transition-all group duration-700 ease-out ${positionsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                    <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-[var(--accent-green)] transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[var(--accent-green)]/10 text-[var(--accent-green)] text-sm font-medium rounded-full">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-[var(--bg-tertiary)] text-foreground/70 text-sm font-medium rounded-full">
                        {position.type}
                      </span>
                    </div>
                    </div>
                  </div>
                <div className="flex items-center gap-2 text-foreground/70 mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{position.location}</span>
                  </div>
                  <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 text-[var(--accent-green)] font-semibold hover:gap-3 transition-all group/link text-sm sm:text-base"
                  >
                  <span>Apply Now</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
