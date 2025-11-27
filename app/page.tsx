import NavigationBar from '@/components/navigation-bar'
import HeroSection from '@/components/hero-section'
import OffersSection from '@/components/offers-section'
import OfferCarousel from '@/components/offer-carousel'
import ReviewsSection from '@/components/reviews-section'
import CalendlySection from '@/components/calendly-section'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import AboutSection from '@/components/about-section'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#DAD6CE' }}>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <OffersSection />
      <OfferCarousel />
      <ReviewsSection />
      <CalendlySection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
