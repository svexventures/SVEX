'use client'

import { useEffect, useState } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const handleLearnMore = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="about"
      className="w-full py-20 lg:py-32 px-6 lg:px-12 bg-card"
    >
      <div className="max-w-7xl mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side: Image with parallax effect */}
          <div
            className={`relative overflow-hidden rounded-lg transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <img
                src="/images/design-mode/Award_With_Old_Money_Background.jpg"
                alt="SVEX OPTICS craftsmanship and expertise"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right side: Text content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Accent divider */}
            <div className="w-12 h-1 rounded-full bg-secondary"></div>

            {/* Heading */}
            <h2
              className="font-serif font-bold text-4xl lg:text-5xl leading-tight tracking-tight text-balance text-foreground"
            >
              15 Years of Mastery in Modern Eyewear
            </h2>

            {/* Body text */}
            <p
              className="text-lg leading-relaxed font-light text-foreground"
            >
              For over 15 years, we've dedicated ourselves to redefining how people experience eyewear. Our journey started with a simple belief that exceptional vision and exceptional style should be accessible to everyone. Today, our expertise spans advanced optical craftsmanship, precise fittings, and a curated selection of frames designed for comfort, clarity, and confidence. Every pair reflects our commitment to quality and our passion for helping you see and look your very best.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={handleLearnMore}
                className="px-8 py-4 rounded-full hover:scale-103 transition-all duration-300 font-medium text-lg shadow-md hover:shadow-lg bg-primary text-primary-foreground"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
