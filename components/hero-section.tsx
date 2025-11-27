'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative w-full h-screen pt-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/design-mode/Luxury%20Editorial%20Landscape.jpg"
          alt="Model wearing luxury eyewear in minimalist setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 lg:px-8">
        <div className={`space-y-6 transition-all duration-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-balance font-serif font-bold leading-tight tracking-tight text-foreground">
            Affordable Luxury Eyewear
          </h1>
          <p className="text-2xl lg:text-3xl text-balance font-medium text-muted">
            Designed for comfort. Crafted for confidence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button
              onClick={handleBooking}
              className="px-8 py-4 rounded-full hover:scale-103 transition-all duration-300 font-medium text-lg shadow-md hover:shadow-lg bg-primary text-primary-foreground"
            >
              Book Your Appointment
            </button>
            <button
              onClick={() => {
                document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg border-2 border-foreground text-foreground hover:bg-opacity-10"
            >
              View Offers
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
