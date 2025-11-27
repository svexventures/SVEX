'use client'

export default function OffersSection() {
  const handleLearnMore = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const offers = [
    {
      id: 1,
      title: 'Premium Optical Frames',
      description: 'Handpicked collection of meticulously crafted optical frames for the discerning eye.',
      image: '/luxury-optical-frames-display.jpg',
      span: 'lg:col-span-2 lg:row-span-2'
    },
    {
      id: 2,
      title: 'Sunglasses Collection',
      description: 'Protection meets style. Our curated selection of premium sunglasses.',
      image: '/luxury-sunglasses-collection.jpg',
      span: 'lg:col-span-2'
    },
    {
      id: 3,
      title: 'Blue Light Protection',
      description: 'Modern lenses for the digital age. Comfort in every screen session.',
      image: '/blue-light-protection-eyewear-tech.jpg',
      span: ''
    },
    {
      id: 4,
      title: 'Kids & Teens Eyewear',
      description: 'Fashionable, durable, and designed for growing faces.',
      image: '/kids-teens-eyewear-collection.jpg',
      span: ''
    }
  ]

  return (
    <section id="offers" className="relative py-24 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-balance text-foreground">
            Curated Collections
          </h2>
          <p className="text-lg text-muted">
            Explore our editorial selection of eyewear
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`group cursor-pointer transition-all duration-300 animate-fade-in-up ${offer.span}`}
            >
              <div className="overflow-hidden rounded-lg h-full flex flex-col shadow-md">
                {/* Image */}
                <div className="relative h-80 md:h-96 lg:h-96 overflow-hidden bg-secondary">
                  <img
                    src={offer.image || "/placeholder.svg"}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="bg-white p-6 lg:p-8 flex-1 flex flex-col justify-between border-t-4 border-secondary">
                  <div className="space-y-3">
                    <h3 className="text-foreground">
                      {offer.title}
                    </h3>
                    <p className="text-muted">
                      {offer.description}
                    </p>
                  </div>
                  <button 
                    onClick={handleLearnMore}
                    className="mt-6 font-medium transition-all duration-300 text-primary"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
