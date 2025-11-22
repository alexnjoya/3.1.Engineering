'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/Button'
import { Notification } from '@/components/Notification'

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null as File | null,
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success')
  const [notificationMessage, setNotificationMessage] = useState('')
  const modalRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setShowNotification(false)
    setSubmitted(true)

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone || '')
      formDataToSend.append('position', formData.position)
      formDataToSend.append('experience', formData.experience || '')
      formDataToSend.append('message', formData.message || '')
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume)
      }

      const response = await fetch('/api/application', {
        method: 'POST',
        body: formDataToSend,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application')
      }

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        resume: null,
      })

      // Show success notification
      setNotificationType('success')
      setNotificationMessage('Application submitted successfully! We\'ll review your application and get back to you soon.')
      setShowNotification(true)

      // Close modal after showing notification
      setTimeout(() => {
        setSubmitted(false)
        onClose()
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      })
    }
  }

  // Handle animations and focus
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      // Focus first input when modal opens
      setTimeout(() => {
        firstInputRef.current?.focus()
      }, 150)
    } else {
      // Delay unmounting for exit animation
      const timer = setTimeout(() => setIsAnimating(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Trap focus within modal
  useEffect(() => {
    if (!isOpen) return

    const modal = modalRef.current
    if (!modal) return

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [isOpen])

  if (!isOpen && !isAnimating) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div 
        ref={modalRef}
        className={`bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[var(--bg-primary)] border-b border-[var(--border-color)] px-4 sm:px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 id="modal-title" className="text-2xl lg:text-3xl font-bold mb-1">
              <span className="text-foreground">Apply</span>{' '}
              <span className="text-[var(--accent-green)]">Now</span>
            </h2>
            <p id="modal-description" className="text-xs text-foreground/60">
              Fill out the form below or email your resume directly to{' '}
              <Link href="mailto:careers@31stengineering.co.uk" className="text-[var(--accent-green)] hover:underline font-medium">
                careers@31stengineering.co.uk
              </Link>
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--bg-secondary)] transition-colors group"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-80px)] pb-24 sm:pb-6">
          <form id="application-form" onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-semibold mb-2 text-foreground">
                  Full Name <span className="text-[var(--accent-green)]">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-semibold mb-2 text-foreground">
                  Email <span className="text-[var(--accent-green)]">*</span>
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all text-sm"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-semibold mb-2 text-foreground">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all text-sm"
                  placeholder="+44 123 456 7890"
                />
              </div>
              <div>
                <label htmlFor="modal-position" className="block text-sm font-semibold mb-2 text-foreground">
                  Position Applied For <span className="text-[var(--accent-green)]">*</span>
                </label>
                <input
                  type="text"
                  id="modal-position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="e.g., Site Engineer, Project Manager"
                  className="w-full px-4 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="modal-experience" className="block text-sm font-semibold mb-2 text-foreground">
                Years of Experience
              </label>
              <select
                id="modal-experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all text-sm"
              >
                <option value="">Select experience level</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div>
              <label htmlFor="modal-resume" className="block text-sm font-semibold mb-2 text-foreground">
                Resume/CV <span className="text-[var(--accent-green)]">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="modal-resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all text-sm file:mr-4 file:py-1.5 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[var(--accent-green)]/10 file:text-[var(--accent-green)] hover:file:bg-[var(--accent-green)]/20 file:cursor-pointer"
                />
                {formData.resume && (
                  <div className="mt-2 text-xs text-foreground/60 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {formData.resume.name}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-sm font-semibold mb-2 text-foreground">
                Cover Letter / Additional Information
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us why you'd be a great fit for our team..."
                className="w-full px-4 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]/50 focus:border-[var(--accent-green)] transition-all resize-none text-sm"
              />
            </div>

            <div className="pt-4 pb-6 sm:pb-4">
              <p className="text-xs text-foreground/50 mb-4">
                By submitting, you agree to our privacy policy
              </p>
              <div className="flex justify-center">
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
                  className="w-auto px-8 sm:px-10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {submitted ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {showNotification && (
        <Notification
          type={notificationType}
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
          duration={notificationType === 'success' ? 5000 : 7000}
        />
      )}
    </div>
  )
}

