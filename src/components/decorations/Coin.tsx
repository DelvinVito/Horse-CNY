import React from 'react';
import { motion } from 'framer-motion';
import type { CoinProps } from '../../types/index.ts';

export const Coin: React.FC<CoinProps> = ({ delay = 0, randomX = 50, randomDuration = 5 }) => {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${randomX}vw`, perspective: '500px' }}
      initial={{ y: -60, opacity: 0, rotateY: 0 }}
      animate={{
        y: '110vh',
        opacity: [0, 1, 1, 1, 0],
        rotateY: 720,
        rotateZ: [0, 15, -15, 10, 0]
      }}
      transition={{ duration: randomDuration, delay, repeat: Infinity, ease: 'easeIn' }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`coinGrad${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE55C" />
            <stop offset="30%" stopColor="#FFD700" />
            <stop offset="70%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
          <filter id={`coinGlow${delay}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Bayangan */}
        <ellipse cx="25" cy="47" rx="12" ry="3" fill="#00000033" />
        {/* Koin utama */}
        <circle cx="25" cy="25" r="22" fill={`url(#coinGrad${delay})`} filter={`url(#coinGlow${delay})`} />
        <circle cx="25" cy="25" r="19" fill="none" stroke="#B8860B" strokeWidth="2" />
        {/* Lubang tengah (coin China) */}
        <rect x="19" y="19" width="12" height="12" rx="1" fill="#8B4513" stroke="#DAA520" strokeWidth="1" />
        {/* Highlight */}
        <ellipse cx="18" cy="18" rx="6" ry="4" fill="#FFFACD" opacity="0.4" />
      </svg>
    </motion.div>
  );
};
