'use client'

import { useEffect, useState } from 'react'

interface NotificationProps {
  type: 'success' | 'error'
  message: string
  onClose: () => void
  duration?: number
}

export function Notification({ type, message, onClose, duration = 5000 }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setIsVisible(true), 10)

    if (type === 'success') {
      // Progress bar animation
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev - (100 / (duration / 50))
          return newProgress <= 0 ? 0 : newProgress
        })
      }, 50)

      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose(), 300)
      }, duration)

      return () => {
        clearTimeout(timer)
        clearInterval(interval)
      }
    }
  }, [type, duration, onClose])

  return (
    <div
      className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-[9999] transform transition-all duration-300 ease-out w-[calc(100%-2rem)] sm:w-auto ${
        isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
      }`}
      role="alert"
      aria-live="assertive"
    >
      <div
        className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl min-w-0 sm:min-w-[320px] max-w-md ${
          type === 'success'
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700'
            : 'bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700'
        } text-white`}
        style={{
          boxShadow: type === 'success'
            ? '0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 10px 10px -5px rgba(37, 99, 235, 0.2)'
            : '0 20px 25px -5px rgba(239, 68, 68, 0.3), 0 10px 10px -5px rgba(239, 68, 68, 0.2)',
        }}
      >
        {/* Progress bar */}
        {type === 'success' && (
          <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-white/30">
            <div
              className="h-full bg-white/60 transition-all duration-50 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            {type === 'success' ? (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-scale-in"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-0.5">
            <p className="text-sm sm:text-base font-bold mb-1 sm:mb-1.5 text-white">
              {type === 'success' ? 'Success!' : 'Error'}
            </p>
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
              {message}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={() => {
              setIsVisible(false)
              setTimeout(() => onClose(), 300)
            }}
            className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center group"
            aria-label="Close notification"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

