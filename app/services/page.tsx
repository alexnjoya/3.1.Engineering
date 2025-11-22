'use client'

import Image from 'next/image'
import Link from 'next/link'
import { services, processSteps } from '@/data/services'
import { Button } from '@/components/Button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ServicesPage() {
  const servicesRef = useScrollAnimation({ threshold: 0.15 })
  const whyChooseRef = useScrollAnimation({ threshold: 0.15 })
  const processRef = useScrollAnimation({ threshold: 0.15 })
  const ctaRef = useScrollAnimation({ threshold: 0.2 })

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/heroimagservice.jpg"
            alt="Construction site background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={80}
          />
          {/* Overlay for text readability - no overlay for light mode, darker for dark mode */}
          <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-background/90 dark:via-background/80 dark:to-background/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 rounded-full mb-4">
              <span className="text-xs font-semibold text-[var(--accent-green)] uppercase tracking-wider">Our Services</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-foreground drop-shadow-lg">Comprehensive</span>{' '}
              <span className="text-[var(--accent-green)] drop-shadow-lg">Construction</span>
              <br />
              <span className="text-foreground drop-shadow-lg">Solutions</span>
            </h1>
            
            <p className="text-base lg:text-lg text-foreground/90 max-w-2xl leading-relaxed mb-6 drop-shadow-md">
              From design to completion, we deliver exceptional construction services across commercial, residential, and engineering sectors. 
              Quality and efficiency are our hallmarks.
            </p>

            <div className="hidden sm:flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-auto sm:w-auto px-4 sm:px-8 py-2 sm:py-4 bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white rounded-full font-semibold transition-all shadow-2xl hover:shadow-3xl hover:scale-105 group text-xs sm:text-lg"
              >
                <span>Get a Quote</span>
                <svg className="w-3.5 h-3.5 sm:w-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 w-auto sm:w-auto px-4 sm:px-8 py-2 sm:py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-foreground dark:text-white rounded-full font-semibold transition-all shadow-2xl hover:shadow-3xl hover:scale-105 group border-2 border-[var(--border-color)] hover:border-[var(--accent-green)]/50 text-xs sm:text-lg"
              >
                <span>Learn More About Us</span>
                <svg className="w-3.5 h-3.5 sm:w-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={servicesRef.ref} className="py-20 lg:py-28 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-16 transition-all duration-700 ease-out ${servicesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Our Core</span>{' '}
              <span className="text-[var(--accent-green)]">Services</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Professional construction services tailored to meet your project needs
            </p>
          </div>
              
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
            {services.map((service, index) => (
              <Link
                  key={index}
                href="/contact"
                className={`group relative bg-[var(--bg-primary)] rounded-lg overflow-hidden border border-[var(--border-color)] hover:border-[var(--accent-green)] transition-all duration-300 grid grid-rows-[auto_1fr] hover:-translate-y-1 ${servicesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-[var(--bg-tertiary)] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 grid grid-rows-[auto_1fr] gap-2.5">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-[var(--accent-green)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section ref={whyChooseRef.ref} className="py-16 sm:py-20 lg:py-28 bg-[var(--bg-secondary)] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Side - Content */}
            <div className={`transition-all duration-700 ease-out ${whyChooseRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 rounded-full mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-semibold text-[var(--accent-green)]">Why Choose Us</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-foreground">Excellence in</span>{' '}
                <span className="text-[var(--accent-green)]">Every Project</span>
              </h2>
              
              <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8 leading-relaxed">
                We combine traditional craftsmanship with modern techniques to deliver exceptional results. 
                Our commitment to quality, efficiency, and client satisfaction sets us apart.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: '✓', title: 'Expert Team', desc: 'Skilled professionals with 13+ years of combined experience' },
                  { icon: '✓', title: 'Quality Assurance', desc: 'Rigorous quality checks ensuring highest standards' },
                  { icon: '✓', title: 'Timely Delivery', desc: 'Projects completed on schedule with proven track record' },
                  { icon: '✓', title: 'Competitive Pricing', desc: 'Transparent pricing with no hidden costs' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] hover:border-[var(--accent-green)]/30 transition-all">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[var(--accent-green)]/10 rounded-lg flex items-center justify-center">
                      <span className="text-[var(--accent-green)] font-bold text-lg sm:text-xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-xs sm:text-sm text-foreground/70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Stats */}
            <div className={`grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 transition-all duration-700 ease-out delay-100 ${whyChooseRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {[
                { 
                  number: '500+', 
                  label: 'Projects Completed', 
                  icon: (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--accent-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                { 
                  number: '13+', 
                  label: 'Years Experience', 
                  icon: (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--accent-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                { 
                  number: '98%', 
                  label: 'Client Satisfaction', 
                  icon: (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--accent-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  )
                },
                { 
                  number: '200+', 
                  label: 'Expert Team', 
                  icon: (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--accent-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
              ].map((stat, index) => (
                <div
                      key={index} 
                  className="bg-[var(--bg-primary)] rounded-xl p-3 sm:p-4 lg:p-6 border border-[var(--border-color)] hover:border-[var(--accent-green)]/50 transition-all text-center"
                >
                  <div className="flex justify-center mb-2 sm:mb-3">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--accent-green)] mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground/70 leading-tight">
                    {stat.label}
                  </div>
                        </div>
              ))}
                              </div>
                            </div>
                          </div>
      </section>

      {/* Process Section */}
      <section ref={processRef.ref} className="py-16 lg:py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-700 ease-out ${processRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              <span className="text-foreground">How We</span>{' '}
              <span className="text-[var(--accent-green)]">Work</span>
            </h2>
            <p className="text-base text-foreground/70 max-w-2xl">
              A proven process that ensures quality, efficiency, and client satisfaction from start to finish
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg overflow-hidden hover:border-[var(--accent-green)]/50 transition-all duration-700 ease-out ${processRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-40 w-full overflow-hidden bg-[var(--bg-tertiary)]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 grid grid-cols-[auto_1fr] gap-3 items-start">
                  {/* Step Number */}
                  <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">{step.number}</span>
                  </div>

                  {/* Text Content */}
                  <div className="grid grid-rows-[auto_1fr] gap-1.5 min-w-0">
                    <h3 className="text-base font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
              </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef.ref} className="py-20 lg:py-28 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ease-out ${ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Ready to Start</span>{' '}
            <span className="text-[var(--accent-green)]">Your Project?</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Let's discuss your construction needs and turn your vision into reality. 
            Our team is ready to deliver excellence on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button href="/contact" variant="primary" className="sm:px-10 sm:py-5">
              Get Started Today
            </Button>
            <Button href="/about" variant="secondary" className="sm:px-10 sm:py-5">
              Learn More About Us
            </Button>
            </div>
          </div>
        </section>
    </main>
  )
}
