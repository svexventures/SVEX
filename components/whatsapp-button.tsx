'use client';

import Image from 'next/image';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/60133528266?text=Hello%2C%20I'm%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label="WhatsApp"
    >
      <Image
        src="/images/whatsapp-icon.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="w-14 h-14"
      />
    </a>
  );
}
