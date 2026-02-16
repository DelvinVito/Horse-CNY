import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// Tipe untuk warna yang tersedia
export type KoiColor = 'orange' | 'red' | 'black' | 'white' | 'gold' | 'calico';

// Tipe untuk pola gerakan
export type KoiPattern = 'circle' | 'figure8' | 'horizontal' | 'random';

export interface KoiProps {
  /** Warna utama ikan */
  color?: KoiColor;
  /** Ukuran (lebar dalam px) */
  size?: number;
  /** Posisi awal horizontal (dalam % atau px) */
  initialX?: string;
  /** Posisi awal vertikal (dalam % atau px) */
  initialY?: string;
  /** Pola gerakan */
  pattern?: KoiPattern;
  /** Arah awal (1 = kanan, -1 = kiri) */
  direction?: 1 | -1;
  /** Kecepatan gerakan (semakin besar semakin lambat) */
  speed?: number;
}

// Konstanta warna untuk setiap tipe
const colorMap: Record<KoiColor, { primary: string; secondary: string; accent: string; spots?: string[] }> = {
  orange: { primary: '#FF6B35', secondary: '#FF4500', accent: '#CC3700' },
  red: { primary: '#EF4444', secondary: '#DC2626', accent: '#B91C1C' },
  black: { primary: '#1F2937', secondary: '#111827', accent: '#000000', spots: ['#FBBF24', '#FFFFFF'] },
  white: { primary: '#F9FAFB', secondary: '#F3F4F6', accent: '#D1D5DB', spots: ['#EF4444', '#F97316'] },
  gold: { primary: '#FBBF24', secondary: '#F59E0B', accent: '#B45309' },
  calico: { primary: '#FFFFFF', secondary: '#FFE4E1', accent: '#FFB6C1', spots: ['#FF6B35', '#1F2937', '#FBBF24'] },
};

// Fungsi untuk membuat gradient ID unik
const useUniqueId = (prefix: string) => {
  const id = React.useId();
  return `${prefix}-${id.replace(/:/g, '')}`;
};

