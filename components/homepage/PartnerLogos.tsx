'use client';

import Image from 'next/image';

export default function PartnerLogos() {
  const partners = [
    { name: 'Airbnb', logo: '/partner-airbnb.png', width: 140, height: 40 },
    { name: 'Booking.com', logo: '/partner-booking.png', width: 140, height: 40 },
    { name: 'Vrbo', logo: '/partner-vrbo.png', width: 140, height: 40 },
    { name: 'Expedia', logo: '/partner-expedia.png', width: 180, height: 50 },
    { name: 'Agoda', logo: '/partner-agoda.jpg', width: 140, height: 40 },
    { name: 'Trip.com', logo: '/partner-trip.png', width: 140, height: 40 }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-dark-text/60 uppercase tracking-wide">
            Our Distribution Partners
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="object-contain"
                style={{ width: 'auto', maxHeight: '45px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
