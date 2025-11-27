'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleBookNow = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/40 backdrop-blur-xl border-b shadow-lg' 
        : 'bg-white/20 backdrop-blur-md border-b border-white/10'
    }`}
    style={{
      borderColor: isScrolled ? 'hsl(var(--border))' : 'rgba(255, 255, 255, 0.1)',
      boxShadow: isScrolled ? '0 4px 12px rgba(var(--muted) / 0.1)' : 'none'
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-8">
        <div className="rounded-full overflow-hidden p-1 bg-primary">
          <div className="rounded-full overflow-hidden bg-white">
            <Image
              src="/images/design-mode/download%20%281%29.png"
              alt="SVEX OPTICS Logo"
              width={48}
              height={48}
              className="animate-fade-in-up"
            />
          </div>
        </div>

        <div className="hidden md:flex gap-8 items-center flex-1">
          <Link href="#home" className="font-medium transition-colors duration-200 whitespace-nowrap text-muted">
            Home
          </Link>
          <Link href="#offers" className="font-medium transition-colors duration-200 whitespace-nowrap text-muted">
            Offers
          </Link>
          <Link href="#reviews" className="font-medium transition-colors duration-200 whitespace-nowrap text-muted">
            Reviews
          </Link>
          <a 
            href="https://wa.me/60133528266?text=Hello%2C%20I'm%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors duration-200 whitespace-nowrap text-muted hover:opacity-80" 
          >
            Contact
          </a>
        </div>

        <button 
          onClick={handleBookNow}
          className="hidden md:block px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ml-auto bg-primary text-primary-foreground"
        >
          Book Now
        </button>
      </div>
    </nav>
  )
}
