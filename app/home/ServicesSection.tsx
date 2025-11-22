'use client'

import { memo } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

// Icon components
const CommercialIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const ResidentialIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const EngineeringIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ConsultantIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const RoadIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
)

const sectors = [
  { 
    name: 'Commercial', 
    label: 'Commercial',
    icon: CommercialIcon
  },
  { 
    name: 'Residential', 
    label: 'Residential',
    icon: ResidentialIcon
  },
  { 
    name: 'Engineering Services', 
    label: 'Engineering Services',
    icon: EngineeringIcon
  },
  { 
    name: 'Consultant', 
    label: 'Consultant',
    icon: ConsultantIcon
  },
  { 
    name: 'Road-utilities Reinstatement', 
    label: 'Road-utilities Reinstatement',
    icon: RoadIcon
  },
]

export const ServicesSection = memo(function ServicesSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 })
  
  // Duplicate sectors for seamless infinite scroll
  const duplicatedSectors = [...sectors, ...sectors, ...sectors]
  
  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-[var(--accent-green)] uppercase tracking-wider">WHAT WE DO</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-foreground relative inline-block">
                What We Do
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-green)]/40 via-[var(--accent-green)] to-[var(--accent-green)]/40 rounded-full"></span>
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl">
              Explore our diverse sectors and specialized services
            </p>
          </div>
        </div>

        {/* Infinite Horizontal Scroll Container */}
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="flex gap-4 sm:gap-5 md:gap-6 animate-scroll-right hover:[animation-play-state:paused] px-4 sm:px-6 lg:px-8">
            {duplicatedSectors.map((sector, index) => (
              <div
                key={index}
                className="flex-shrink-0 group relative"
              >
                {/* Spherical Card */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-2 border-[var(--border-color)] hover:border-[var(--accent-green)]/50 hover:shadow-2xl hover:shadow-[var(--accent-green)]/20 transition-all duration-300 flex flex-col items-center justify-center p-2 sm:p-2.5 md:p-3 hover:scale-105">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[var(--accent-green)]/10 rounded-full flex items-center justify-center group-hover:bg-[var(--accent-green)]/20 transition-colors mb-1.5 sm:mb-2 p-1.5">
                    <div className="w-full h-full text-[var(--accent-green)]">
                      <sector.icon />
                    </div>
                  </div>
                  <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-foreground group-hover:text-[var(--accent-green)] transition-colors text-center leading-tight px-0.5">
                    {sector.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})
