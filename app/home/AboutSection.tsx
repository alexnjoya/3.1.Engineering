'use client'

import Image from 'next/image'
import { memo } from 'react'
import { Button } from '@/components/Button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const AboutSection = memo(function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })
  
  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden bg-[var(--bg-secondary)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image with Enhanced Experience Badge */}
          <div className={`relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative rounded-xl overflow-hidden border border-[var(--border-color)]">
              <Image
                src="/2.jpg"
                alt="Construction worker operating jackhammer at construction site"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                quality={70}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              {/* Enhanced Experience Badge - Left Bottom - Perfect Circle */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[var(--accent-green)] rounded-full shadow-lg flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white mb-1 sm:mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-none mb-0.5 sm:mb-1">25+</div>
                  <div className="text-[8px] sm:text-[9px] lg:text-[10px] text-white/90 font-medium leading-tight px-1 sm:px-2">Years of<br />Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-6 transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-foreground">Exceptional construction</span>{' '}
              <span className="text-[var(--accent-green)]">services</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-foreground/80 text-lg leading-relaxed">
              With over 25 years of experience in the construction industry, we have built a reputation for delivering exceptional quality and innovative solutions. Our team of skilled professionals brings expertise and dedication to every project.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className={`bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-3 sm:p-4 hover:border-[var(--accent-green)]/50 hover:shadow-lg transition-all duration-700 ease-out text-center flex flex-col items-center justify-center group hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.2s' }}>
                <div className="text-base sm:text-2xl md:text-3xl font-bold text-[var(--accent-green)] mb-1">500+</div>
                <div className="text-[10px] sm:text-xs font-medium text-foreground/70 leading-tight">Projects Completed</div>
              </div>
              <div className={`bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-3 sm:p-4 hover:border-[var(--accent-green)]/50 hover:shadow-lg transition-all duration-700 ease-out text-center flex flex-col items-center justify-center group hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.3s' }}>
                <div className="text-base sm:text-2xl md:text-3xl font-bold text-[var(--accent-green)] mb-1">98%</div>
                <div className="text-[10px] sm:text-xs font-medium text-foreground/70 leading-tight">Client Satisfaction</div>
              </div>
            </div>

            {/* Second Description Paragraph */}
            <p className="text-foreground/70 text-base leading-relaxed">
              We combine traditional craftsmanship with modern techniques to ensure every project meets the highest standards. From initial design to final completion, we work closely with our clients to bring their vision to life.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Button href="/about" variant="primary">
                DISCOVER MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

