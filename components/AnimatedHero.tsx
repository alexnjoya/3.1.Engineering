"use client";

import Link from "next/link";
import Image from "next/image";

export function AnimatedHero() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] min-h-[500px] sm:min-h-[550px] max-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Black Background */}
      <div className="absolute inset-0 z-0 bg-black"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full relative w-full">
          <div
            className="absolute inset-0 right-0 overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)'
            }}
          >
            <Image
              src="/heorima.jpg"
              alt="Construction Site - Building Excellence"
              fill
              className="object-contain"
              style={{ objectPosition: '85% top', transform: 'scale(1.1)' }}
              priority
              quality={80}
              sizes="(max-width: 1536px) 100vw, 1536px"
            />
          </div>
        </div>
        {/* Additional overlay for smoother left edge */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, black 0%, black 15%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.05) 75%, transparent 85%)'
          }}
        ></div>
        {/* Right edge blend to hide sharp border */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, black 0%, rgba(0,0,0,0.95) 5%, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.7) 15%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.05) 35%, transparent 40%)'
          }}
        ></div>
        {/* Top and bottom edge blends */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl relative">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4 animate-fade-in-up">
              <span className="text-xs font-semibold text-white">WELCOME</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-2xl animate-fade-in-up animate-delay-100">
              Building Excellence
              <br />
              <span className="text-[#3b82f6] dark:text-[#60a5fa]">
                Since 2011.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-lg animate-fade-in-up animate-delay-200">
              Well driven Artisans, full of resilience to get the job done competently. We put begotten strategies in place to execute a project. Providing quality and efficiency is our hallmark!
            </p>

            <div className="animate-fade-in-up animate-delay-300">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-auto sm:w-auto px-8 py-3 sm:px-10 sm:py-5 text-base sm:text-xl bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white rounded-full font-semibold transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                Contact us 
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Completion Card - Positioned at bottom right */}
        <div className="hidden sm:flex absolute bottom-4 sm:bottom-0 right-4 sm:right-8 lg:right-12 xl:right-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 shadow-2xl animate-fade-in-up animate-delay-500 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3">
            {/* Circular Progress */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
              <svg className="transform -rotate-90 w-12 h-12 sm:w-14 sm:h-14">
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-gray-300 dark:text-gray-700 opacity-50"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 24}`}
                  strokeDashoffset={`${2 * Math.PI * 24 * (1 - 0.72)}`}
                  className="text-[#2563eb] dark:text-[#3b82f6]"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-[#2563eb] dark:text-[#3b82f6]">
                  72%
                </span>
              </div>
            </div>

            {/* Text Content */}
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                Project Completion
              </p>
              <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
                On time delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
