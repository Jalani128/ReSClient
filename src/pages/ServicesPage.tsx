import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useSEO } from '../hooks/useSEO';

const ServicesPage: React.FC = () => {
  useSEO({
    title: 'Our Services - BuildEstate',
    description: 'Discover BuildEstate\'s premium real estate services including property search, investment analysis, and personalized home finding.',
  });

  const services = [
    {
      title: 'Property Search',
      description: 'Find your perfect property with our expert guidance that understands your preferences.',
      icon: '🔍',
    },
    {
      title: 'Location Trends Analysis',
      description: 'Get detailed insights into neighborhood trends, price appreciation, and future development plans.',
      icon: '📈',
    },
    {
      title: 'Investment Insights',
      description: 'Receive personalized investment recommendations based on your budget and goals.',
      icon: '💰',
    },
    {
      title: 'Virtual Tours',
      description: 'Explore properties from the comfort of your home with immersive virtual walkthroughs.',
      icon: '🏠',
    },
    {
      title: 'Appointment Scheduling',
      description: 'Schedule property viewings directly through our platform with real-time availability.',
      icon: '📅',
    },
    {
      title: 'Market Reports',
      description: 'Stay informed with weekly market updates and price trend reports for your target areas.',
      icon: '📊',
    },
  ];

  return (
    <div className="bg-[#F8F6F6] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-fraunces text-5xl lg:text-[70px] leading-tight text-[#111827] mb-6">
              Our Services
            </h1>
            <p className="font-manrope text-xl text-[#4b5563] max-w-2xl mx-auto">
              BuildEstate offers a comprehensive suite of premium services to help you find your dream property with confidence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-[#E6D5C3] hover:border-[#2E3192] transition-all hover:shadow-xl"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-fraunces text-2xl font-bold text-[#111827] mb-3">
                  {service.title}
                </h3>
                <p className="font-manrope text-[#4b5563] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="font-manrope text-lg text-[#4b5563] mb-6">
              Ready to explore properties?
            </p>
            <a
              href="https://huntmynest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2E3192] text-white font-manrope font-bold px-8 py-4 rounded-xl hover:bg-[#B86851] transition-all shadow-lg hover:shadow-xl"
            >
              Browse Properties
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
