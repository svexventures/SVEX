'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Logo Section */}
        <div className="mb-12">
          <Image
            src="/images/logo.jpg"
            alt="SVEX OPTICS Logo"
            width={40}
            height={40}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Column */}
          <div>
            <h4 className="font-serif font-semibold mb-6 text-primary-foreground text-lg">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="transition-colors duration-200 text-sm hover:text-secondary text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-200 text-sm hover:text-secondary text-primary-foreground">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-200 text-sm hover:text-secondary text-primary-foreground">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-200 text-sm hover:text-secondary text-primary-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Column */}
          <div>
            <h4 className="font-serif font-semibold mb-6 text-primary-foreground text-lg">
              Customer
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="transition-colors duration-200 text-sm hover:text-secondary bg-none border-none p-0 cursor-pointer text-primary-foreground">
                  Book Appointment
                </button>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-200 text-sm hover:text-secondary text-primary-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-200 text-sm hover:text-secondary text-primary-foreground">
                  Warranty & Care
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-200 text-sm hover:text-secondary text-primary-foreground">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-serif font-semibold mb-6 text-primary-foreground text-lg">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="transition-colors duration-200 text-sm hover:text-secondary text-primary-foreground">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-200 text-sm hover:text-secondary text-primary-foreground">
                  TikTok
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-200 text-sm hover:text-secondary text-primary-foreground">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-200 text-sm hover:text-secondary text-primary-foreground">
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-secondary/20">
          <p className="text-center text-sm py-8 text-secondary">
            © 2025 SVEX Eyewear. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
