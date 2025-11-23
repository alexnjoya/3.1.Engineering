'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const testimonials = [
  {
    name: 'John Martinez',
    role: 'CEO',
    company: 'TechStart Inc.',
    quote:
      'The construction team delivered exceptional work on our commercial building project. Their professionalism, attention to detail, and commitment to quality exceeded our expectations. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emily Johnson',
    role: 'Project Manager',
    company: 'InnovateCo',
    quote:
      'Working with this construction company was outstanding. They completed our residential project on time and within budget. Their expertise and communication throughout the process were excellent.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'CTO',
    company: 'DataFlow Systems',
    quote:
      'The engineering solutions provided transformed our facility. Their team understood our requirements perfectly and delivered a solution that drives real value. Exceptional service!',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Director',
    company: 'BuildCorp Ltd',
    quote:
      'Outstanding construction services! The team was professional, efficient, and delivered exceptional results. Our project was completed ahead of schedule with no compromises on quality.',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    role: 'Operations Manager',
    company: 'Urban Developments',
    quote:
      'From planning to completion, the construction process was seamless. Their attention to detail and commitment to excellence is unmatched. We will definitely work with them again.',
    rating: 5,
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 })
  

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-8 sm:mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-foreground">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl">
            What our clients say about working with us
          </p>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 lg:gap-8 animate-scroll hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] sm:w-[500px] lg:w-[400px] bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl p-4 sm:p-6 lg:p-8 hover:border-[var(--accent-green)]/50 transition-all flex flex-col"
              >
                {/* Rating */}
                <div className="mb-3 sm:mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Quote */}
                <blockquote className="text-foreground/80 leading-relaxed mb-4 sm:mb-6 flex-grow">
                  <p className="text-sm sm:text-base">"{testimonial.quote}"</p>
                </blockquote>

                {/* Author */}
                <div className="pt-3 sm:pt-4 border-t border-[var(--border-color)]">
                  <h3 className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-foreground/70">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

