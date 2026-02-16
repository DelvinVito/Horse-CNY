import React from 'react';
import { motion } from 'framer-motion';
import type { BambooProps } from '../../types/index.ts';

export const Bamboo: React.FC<BambooProps> = ({ className }) => (
  <motion.svg
    width="80"
    height="180"
    viewBox="0 0 80 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ rotate: [0, 1.5, -1.5, 0.5, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
  >
    <defs>
      <linearGradient id="bambooGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#228B22" />
        <stop offset="30%" stopColor="#32CD32" />
        <stop offset="70%" stopColor="#228B22" />
        <stop offset="100%" stopColor="#006400" />
      </linearGradient>
    </defs>
    {/* Batang bambu utama */}
    <rect x="35" y="20" width="10" height="160" rx="5" fill="url(#bambooGrad)" />
    {/* Ruas bambu */}
    <rect x="33" y="40" width="14" height="4" rx="2" fill="#006400" />
    <rect x="33" y="70" width="14" height="4" rx="2" fill="#006400" />
    <rect x="33" y="100" width="14" height="4" rx="2" fill="#006400" />
    <rect x="33" y="130" width="14" height="4" rx="2" fill="#006400" />
    {/* Daun bambu kiri */}
    <motion.g
      animate={{ rotate: [0, 3, -2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: '35px 35px' }}
    >
      <path d="M35 35 Q15 25 5 30 Q15 35 35 38" fill="#32CD32" />
      <path d="M35 38 Q12 32 2 40 Q15 42 35 42" fill="#228B22" />
    </motion.g>
    {/* Daun bambu kanan */}
    <motion.g
      animate={{ rotate: [0, -2, 3, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      style={{ transformOrigin: '45px 65px' }}
    >
      <path d="M45 65 Q65 55 75 60 Q65 65 45 68" fill="#32CD32" />
      <path d="M45 68 Q68 62 78 70 Q65 72 45 72" fill="#228B22" />
    </motion.g>
    {/* Daun bambu kiri bawah */}
    <motion.g
      animate={{ rotate: [0, 2, -3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      style={{ transformOrigin: '35px 95px' }}
    >
      <path d="M35 95 Q10 85 0 92 Q12 98 35 100" fill="#32CD32" />
    </motion.g>
    {/* Highlight batang */}
    <rect x="38" y="20" width="3" height="160" rx="1" fill="#90EE90" opacity="0.3" />
  </motion.svg>
);
