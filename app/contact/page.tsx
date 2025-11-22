'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Notification } from '@/components/Notification'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ContactPage() {
  const contactMethodsRef = useScrollAnimation({ threshold: 0.15 })
  const formRef = useScrollAnimation({ threshold: 0.15 })
  const trustRef = useScrollAnimation({ threshold: 0.15 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success')
  const [notificationMessage, setNotificationMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setShowNotification(false)
    setSubmitted(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })

      // Show success notification
      setNotificationType('success')
      setNotificationMessage('Your message has been sent successfully! We\'ll get back to you soon.')
      setShowNotification(true)

      // Reset submitted state after showing notification
      setTimeout(() => {
        setSubmitted(false)
      }, 2000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      setNotificationType('error')
      setNotificationMessage(errorMessage)
      setShowNotification(true)
      setSubmitted(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--accent-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '07300805194',
      link: 'tel:07300805194',
      description: 'Call us for immediate assistance',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--accent-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: '3.1stengineeringltd@gmail.com',
      link: 'mailto:3.1stengineeringltd@gmail.com',
      description: 'Send us an email anytime',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--accent-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Office Hours',
      value: 'Mon - Fri: 8:00 AM - 6:00 PM',
      link: '#',
      description: 'Visit us during business hours',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/constactpa.jpg"
            alt="Construction site background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={70}
          />
          {/* Overlay for text readability - no overlay for light mode, darker for dark mode */}
          <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-background/90 dark:via-background/80 dark:to-background/70"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 rounded-full mb-4">
              <span className="text-xs font-semibold text-[var(--accent-green)]">Get In Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-foreground drop-shadow-lg">Let's Build</span>{' '}
              <span className="text-[var(--accent-green)] relative inline-block drop-shadow-lg">
                <span className="relative z-10">Together</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[var(--accent-green)]/20 -rotate-1"></span>
              </span>
            </h1>
            <p className="text-base lg:text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Have a construction project in mind? We'd love to hear from you. Whether you need commercial,
              residential, or engineering services, let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section ref={contactMethodsRef.ref} className="py-16 lg:py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {contactMethods.map((method, index) => (
              <Link
                key={index}
                href={method.link}
                className={`group relative bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl p-8 hover:border-[var(--accent-green)]/50 transition-all duration-300 overflow-hidden ${contactMethodsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100}ms`, transitionDuration: '700ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-green)]/0 to-[var(--accent-green)]/0 group-hover:from-[var(--accent-green)]/5 group-hover:to-transparent transition-all duration-300"></div>
                
                <div className="relative flex flex-col gap-4">
                  {/* Icon */}
                  <div className="flex items-center justify-start">
                    <div className="p-3 rounded-xl bg-[var(--accent-green)]/10 group-hover:bg-[var(--accent-green)]/20 transition-all duration-300 group-hover:scale-110">
                      {method.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider group-hover:text-[var(--accent-green)] transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-lg font-bold text-foreground group-hover:text-[var(--accent-green)] transition-colors">
                      {method.value}
                    </p>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
                </Link>
            ))}
                  </div>
                  </div>
      </section>

      {/* Main Content - Form and Info */}
      <section ref={formRef.ref} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Form */}
            <div className={`transition-all duration-700 ease-out ${formRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-6 lg:p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2 text-foreground">Send us a message</h2>
                  <p className="text-foreground/70">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                        Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all"
                    />
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                        Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                        placeholder="john.doe@example.com"
                        className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 123 456 7890"
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-foreground">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitted}
                    variant="primary"
                    showIcon={!submitted}
                    customIcon={submitted ? (
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    ) : undefined}
                    className="disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {submitted ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className={`space-y-8 transition-all duration-700 ease-out delay-100 ${formRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Why Contact Us */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Why Contact Us?</h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  We're here to help with your construction needs. Whether you have a specific project
                  in mind or need consultation, our expert team is ready to assist you.
                </p>
                <div className="space-y-4">
                  {[
                    'Free consultation and project estimates',
                    'Expert advice on construction solutions',
                    'Transparent pricing with no hidden costs',
                    'Quick response time - within 24 hours',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[var(--accent-green)]/10 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-[var(--accent-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Careers Contact */}
              <div className="bg-gradient-to-br from-[var(--accent-green)]/10 to-[var(--accent-green)]/5 border-2 border-[var(--accent-green)]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">Interested in Joining Our Team?</h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  We're always looking for talented construction professionals. Send your resume to:
                </p>
                <Link
                  href="mailto:The.volcs1@outlook.com"
                  className="inline-flex items-center gap-2 text-[var(--accent-green)] hover:text-[var(--accent-green-hover)] font-semibold transition-colors group"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>The.volcs1@outlook.com</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section ref={trustRef.ref} className="py-16 lg:py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${trustRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-foreground">Why Clients</span>{' '}
              <span className="text-[var(--accent-green)]">Trust Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '✓',
                title: '13+ Years Experience',
                description: 'Proven track record in construction excellence',
              },
              {
                icon: '✓',
                title: '500+ Projects',
                description: 'Successfully completed projects across sectors',
              },
              {
                icon: '✓',
                title: '98% Satisfaction',
                description: 'Client satisfaction is our top priority',
              },
            ].map((item, index) => (
              <div key={index} className={`text-center transition-all duration-700 ease-out ${trustRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-[var(--accent-green)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-[var(--accent-green)]">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {showNotification && (
        <Notification
          type={notificationType}
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
          duration={notificationType === 'success' ? 5000 : 7000}
        />
      )}
    </main>
  )
}
