'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AboutPage() {
  const missionRef = useScrollAnimation({ threshold: 0.2 })
  const historyRef = useScrollAnimation({ threshold: 0.2 })
  const valuesRef = useScrollAnimation({ threshold: 0.15 })
  const chooseRef = useScrollAnimation({ threshold: 0.2 })
  const ctaRef = useScrollAnimation({ threshold: 0.2 })

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-background via-[var(--accent-green)]/5 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 rounded-full mb-4">
                <span className="text-xs font-semibold text-[var(--accent-green)]">OUR STORY</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Building Excellence</span>{' '}
                <span className="text-[var(--accent-green)]">Since 2011</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-foreground/80 mb-8 leading-relaxed">
                Well driven Artisans, full of resilience to get the job done competently. We put begotten strategies in place to execute a project. Providing quality and efficiency is our hallmark!
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm">
                <div className="bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-3 sm:p-4 hover:border-[var(--accent-green)]/50 hover:shadow-lg transition-all text-center flex flex-col items-center justify-center group">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent-green)] mb-1">13+</div>
                  <div className="text-[10px] sm:text-xs font-medium text-foreground/70 leading-tight">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-3 sm:p-4 hover:border-[var(--accent-green)]/50 hover:shadow-lg transition-all text-center flex flex-col items-center justify-center group">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent-green)] mb-1">500+</div>
                  <div className="text-[10px] sm:text-xs font-medium text-foreground/70 leading-tight">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-[var(--border-color)]">
              <Image
                src="/aboutImage.jpg"
                alt="Construction company team and projects"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                priority
                quality={70}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef.ref} className="py-20 lg:py-28 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Our Mission</span>{' '}
              <span className="text-[var(--accent-green)]">& Vision</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className={`bg-gradient-to-br from-[var(--accent-green)]/10 to-transparent rounded-2xl p-8 lg:p-10 border border-[var(--accent-green)]/20 transition-all duration-700 ease-out ${missionRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.1s' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center p-2">
                  <Image
                    src="/mission_1628579.png"
                    alt="Mission icon"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain icon-theme"
                    quality={70}
                    loading="eager"
                  />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed">
                To deliver exceptional construction services that exceed client expectations through innovative solutions, superior craftsmanship, and unwavering commitment to quality. We strive to build lasting relationships while transforming visions into reality.
              </p>
            </div>

            <div className={`bg-gradient-to-br from-[var(--accent-green)]/10 to-transparent rounded-2xl p-8 lg:p-10 border border-[var(--accent-green)]/20 transition-all duration-700 ease-out ${missionRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center p-2">
                  <Image
                    src="/binoculars_5052613.png"
                    alt="Vision icon"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain icon-theme"
                    quality={70}
                    loading="eager"
                  />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed">
                To be the leading construction company recognized for excellence, innovation, and integrity. We envision a future where every project we undertake sets new standards for quality, sustainability, and client satisfaction in the construction industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section ref={historyRef.ref} className="py-20 lg:py-28 bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-[var(--border-color)] transition-all duration-700 ease-out ${historyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Image
                src="/Transform Your Space with General Construction.jpg"
                alt="Construction worker in interior renovation space"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={70}
                loading="eager"
              />
            </div>

            {/* Content */}
            <div className={`transition-all duration-700 ease-out delay-100 ${historyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 rounded-full mb-6">
                <span className="text-sm font-semibold text-[var(--accent-green)]">OUR JOURNEY</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-foreground">A Legacy of</span>{' '}
                <span className="text-[var(--accent-green)]">Excellence</span>
              </h2>
              
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Founded in 2011, we began with a simple vision: to deliver exceptional construction services that exceed expectations. Over the years, we've grown from a small team of dedicated artisans to a trusted name in the construction industry.
              </p>

              <div className="space-y-4">
                {[
                  { year: '2011', title: 'Company Founded', desc: 'Started with a vision to deliver exceptional construction services' },
                  { year: '2015', title: 'Major Expansion', desc: 'Expanded operations and completed our 100th project' },
                  { year: '2021', title: 'Industry Recognition', desc: 'Received multiple awards for excellence in construction' },
                  { year: '2024', title: 'Leading the Future', desc: 'Continuing to set new standards with 500+ completed projects' },
                ].map((milestone, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--accent-green)]/10 rounded-lg flex items-center justify-center">
                        <span className="text-base sm:text-xl font-bold text-[var(--accent-green)]">{milestone.year}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">{milestone.title}</h4>
                      <p className="text-xs sm:text-sm text-foreground/70">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef.ref} className="py-20 lg:py-28 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Our Core</span>{' '}
              <span className="text-[var(--accent-green)]">Values</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The fundamental principles that drive our work and define who we are
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Quality Excellence',
                description: 'We never compromise on quality. Every project is executed with meticulous attention to detail and the highest standards.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Integrity & Trust',
                description: 'Honesty and transparency form the foundation of all our relationships. We build trust through consistent actions.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Innovation',
                description: 'We embrace new technologies and methods to deliver better, faster, and more efficient construction solutions.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Safety First',
                description: 'The safety of our team and clients is paramount. We maintain rigorous safety protocols on every project.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Client Focus',
                description: 'Our clients success is our success. We listen, understand, and deliver solutions tailored to their unique needs.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Sustainability',
                description: 'We are committed to environmentally responsible construction practices that benefit communities and future generations.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl p-6 hover:border-[var(--accent-green)]/50 transition-all duration-700 ease-out ${valuesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-[var(--accent-green)]/10 rounded-lg flex items-center justify-center text-[var(--accent-green)] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      {/* Why Choose Us Section */}
      <section ref={chooseRef.ref} className="py-20 lg:py-28 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ease-out ${chooseRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/Professional Installation You Can Rely On.jpg"
                  alt="Professional construction worker with spirit level at construction site"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  quality={70}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className={`transition-all duration-700 ease-out delay-100 ${chooseRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 rounded-full w-fit">
                  <span className="text-sm font-semibold text-[var(--accent-green)]">WHY CHOOSE US</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-foreground">Excellence in</span>{' '}
                  <span className="text-[var(--accent-green)]">Every Project</span>
                </h2>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  We combine traditional craftsmanship with modern techniques to deliver exceptional results. Our commitment to quality, efficiency, and client satisfaction sets us apart.
                </p>

                <div className="space-y-4">
                  {[
                    'Expert team with 13+ years of combined experience',
                    'Proven track record of 500+ successful projects',
                    'Commitment to quality and timely delivery',
                    'Innovative solutions and modern construction techniques',
                    'Transparent communication throughout the project',
                    'Comprehensive safety protocols and insurance coverage',
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[var(--accent-green)]/10 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-[var(--accent-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-foreground/80 text-lg leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-green)] hover:bg-[var(--accent-green-hover)] text-white font-semibold rounded-lg transition-all hover:scale-105 group"
                  >
                    <span>GET IN TOUCH</span>
                    <svg 
                      className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef.ref} className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[var(--accent-green)]/10 via-[var(--accent-green)]/5 to-transparent">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ease-out ${ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">Ready to Build</span>{' '}
            <span className="text-[var(--accent-green)]">Something Amazing?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss your project and turn your vision into reality. Our team is ready to bring expertise, quality, and dedication to your next construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button href="/contact" variant="primary" className="sm:px-8 sm:py-4">
              START YOUR PROJECT
            </Button>
            <Button href="/services" variant="secondary" className="sm:px-8 sm:py-4">
              VIEW OUR SERVICES
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
