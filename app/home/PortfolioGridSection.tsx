'use client'

import Image from 'next/image'
import { memo } from 'react'
import { services } from '@/data/services'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const PortfolioGridSection = memo(function PortfolioGridSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  // Portfolio grid layout - converted from services section
  // Layout: Left tall (1 col, rows 1-3) | Middle cards (col 2, rows 1-2) | Right cards (cols 3-4, rows 1-2)
  const gridLayout = [
    { 
      service: services[0], 
      gridClass: 'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3',
      size: 'tall' // Design - tall left
    },
    { 
      service: services[1], 
      gridClass: 'md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2',
      size: 'medium' // Ground Work - middle top
    },
    { 
      service: services[2], 
      gridClass: 'md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3',
      size: 'medium' // Drilling - middle
    },
    { 
      service: services[3], 
      gridClass: 'md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-2',
      size: 'wide' // Mechanical & Electricals - wide top right
    },
    { 
      service: services[4], 
      gridClass: 'md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3',
      size: 'small' // Drylining - small middle right
    },
    { 
      service: services[5], 
      gridClass: 'md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-3',
      size: 'small' // Fire Stop - small middle right
    },
  ].filter(item => item.service) // Filter out any undefined services

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-background"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[var(--accent-green)]/20 to-transparent"></div>
      
      <div className="relative z-10">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 rounded-full">
              <span className="text-sm font-semibold text-[var(--accent-green)]">Our Portfolio</span>
            </div>
          </div>
          
          {/* Main Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 leading-tight">
            <span className="text-foreground">Our Working</span>{' '}
            <span className="text-[var(--accent-green)] relative inline-block">
              <span className="relative z-10">Projects</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-[var(--accent-green)]/20 -rotate-1"></span>
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-center text-foreground/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Showcasing our completed construction projects with{' '}
            <span className="text-[var(--accent-green)] font-semibold">excellence</span> and{' '}
            <span className="text-[var(--accent-green)] font-semibold">precision</span>
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Asymmetric Grid Layout - 4 columns on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5" style={{ gridAutoRows: 'minmax(200px, auto)' }}>
            {gridLayout.map((item, index) => (
              item.service && (
                <div 
                  key={index} 
                  className={`bg-card border-2 border-border/60 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-[var(--accent-green)]/10 hover:border-[var(--accent-green)]/50 transition-all duration-300 hover:scale-[1.02] group relative h-full ${item.gridClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 100}ms`, transitionDuration: '700ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  <div className="relative bg-secondary overflow-hidden w-full h-full">
                    <Image
                      src={item.service.image}
                      alt={`${item.service.title} project illustration`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      quality={70}
                      loading="eager"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      style={item.service.title === 'Ground Work' ? { objectPosition: 'center top' } : {}}
                    />
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-[var(--accent-green)]/5 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Title overlay - visible on mobile, hover on desktop */}
                    <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pb-3 md:pb-0 md:items-center">
                      <div className="text-center px-3 md:px-4">
                        <h3 className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl drop-shadow-lg">
                          {item.service.title}
                        </h3>
                        <p className="text-white/90 text-[10px] sm:text-xs md:text-sm mt-0.5 md:mt-1 drop-shadow-md hidden md:block">
                          {item.service.title} project illustration
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

