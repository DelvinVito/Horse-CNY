import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { SparkleStars } from '../ui/index.ts';
import { HeroCloudBanner } from '../decorations/HeroCloudBanner.tsx';

interface HeroSectionProps {
  fireworksAnimation: object;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ fireworksAnimation }) => (
  <section className="h-screen snap-start flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
    {/* Awan lengkung full di bagian atas */}
    <HeroCloudBanner />

    {/* Dekorasi bintang berkilau */}
    <SparkleStars count={6} />

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight"
        style={{
          background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 40px rgba(255, 215, 0, 0.5)',
          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))',
        }}
        animate={{
          textShadow: [
            '0 0 20px rgba(255, 215, 0, 0.3)',
            '0 0 40px rgba(255, 215, 0, 0.6)',
            '0 0 20px rgba(255, 215, 0, 0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        Happy Chinese
        <br />
        New Year
      </motion.h1>
    </motion.div>

    <motion.p
      className="text-lg sm:text-xl mt-6 tracking-widest"
      style={{ color: '#FFE4B5' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      ✨ 恭喜发财 ✨
    </motion.p>

    <motion.p
      className="text-base sm:text-lg mt-2"
      style={{ color: '#FFDAB9' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.8 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
    >
      Year of the Horse 2026
    </motion.p>

    {/* Petasan Lottie - ukuran responsif */}
    <div className="absolute bottom-5 sm:bottom-10 w-48 h-48 sm:w-72 sm:h-72">
      <Lottie animationData={fireworksAnimation} loop autoplay />
    </div>
  </section>
);
