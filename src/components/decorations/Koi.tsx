import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export type KoiColor = 'orange' | 'red' | 'black' | 'white' | 'gold' | 'calico';

export interface KoiProps {
  color?: KoiColor;
  size?: number;
  initialX?: string;
  initialY?: string;
  direction?: 1 | -1;
  speed?: number; // 1 = normal
}

// Peta warna (sama seperti sebelumnya)
const colorMap: Record<KoiColor, { primary: string; secondary: string; accent: string; spots?: string[] }> = {
  orange: { primary: '#FF6B35', secondary: '#FF4500', accent: '#CC3700' },
  red: { primary: '#EF4444', secondary: '#DC2626', accent: '#B91C1C' },
  black: { primary: '#1F2937', secondary: '#111827', accent: '#000000', spots: ['#FBBF24', '#FFFFFF'] },
  white: { primary: '#F9FAFB', secondary: '#F3F4F6', accent: '#D1D5DB', spots: ['#EF4444', '#F97316'] },
  gold: { primary: '#FBBF24', secondary: '#F59E0B', accent: '#B45309' },
  calico: { primary: '#FFFFFF', secondary: '#FFE4E1', accent: '#FFB6C1', spots: ['#FF6B35', '#1F2937', '#FBBF24'] },
};

// Fungsi untuk membuat ID unik
const useUniqueId = (prefix: string) => {
  const id = React.useId();
  return `${prefix}-${id.replace(/:/g, '')}`;
};

// Fungsi untuk menghasilkan gerakan acak yang realistis (seperti di kolam)
const generateRandomMotion = (size: number, direction: number, seed: number) => {
  // Gunakan seed untuk membuat variasi acak yang konsisten
  const r = (n: number) => (Math.sin(seed + n) * 0.5 + 0.5); // pseudo-random number 0-1

  // Durasi total siklus (antara 15-30 detik)
  const cycleDuration = 20 + r(1) * 15;

  // Jumlah keypoint (antara 6-10)
  const numPoints = 6 + Math.floor(r(2) * 5);

  // Rentang gerak proporsional terhadap ukuran (maks 3x ukuran)
  const range = size * (2 + r(3) * 2);

  // Buat keyframes untuk x, y, rotate
  const xKeyframes: number[] = [];
  const yKeyframes: number[] = [];
  const rotateKeyframes: number[] = [];

  for (let i = 0; i < numPoints; i++) {
    const t = i / (numPoints - 1); // 0..1

    // Gerakan x: sinusoidal dengan noise, arah mengikuti direction
    const xBase = Math.sin(t * Math.PI * 2) * range * direction;
    const xNoise = (r(4 + i) - 0.5) * range * 0.3;
    xKeyframes.push(xBase + xNoise);

    // Gerakan y: naik turun dengan amplitudo bervariasi
    const yBase = Math.sin(t * Math.PI * 3) * range * 0.6;
    const yNoise = (r(5 + i) - 0.5) * range * 0.2;
    yKeyframes.push(yBase + yNoise);

    // Rotasi: mengikuti arah gerak
    const rotBase = Math.sin(t * Math.PI * 2) * 20 * direction;
    const rotNoise = (r(6 + i) - 0.5) * 10;
    rotateKeyframes.push(rotBase + rotNoise);
  }

  // Pastikan kembali ke titik awal agar loop mulus
  xKeyframes.push(xKeyframes[0]);
  yKeyframes.push(yKeyframes[0]);
  rotateKeyframes.push(rotateKeyframes[0]);

  return {
    x: xKeyframes,
    y: yKeyframes,
    rotate: rotateKeyframes,
    duration: cycleDuration,
  };
};

