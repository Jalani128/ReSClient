import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import happyHomeowner1 from '../../images/Happy Homeowners_1.jpg';
import happyHomeowner2 from '../../images/Happy Homeowners_2.jpg';
import happyHomeowner3 from '../../images/Team section.jpg';
import heroFallback from '../../images/Hero Section.jpg';

const HeroSection: React.FC = () => {
  const propertyImages = [happyHomeowner1, happyHomeowner2, happyHomeowner3];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950">
        {/* Fallback background image */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url(${heroFallback})`,
          }}
        />

        {/* Background Video */}
        {!videoError && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-poster.jpg"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            style={{
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            {/* Primary: High-quality MP4 (H.264) for desktop */}
            <source src="/hero-hd.mp4" type="video/mp4" media="(min-width: 768px)" />
            {/* Fallback: Compressed MP4 for mobile/tablet */}
            <source src="/hero-mobile.mp4" type="video/mp4" />
            {/* Alternative: WebM for better compression on supported browsers */}
            <source src="/hero.webm" type="video/webm" />
            {/* Legacy fallback */}
            <source src="/hero.mp4" type="video/mp4" />
            {/* Fallback message */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">🏠</div>
                <p className="text-xl">Premium Real Estate Experience</p>
              </div>
            </div>
          </video>
        )}

        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-10 text-sm text-white"
            >
              <div className="w-2 h-2 bg-sky-300 rounded-full" />
              <span className="font-abtos font-semibold uppercase tracking-[0.3em] text-white/90">
                Luxury curated services
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[42px] sm:text-[52px] lg:text-[70px] leading-[1.03] font-semibold tracking-[-0.03em] mb-8"
            >
              
              <span className="block text-sky-200 mt-2">Discover your next dream homewith a modern concierge experience.</span>
              
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[680px] text-lg lg:text-xl leading-8 text-slate-200/90 mb-12"
            >
              We bring premium listings, expert guidance, and effortless search into one polished experience—so every step feels smooth, informed, and beautifully designed.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://huntmynest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-500 text-white text-lg font-semibold px-7 py-4 rounded-3xl shadow-[0_25px_80px_-30px_rgba(14,165,233,0.8)] transition-all hover:bg-sky-400"
              >
                Explore Properties
                <span className="material-icons text-base">arrow_forward</span>
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-white/30 bg-white/10 text-white text-lg font-semibold px-7 py-4 rounded-3xl hover:bg-white/15 transition-all"
              >
                <span className="material-icons text-base">explore</span>
                Our Services
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2">
                {propertyImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Customer ${index + 1}`}
                    className="w-11 h-11 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <div className="w-11 h-11 rounded-full border-2 border-white bg-white/10 flex items-center justify-center text-xs text-white">
                  +2k
                </div>
              </div>
              <span className="text-sm text-slate-200/80">Trusted by over 2,000 homeowners and sellers.</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-2xl p-8 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.55)]"
          >
            <div className="max-w-[400px]">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-200/80 mb-5">Real estate elevated</p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                A confident way to search, select, and secure premium homes.
              </h2>
              <ul className="space-y-4 text-slate-200/90 text-sm leading-7">
                <li className="flex gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">✓</span>
                  Curated listings with verified quality and location insight.
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">✓</span>
                  Expert support tailored to your search and closing timeline.
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">✓</span>
                  Modern design, fast interactions, and polished visibility across devices.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
