'use client'

import Link from 'next/link'
import Image from 'next/image'
import { memo } from 'react'
import { processSteps } from '@/data/services'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const ServicesSection = memo(function ServicesSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 })
  
  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-[var(--accent-green)] uppercase tracking-wider">OUR SERVICE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">We Provide Best</span>{' '}
            <span className="text-[var(--accent-green)]">Service</span>
          </h2>
          <p className="hidden sm:block text-base sm:text-lg text-foreground/70 max-w-2xl">
            A proven process that ensures quality, efficiency, and client satisfaction from start to finish
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`group relative bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:border-[var(--accent-green)]/50 hover:shadow-lg hover:shadow-[var(--accent-green)]/10 transition-all duration-300 flex flex-col hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100}ms`, transitionDuration: '700ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                {/* Image Container */}
                <div className="relative h-32 overflow-hidden bg-[var(--bg-tertiary)] rounded-t-xl">
                  <Image
                    src={step.image}
                    alt={`${step.title} process step illustration`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={70}
                    loading="eager"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-base font-bold mb-2 text-foreground group-hover:text-[var(--accent-green)] transition-colors">
                    {step.title}
                  </h3>
                  <p className="hidden sm:block text-foreground/70 leading-relaxed text-xs flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})
