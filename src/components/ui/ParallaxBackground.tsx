import React from 'react';
import { motion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { Lantern, Cloud } from '../decorations/index.ts';

interface ParallaxBackgroundProps {
  mountainY: MotionValue<number>;
  templeY: MotionValue<number>;
  lanternY: MotionValue<number>;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  mountainY,
  templeY,
  lanternY,
}) => (
  <div className="fixed inset-0 pointer-events-none">
    {/* Gunung (layer belakang) */}
    <motion.div
      className="absolute bottom-0 left-0 w-full h-1/2 bg-cover bg-bottom"
      style={{ y: mountainY, backgroundImage: 'url(/snow-mountain.svg)' }}
    />
    {/* Kuil (layer tengah) */}
    <motion.div
      className="absolute bottom-0 left-1/4 w-1/2 h-64 bg-contain bg-no-repeat bg-bottom"
      style={{ y: templeY, backgroundImage: 'url(/temple.svg)' }}
    />
    {/* Lampion depan (hanya tampil di layar sedang ke atas) */}
    <motion.div
      className="absolute bottom-10 left-5 sm:left-10 w-20 h-32 sm:w-32 sm:h-48 hidden sm:block"
      style={{ y: lanternY }}
    >
      <Lantern delay={0.5} />
    </motion.div>
    <motion.div
      className="absolute bottom-20 right-5 sm:right-10 w-20 h-32 sm:w-32 sm:h-48 hidden sm:block"
      style={{ y: lanternY }}
    >
      <Lantern delay={1.2} />
    </motion.div>

    {/* Awan dekoratif (responsif: sembunyikan di HP) */}
    <Cloud className="absolute top-20 left-5 sm:left-10 opacity-50 hidden sm:block" />
    <Cloud className="absolute top-40 right-5 sm:right-10 opacity-30 hidden md:block" />
  </div>
);
