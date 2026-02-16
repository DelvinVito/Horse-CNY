import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LanternProps } from '../../types/index.ts';

export const Lantern: React.FC<LanternProps> = ({ className, delay = 0 }) => {
  const glowVariants: Variants = {
    initial: { opacity: 0.4, scale: 1 },
    animate: {
      opacity: [0.4, 1, 0.4],
      scale: [1, 1.2, 1],
      transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay }
    }
  };

  const pulseVariants: Variants = {
    animate: {
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.1, 1],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.3 }
    }
  };

  const tassleVariants: Variants = {
    animate: {
      rotate: [0, 3, -3, 2, -2, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay }
    }
  };

  return (
    <motion.svg
      width="120"
      height="220"
      viewBox="0 0 120 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{ rotate: [0, 5, -5, 0], y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
    >
      <defs>
        {/* Lantern body gradient - rich red */}
        <linearGradient id={`lanternBodyGrad${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF5555" />
          <stop offset="30%" stopColor="#E60000" />
          <stop offset="70%" stopColor="#CC0000" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>

        {/* Inner glow gradient - golden */}
        <radialGradient id={`innerGlow${delay}`} cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#FFA500" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF6600" stopOpacity="0" />
        </radialGradient>

        {/* Outer glow gradient */}
        <radialGradient id={`outerGlow${delay}`} cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#FF8C00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
        </radialGradient>

        {/* Gold cap gradient */}
        <linearGradient id={`goldCap${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>

        {/* Tassle gradient */}
        <linearGradient id={`tassleGrad${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>

        {/* Glow filter - strong */}
        <filter id={`lanternGlow${delay}`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="8" result="blur1" />
          <feGaussianBlur stdDeviation="4" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft ambient glow */}
        <filter id={`ambientGlow${delay}`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="12" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient outer glow - large aura */}
      <motion.ellipse
        cx="60"
        cy="85"
        rx="55"
        ry="70"
        fill={`url(#outerGlow${delay})`}
        variants={pulseVariants}
        animate="animate"
      />

      {/* Tali lampion (rope) */}
      <rect x="57" y="0" width="6" height="22" rx="3" fill="#5D3A1A" />
      <rect x="58" y="0" width="2" height="22" fill="#8B5A2B" opacity="0.5" />

      {/* Tutup atas (top cap) */}
      <ellipse cx="60" cy="20" rx="20" ry="6" fill={`url(#goldCap${delay})`} />
      <rect x="40" y="20" width="40" height="12" rx="3" fill={`url(#goldCap${delay})`} />
      <ellipse cx="60" cy="32" rx="20" ry="5" fill="#B8860B" />

      {/* Decorative ring on top cap */}
      <ellipse cx="60" cy="26" rx="18" ry="4" fill="none" stroke="#FFE55C" strokeWidth="1" opacity="0.6" />

      {/* Badan lampion (main body) */}
      <ellipse
        cx="60"
        cy="85"
        rx="35"
        ry="52"
        fill={`url(#lanternBodyGrad${delay})`}
        filter={`url(#lanternGlow${delay})`}
      />

      {/* Horizontal ribs */}
      <ellipse cx="60" cy="55" rx="32" ry="8" fill="none" stroke="#8B0000" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="60" cy="85" rx="35" ry="10" fill="none" stroke="#8B0000" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="60" cy="115" rx="32" ry="8" fill="none" stroke="#8B0000" strokeWidth="1.5" opacity="0.4" />

      {/* Decorative border on body */}
      <ellipse cx="60" cy="85" rx="30" ry="46" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.5" />

      {/* Chinese character 福 (fortune) */}
      <text
        x="60"
        y="92"
        fontSize="28"
        textAnchor="middle"
        fill="#FFD700"
        fontWeight="bold"
        style={{ filter: 'drop-shadow(0 0 3px rgba(255, 215, 0, 0.8))' }}
      >
        福
      </text>

      {/* Inner glow - candle light effect */}
      <motion.ellipse
        cx="60"
        cy="85"
        rx="20"
        ry="35"
        fill={`url(#innerGlow${delay})`}
        variants={glowVariants}
        initial="initial"
        animate="animate"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Secondary inner glow */}
      <motion.ellipse
        cx="60"
        cy="80"
        rx="12"
        ry="20"
        fill="#FFD700"
        opacity="0.3"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.2 }}
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Light flicker spots */}
      <motion.circle
        cx="55"
        cy="75"
        r="3"
        fill="#FFFACD"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay }}
        style={{ mixBlendMode: 'screen' }}
      />
      <motion.circle
        cx="65"
        cy="90"
        r="2"
        fill="#FFFACD"
        animate={{ opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.4 }}
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Tutup bawah (bottom cap) */}
      <ellipse cx="60" cy="135" rx="20" ry="5" fill="#B8860B" />
      <rect x="40" y="135" width="40" height="12" rx="3" fill={`url(#goldCap${delay})`} />
      <ellipse cx="60" cy="147" rx="20" ry="6" fill={`url(#goldCap${delay})`} />

      {/* Decorative ring on bottom cap */}
      <ellipse cx="60" cy="141" rx="18" ry="4" fill="none" stroke="#FFE55C" strokeWidth="1" opacity="0.6" />

      {/* Tassles with animation */}
      <motion.g variants={tassleVariants} animate="animate" style={{ transformOrigin: '60px 150px' }}>
        {/* Left tassle */}
        <rect x="45" y="150" width="3" height="35" rx="1.5" fill={`url(#tassleGrad${delay})`} />
        <motion.circle
          cx="46.5"
          cy="188"
          r="5"
          fill="#FFD700"
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Center tassle (longer) */}
        <rect x="58.5" y="150" width="3" height="45" rx="1.5" fill={`url(#tassleGrad${delay})`} />
        <motion.circle
          cx="60"
          cy="198"
          r="6"
          fill="#FFD700"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />

        {/* Right tassle */}
        <rect x="72" y="150" width="3" height="35" rx="1.5" fill={`url(#tassleGrad${delay})`} />
        <motion.circle
          cx="73.5"
          cy="188"
          r="5"
          fill="#FFD700"
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />

        {/* Small decorative knots */}
        <circle cx="46.5" cy="155" r="2" fill="#B8860B" />
        <circle cx="60" cy="155" r="2.5" fill="#B8860B" />
        <circle cx="73.5" cy="155" r="2" fill="#B8860B" />
      </motion.g>
    </motion.svg>
  );
};
