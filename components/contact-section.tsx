'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="relative py-24 px-6 lg:px-8 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-serif font-bold text-center text-stone-900 mb-16 text-balance">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Store Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-stone-900">Location</h3>
            <p className="text-stone-600 font-light leading-relaxed">
              123 Luxury Avenue<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-stone-900">Hours</h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Monday – Friday: 10am – 7pm<br />
              Saturday: 10am – 6pm<br />
              Sunday: 12pm – 5pm
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-stone-900">Contact</h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Phone: (555) 123-4567<br />
              Email: hello@luxeoptique.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md border border-white/40 rounded-lg p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-stone-900 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white/50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 transition"
                required
              />
            </div>
            <div>
              <label className="block text-stone-900 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full px-4 py-3 bg-white/50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 transition"
                required
              />
            </div>
            <div>
              <label className="block text-stone-900 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
                className="w-full px-4 py-3 bg-white/50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 transition resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition font-medium text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
