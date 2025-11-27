'use client'

import { useEffect, useState } from 'react'

export default function ReviewsSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const reviews = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      text: 'The quality is exceptional, and the style is timeless. I\'ve received compliments every day since I got my frames.',
      rating: 5
    },
    {
      id: 2,
      name: 'James Chen',
      text: 'Finally found eyewear that doesn\'t compromise on comfort or aesthetics. Worth every penny.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      text: 'The customer service was impeccable, and the frames exceeded my expectations. Highly recommend!',
      rating: 5
    }
  ]

  const handleBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="reviews" className="relative py-24 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src="/fashion-model-wearing-luxury-eyewear-profile.jpg"
              alt="Customer testimonial"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Reviews */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-2 animate-fade-in-up">
              <h2 className="text-balance text-foreground">
                Loved by Our Customers
              </h2>
              <p className="text-lg text-muted">
                Real stories from real people
              </p>
            </div>

            {/* Review Cards */}
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div 
                  key={review.id} 
                  className="p-6 lg:p-8 rounded-lg border-2 border-secondary bg-white transition-all duration-500"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: isLoaded ? `${index * 150}ms` : '0ms'
                  }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-lg text-primary">★</span>
                    ))}
                  </div>
                  <p className="font-light text-lg leading-relaxed mb-4 text-foreground">
                    "{review.text}"
                  </p>
                  <p className="font-serif font-semibold text-foreground">
                    {review.name}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={handleBooking}
              className="w-full px-8 py-4 rounded-full hover:scale-103 transition-all duration-300 font-medium text-lg bg-primary text-primary-foreground"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
