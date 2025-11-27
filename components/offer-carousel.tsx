'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function OfferCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const carouselItems = [
    {
      id: 1,
      title: 'Premium Optical Frames',
      description: 'Handpicked collection of meticulously crafted optical frames for the discerning eye.',
      image: '/luxury-optical-frames-display.jpg'
    },
    {
      id: 2,
      title: 'Sunglasses Collection',
      description: 'Protection meets style. Our curated selection of premium sunglasses.',
      image: '/luxury-sunglasses-collection.jpg'
    },
    {
      id: 3,
      title: 'Blue Light Protection',
      description: 'Modern lenses for the digital age. Comfort in every screen session.',
      image: '/blue-light-protection-eyewear-tech.jpg'
    },
    {
      id: 4,
      title: 'Kids & Teens Eyewear',
      description: 'Fashionable, durable, and designed for growing faces.',
      image: '/kids-teens-eyewear-collection.jpg'
    }
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5500)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlay, carouselItems.length])

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    setIsAutoPlay(false)
  }

  const handleLearnMore = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-24 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-balance text-foreground">
            Featured Selections
          </h2>
          <p className="text-lg text-muted">
            Discover our latest editorial offerings
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Carousel Wrapper */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-2xl mx-auto">
                    {/* Editorial Card */}
                    <div className="group cursor-pointer">
                      {/* Image Container */}
                      <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg mb-6 bg-secondary">
                        <img
                          src={item.image || "/placeholder.svg?height=600&width=400&query=luxury eyewear"}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Content */}
                      <div className="text-center space-y-4 px-4">
                        <h3 className="text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-base leading-relaxed max-w-xl mx-auto text-muted">
                          {item.description}
                        </p>
                        <button
                          onClick={handleLearnMore}
                          className="mt-8 inline-flex items-center gap-2 font-medium transition-colors duration-300 text-primary"
                        >
                          Learn More →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/3 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 group hover:scale-110 bg-secondary/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/3 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 group hover:scale-110 bg-secondary/30"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlay(false)
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-2'
                    : 'w-2 h-2 hover:w-3'
                }`}
                style={{
                  backgroundColor: index === currentSlide ? 'hsl(var(--foreground))' : 'hsl(var(--muted))'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            onClick={handleLearnMore}
            className="px-8 py-3 font-medium transition-all duration-300 rounded-lg border-2 border-muted text-foreground"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  )
}
