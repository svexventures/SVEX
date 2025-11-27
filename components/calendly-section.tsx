export default function CalendlySection() {
  return (
    <section id="booking" className="relative py-24 px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-balance mb-4 text-secondary-foreground">
            Schedule Your Consultation
          </h2>
          <p className="text-lg text-secondary-foreground">
            Book a personalized appointment with our eyewear specialists
          </p>
        </div>
        
        {/* Calendly Widget */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="calendly-inline-widget" data-url="https://calendly.com/svexventures/30min" style={{ minWidth: '320px', height: '700px' }}></div>
        </div>
      </div>

      {/* Load Calendly script */}
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </section>
  )
}