export const Koi: React.FC<KoiProps> = ({
  color = 'orange',
  size = 120,
  initialX = '10%',
  initialY = '20%',
  pattern = 'circle',
  direction = 1,
  speed = 1,
}) => {
  // Buat ID unik untuk gradient dan filter
  const bodyGradientId = useUniqueId('koiBody');
  const shadowFilterId = useUniqueId('koiShadow');
  const spotPatternId = useUniqueId('koiSpot');

  // Pilih warna berdasarkan tipe
  const colors = colorMap[color];

  // Tentukan keyframes gerakan berdasarkan pola
  const getMotionKeyframes = () => {
    // Rentang gerak proporsional terhadap ukuran (semakin besar ikan, semakin besar area)
    const range = size * 2.5; // area gerak dalam px
    
    switch (pattern) {
      case 'circle':
        return {
          x: [0, range * direction, 0, -range * direction, 0],
          y: [0, range * 0.5, range * 0.8, range * 0.5, 0],
          rotate: [0, 10 * direction, 0, -10 * direction, 0],
        };
      case 'figure8':
        return {
          x: [0, range * direction, 0, -range * direction, 0],
          y: [0, range * 0.6, 0, -range * 0.6, 0],
          rotate: [0, 15 * direction, 0, -15 * direction, 0],
        };
      case 'horizontal':
        return {
          x: [0, range * 1.8 * direction, 0, -range * 1.8 * direction, 0],
          y: [0, range * 0.2, 0, -range * 0.2, 0],
          rotate: [0, 5 * direction, 0, -5 * direction, 0],
        };
      case 'random':
        return {
          x: [0, range * direction, range * 1.2 * direction, range * 0.5 * direction, 0],
          y: [0, range * 0.3, -range * 0.4, range * 0.5, 0],
          rotate: [0, 12 * direction, -8 * direction, 6 * direction, 0],
        };
      default:
        return {
          x: [0, range * direction, 0, -range * direction, 0],
          y: [0, range * 0.5, 0, -range * 0.5, 0],
          rotate: [0, 10 * direction, 0, -10 * direction, 0],
        };
    }
  };

  const keyframes = getMotionKeyframes();
  const duration = 20 / speed; // semakin besar speed, semakin cepat (duration makin kecil)

  // Variants untuk gerakan tubuh
  const swimVariants: Variants = {
    animate: {
      x: keyframes.x,
      y: keyframes.y,
      rotate: keyframes.rotate,
      transition: {
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'mirror',
      },
    },
  };

  // Variants untuk ekor (animasi independen)
  const tailVariants: Variants = {
    animate: {
      rotate: [0, 20 * direction, -20 * direction, 10 * direction, -10 * direction, 0],
      transition: { duration: 1.2 / speed, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  // Variants untuk sirip
  const finVariants: Variants = {
    animate: {
      rotate: [0, 10, -5, 5, 0],
      transition: { duration: 2 / speed, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  // Menentukan apakah ikan memiliki bintik (calico, black, white)
  const hasSpots = colors.spots && colors.spots.length > 0;

  return (
    <motion.div
      className="absolute"
      style={{ left: initialX, top: initialY, width: size, height: size * 0.6 }}
      variants={swimVariants}
      animate="animate"
    >
      <svg width="100%" height="100%" viewBox="0 0 120 60" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradien badan */}
          <linearGradient id={bodyGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="50%" stopColor={colors.secondary} />
            <stop offset="100%" stopColor={colors.accent} />
          </linearGradient>
          {/* Filter bayangan */}
          <filter id={shadowFilterId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="2" floodOpacity="0.3" />
          </filter>
          {/* Pola bintik jika ada */}
          {hasSpots && (
            <pattern id={spotPatternId} patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(10)">
              {colors.spots!.map((spotColor, idx) => (
                <circle
                  key={idx}
                  cx={10 + idx * 8}
                  cy={10 + idx * 5}
                  r="4"
                  fill={spotColor}
                  opacity="0.8"
                />
              ))}
            </pattern>
          )}
        </defs>

        {/* Badan utama dengan gradien */}
        <ellipse cx="55" cy="30" rx="40" ry="20" fill={`url(#${bodyGradientId})`} filter={`url(#${shadowFilterId})`} />

        {/* Bintik (jika ada) */}
        {hasSpots && (
          <ellipse cx="55" cy="30" rx="40" ry="20" fill={`url(#${spotPatternId})`} opacity="0.5" />
        )}

        {/* Sirip atas dengan animasi */}
        <motion.path
          d="M50 12 Q55 5 60 12"
          fill="none"
          stroke={colors.accent}
          strokeWidth="3"
          variants={finVariants}
          animate="animate"
          style={{ transformOrigin: '55px 12px' }}
        />

        {/* Sirip samping */}
        <motion.ellipse
          cx="40"
          cy="38"
          rx="8"
          ry="4"
          fill={colors.secondary}
          opacity="0.8"
          transform="rotate(-20 40 38)"
          variants={finVariants}
          animate="animate"
          style={{ transformOrigin: '40px 38px' }}
        />

        {/* Kepala */}
        <ellipse cx="22" cy="30" rx="15" ry="12" fill={colors.primary} />

        {/* Mata */}
        <circle cx="15" cy="26" r="4" fill="#FFFFFF" />
        <circle cx="15" cy="26" r="2.5" fill="#1A1A1A" />
        <circle cx="14" cy="25" r="1" fill="#FFFFFF" />

        {/* Mulut */}
        <ellipse cx="8" cy="30" rx="3" ry="2" fill={colors.accent} />

        {/* Kumis */}
        <path d="M8 28 Q2 24 0 26" stroke={colors.accent} strokeWidth="1" fill="none" />
        <path d="M8 32 Q2 36 0 34" stroke={colors.accent} strokeWidth="1" fill="none" />

        {/* Ekor dengan animasi */}
        <motion.g
          variants={tailVariants}
          animate="animate"
          style={{ transformOrigin: '95px 30px' }}
        >
          <path
            d="M90 30 Q105 15 115 20 Q108 30 115 40 Q105 45 90 30Z"
            fill={colors.primary}
            opacity="0.9"
          />
        </motion.g>

        {/* Sisik highlight (efek kilau) */}
        <ellipse cx="50" cy="28" rx="3" ry="2" fill="#FFFFFF" opacity="0.4" />
        <ellipse cx="60" cy="30" rx="2" ry="1.5" fill="#FFFFFF" opacity="0.3" />
        <ellipse cx="70" cy="28" rx="2" ry="1.5" fill="#FFFFFF" opacity="0.3" />
        <ellipse cx="80" cy="30" rx="2" ry="1.5" fill="#FFFFFF" opacity="0.3" />
      </svg>
    </motion.div>
  );
};