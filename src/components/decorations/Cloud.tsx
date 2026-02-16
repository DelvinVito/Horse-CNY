import React from 'react';
import { motion } from 'framer-motion';
import type { CloudProps } from '../../types/index.ts';

export const Cloud: React.FC<CloudProps> = ({ className }) => (
  <motion.svg
    width="280"
    height="120"
    viewBox="0 0 280 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ x: [0, 40, 0], y: [0, -10, 5, 0] }}
    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
  >
    <defs>
      {/* Main cloud gradient - warm golden tones */}
      <linearGradient id="cloudGradMain" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFAF0" stopOpacity="0.95" />
        <stop offset="40%" stopColor="#FFE4C4" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#FFDAB9" stopOpacity="0.7" />
      </linearGradient>

      {/* Inner glow gradient */}
      <radialGradient id="cloudGlow" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#FFA500" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FFE4B5" stopOpacity="0" />
      </radialGradient>

      {/* Highlight gradient for top puffs */}
      <linearGradient id="cloudHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFF8DC" stopOpacity="0.3" />
      </linearGradient>

      {/* Glow filter */}
      <filter id="cloudGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      {/* Soft outer glow */}
      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Outer glow layer */}
    <motion.ellipse
      cx="140"
      cy="60"
      rx="100"
      ry="40"
      fill="url(#cloudGlow)"
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.05, 1]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Main cloud body - Chinese style swirling cloud */}
    <motion.path
      d="M25 60 Q35 35 65 42 Q80 25 110 30 Q130 15 160 25 Q185 12 210 30 Q240 25 250 50 Q265 55 255 70 Q260 90 220 85 Q190 98 150 90 Q110 100 70 88 Q35 95 28 75 Q10 70 25 60Z"
      fill="url(#cloudGradMain)"
      filter="url(#softGlow)"
      animate={{
        d: [
          "M25 60 Q35 35 65 42 Q80 25 110 30 Q130 15 160 25 Q185 12 210 30 Q240 25 250 50 Q265 55 255 70 Q260 90 220 85 Q190 98 150 90 Q110 100 70 88 Q35 95 28 75 Q10 70 25 60Z",
          "M28 58 Q38 32 68 40 Q82 22 112 28 Q135 12 165 22 Q188 10 215 28 Q242 22 252 48 Q268 52 258 68 Q262 88 222 83 Q192 96 152 88 Q112 98 72 86 Q38 93 30 73 Q12 68 28 58Z",
          "M25 60 Q35 35 65 42 Q80 25 110 30 Q130 15 160 25 Q185 12 210 30 Q240 25 250 50 Q265 55 255 70 Q260 90 220 85 Q190 98 150 90 Q110 100 70 88 Q35 95 28 75 Q10 70 25 60Z"
        ]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Animated cloud puff - left */}
    <motion.ellipse
      cx="55"
      cy="55"
      rx="25"
      ry="18"
      fill="url(#cloudHighlight)"
      animate={{
        cx: [55, 58, 55],
        cy: [55, 52, 55],
        rx: [25, 27, 25],
        ry: [18, 20, 18]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Animated cloud puff - center */}
    <motion.ellipse
      cx="140"
      cy="45"
      rx="35"
      ry="22"
      fill="url(#cloudHighlight)"
      animate={{
        cy: [45, 42, 48, 45],
        rx: [35, 38, 33, 35],
        ry: [22, 24, 21, 22]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    />

    {/* Animated cloud puff - right */}
    <motion.ellipse
      cx="210"
      cy="50"
      rx="28"
      ry="18"
      fill="url(#cloudHighlight)"
      animate={{
        cx: [210, 215, 210],
        cy: [50, 47, 50],
        rx: [28, 30, 28]
      }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    />

    {/* Swirl detail - left */}
    <motion.path
      d="M40 65 Q50 55 55 60 Q60 65 55 70 Q50 75 45 72"
      fill="none"
      stroke="#FFD7A8"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
      animate={{
        opacity: [0.4, 0.7, 0.4],
        pathLength: [0.8, 1, 0.8]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Swirl detail - center */}
    <motion.path
      d="M120 55 Q135 45 145 52 Q155 60 145 68 Q135 75 125 70"
      fill="none"
      stroke="#FFD7A8"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
      animate={{
        opacity: [0.5, 0.8, 0.5],
        pathLength: [0.7, 1, 0.7]
      }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
    />

    {/* Swirl detail - right */}
    <motion.path
      d="M200 60 Q215 50 225 58 Q230 65 220 72 Q210 78 205 73"
      fill="none"
      stroke="#FFD7A8"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
      animate={{
        opacity: [0.4, 0.7, 0.4],
        pathLength: [0.75, 1, 0.75]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
    />

    {/* Shimmer sparkles */}
    <motion.circle
      cx="80"
      cy="40"
      r="2"
      fill="#FFD700"
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0.5, 1.2, 0.5]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.circle
      cx="165"
      cy="35"
      r="2.5"
      fill="#FFD700"
      animate={{
        opacity: [0, 0.9, 0],
        scale: [0.5, 1.3, 0.5]
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
    />
    <motion.circle
      cx="230"
      cy="45"
      r="2"
      fill="#FFD700"
      animate={{
        opacity: [0, 0.7, 0],
        scale: [0.5, 1.2, 0.5]
      }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
    />

    {/* Inner glow overlay */}
    <motion.ellipse
      cx="140"
      cy="55"
      rx="80"
      ry="30"
      fill="url(#cloudGlow)"
      style={{ mixBlendMode: 'screen' }}
      animate={{
        opacity: [0.3, 0.5, 0.3],
        rx: [80, 85, 80],
        ry: [30, 33, 30]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.svg>
);