export const Koi: React.FC<KoiProps> = ({
  color = 'orange',
  size = 120,
  initialX = '10%',
  initialY = '20%',
  direction = 1,
  speed = 1,
}) => {
  const bodyGradientId = useUniqueId('koiBody');
  const shadowFilterId = useUniqueId('koiShadow');
  const spotPatternId = useUniqueId('koiSpot');
  const colors = colorMap[color];
  const hasSpots = colors.spots && colors.spots.length > 0;

  // Gunakan seed acak yang tetap untuk instance ini (berdasarkan waktu + random)
  const seedRef = React.useRef(Math.random() * 100);
  const seed = seedRef.current;
  const motionPath = useMemo(() => generateRandomMotion(size, direction, seed), [size, direction, seed]);

  // Variants untuk gerakan tubuh utama
  const swimVariants: Variants = {
    animate: {
      x: motionPath.x,
      y: motionPath.y,
      rotate: motionPath.rotate,
      transition: {
        duration: motionPath.duration / speed,
        repeat: Infinity,
        ease: 'linear', // gunakan linear agar kecepatan konstan
        repeatType: 'loop',
      },
    },
  };

  // Variants untuk ekor (gerakan independen lebih cepat)
  const tailVariants: Variants = {
    animate: {
      rotate: [0, 25 * direction, -25 * direction, 15 * direction, -15 * direction, 0],
      transition: { duration: 1.2 / speed, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  // Variants untuk sirip
  const finVariants: Variants = {
    animate: {
      rotate: [0, 15, -10, 8, -5, 0],
      transition: { duration: 2 / speed, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  // Variants untuk efek mengambang (scale sedikit)
  const floatVariants: Variants = {
    animate: {
      scale: [1, 1.02, 0.98, 1.01, 1],
      transition: { duration: 5 / speed, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className="absolute"
      style={{ left: initialX, top: initialY, width: size, height: size * 0.6 }}
      variants={swimVariants}
      animate="animate"
    >
      <motion.div
        style={{ width: '100%', height: '100%' }}
        variants={floatVariants}
        animate="animate"
      >
        <svg width="100%" height="100%" viewBox="0 0 120 60" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={bodyGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="50%" stopColor={colors.secondary} />
              <stop offset="100%" stopColor={colors.accent} />
            </linearGradient>
            <filter id={shadowFilterId} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="2" floodOpacity="0.3" />
            </filter>
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

          <ellipse cx="55" cy="30" rx="40" ry="20" fill={`url(#${bodyGradientId})`} filter={`url(#${shadowFilterId})`} />

          {hasSpots && (
            <ellipse cx="55" cy="30" rx="40" ry="20" fill={`url(#${spotPatternId})`} opacity="0.5" />
          )}

          <motion.path
            d="M50 12 Q55 5 60 12"
            fill="none"
            stroke={colors.accent}
            strokeWidth="3"
            variants={finVariants}
            animate="animate"
            style={{ transformOrigin: '55px 12px' }}
          />

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

          <ellipse cx="22" cy="30" rx="15" ry="12" fill={colors.primary} />

          <circle cx="15" cy="26" r="4" fill="#FFFFFF" />
          <circle cx="15" cy="26" r="2.5" fill="#1A1A1A" />
          <circle cx="14" cy="25" r="1" fill="#FFFFFF" />

          <ellipse cx="8" cy="30" rx="3" ry="2" fill={colors.accent} />

          <path d="M8 28 Q2 24 0 26" stroke={colors.accent} strokeWidth="1" fill="none" />
          <path d="M8 32 Q2 36 0 34" stroke={colors.accent} strokeWidth="1" fill="none" />

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

          <ellipse cx="50" cy="28" rx="3" ry="2" fill="#FFFFFF" opacity="0.4" />
          <ellipse cx="60" cy="30" rx="2" ry="1.5" fill="#FFFFFF" opacity="0.3" />
          <ellipse cx="70" cy="28" rx="2" ry="1.5" fill="#FFFFFF" opacity="0.3" />
          <ellipse cx="80" cy="30" rx="2" ry="1.5" fill="#FFFFFF" opacity="0.3" />
        </svg>
      </motion.div>
    </motion.div>
  );
};