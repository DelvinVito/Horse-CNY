import React from 'react';
import { motion } from 'framer-motion';

interface HeroCloudProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  delay?: number;
}

export const HeroCloud: React.FC<HeroCloudProps> = ({ position, delay = 0 }) => {
  const isLeft = position.includes('left');
  const isTop = position.includes('top');

  const positionStyles: Record<string, React.CSSProperties> = {
    'top-left': { top: 0, left: 0, transform: 'scaleX(1)' },
    'top-right': { top: 0, right: 0, transform: 'scaleX(-1)' },
    'bottom-left': { bottom: 0, left: 0, transform: 'scaleX(1) scaleY(-1)' },
    'bottom-right': { bottom: 0, right: 0, transform: 'scaleX(-1) scaleY(-1)' },
  };

  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      style={positionStyles[position]}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: delay * 0.2, ease: 'easeOut' }}
    >
      <motion.svg
        width="450"
        height="200"
        viewBox="0 0 450 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          x: isLeft ? [0, 20, 0] : [0, -20, 0],
          y: isTop ? [0, 10, 0] : [0, -10, 0],
        }}
        transition={{ duration: 12 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          {/* Main cloud gradient - oriental style */}
          <linearGradient id={`heroCloudGrad${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#FFE4C4" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FFDAB9" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFD6A8" stopOpacity="0.75" />
          </linearGradient>

          {/* Inner glow */}
          <radialGradient id={`heroCloudGlow${position}`} cx="30%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          {/* Highlight gradient */}
          <linearGradient id={`heroCloudHighlight${position}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFFAF0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFE4B5" stopOpacity="0.2" />
          </linearGradient>

          {/* Soft glow filter */}
          <filter id={`heroCloudSoftGlow${position}`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Shimmer filter */}
          <filter id={`heroCloudShimmer${position}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* Ambient glow layer */}
        <motion.ellipse
          cx="180"
          cy="100"
          rx="160"
          ry="80"
          fill={`url(#heroCloudGlow${position})`}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
        />

        {/* Main curved cloud body - oriental arch style */}
        <motion.path
          d="M0 180 
             Q10 160 35 155 
             Q50 130 80 135 
             Q95 105 130 115 
             Q150 85 185 95 
             Q210 65 250 80 
             Q285 55 320 75 
             Q350 50 385 70 
             Q415 55 440 85 
             Q455 100 450 130
             Q445 160 420 165
             Q400 185 360 175
             Q320 195 280 180
             Q240 200 200 185
             Q160 200 120 182
             Q80 195 50 178
             Q20 190 0 180Z"
          fill={`url(#heroCloudGrad${position})`}
          filter={`url(#heroCloudSoftGlow${position})`}
          animate={{
            d: [
              "M0 180 Q10 160 35 155 Q50 130 80 135 Q95 105 130 115 Q150 85 185 95 Q210 65 250 80 Q285 55 320 75 Q350 50 385 70 Q415 55 440 85 Q455 100 450 130 Q445 160 420 165 Q400 185 360 175 Q320 195 280 180 Q240 200 200 185 Q160 200 120 182 Q80 195 50 178 Q20 190 0 180Z",
              "M0 175 Q12 155 38 150 Q52 125 82 130 Q98 100 132 110 Q155 80 190 90 Q215 60 255 75 Q290 50 325 70 Q355 45 390 65 Q420 50 445 80 Q458 95 453 125 Q448 155 423 160 Q403 180 363 170 Q323 190 283 175 Q243 195 203 180 Q163 195 123 177 Q83 190 53 173 Q22 185 0 175Z",
              "M0 180 Q10 160 35 155 Q50 130 80 135 Q95 105 130 115 Q150 85 185 95 Q210 65 250 80 Q285 55 320 75 Q350 50 385 70 Q415 55 440 85 Q455 100 450 130 Q445 160 420 165 Q400 185 360 175 Q320 195 280 180 Q240 200 200 185 Q160 200 120 182 Q80 195 50 178 Q20 190 0 180Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay }}
        />

        {/* Layered cloud puffs for depth */}
        <motion.ellipse
          cx="60"
          cy="150"
          rx="45"
          ry="30"
          fill={`url(#heroCloudHighlight${position})`}
          animate={{
            cx: [60, 65, 60],
            cy: [150, 145, 150],
            rx: [45, 48, 45],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
        />

        <motion.ellipse
          cx="130"
          cy="125"
          rx="50"
          ry="35"
          fill={`url(#heroCloudHighlight${position})`}
          animate={{
            cx: [130, 138, 130],
            cy: [125, 118, 125],
            rx: [50, 55, 50],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.3 }}
        />

        <motion.ellipse
          cx="210"
          cy="100"
          rx="55"
          ry="38"
          fill={`url(#heroCloudHighlight${position})`}
          animate={{
            cx: [210, 218, 210],
            cy: [100, 92, 100],
            rx: [55, 60, 55],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.6 }}
        />

        <motion.ellipse
          cx="295"
          cy="85"
          rx="50"
          ry="35"
          fill={`url(#heroCloudHighlight${position})`}
          animate={{
            cx: [295, 302, 295],
            cy: [85, 78, 85],
            rx: [50, 54, 50],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.9 }}
        />

        <motion.ellipse
          cx="375"
          cy="95"
          rx="45"
          ry="32"
          fill={`url(#heroCloudHighlight${position})`}
          animate={{
            cx: [375, 382, 375],
            cy: [95, 88, 95],
            rx: [45, 50, 45],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: delay + 1.2 }}
        />

        {/* Chinese style swirl decorations */}
        <motion.path
          d="M70 140 Q85 125 95 135 Q105 145 95 155 Q85 160 75 152"
          fill="none"
          stroke="#FFD7A8"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            pathLength: [0.6, 1, 0.6],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
        />

        <motion.path
          d="M160 110 Q180 90 195 105 Q205 120 190 132 Q175 142 165 130"
          fill="none"
          stroke="#FFD7A8"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            pathLength: [0.5, 1, 0.5],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 }}
        />

        <motion.path
          d="M260 80 Q280 60 295 75 Q310 95 290 105 Q270 112 265 95"
          fill="none"
          stroke="#FFD7A8"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            pathLength: [0.7, 1, 0.7],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: delay + 1 }}
        />

        <motion.path
          d="M350 90 Q370 70 385 85 Q395 100 380 112 Q365 120 358 105"
          fill="none"
          stroke="#FFD7A8"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            opacity: [0.4, 0.75, 0.4],
            pathLength: [0.6, 1, 0.6],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: delay + 1.5 }}
        />

        {/* Shimmer particles */}
        <motion.circle
          cx="100"
          cy="120"
          r="3"
          fill="#FFD700"
          filter={`url(#heroCloudShimmer${position})`}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay }}
        />

        <motion.circle
          cx="180"
          cy="90"
          r="3.5"
          fill="#FFD700"
          filter={`url(#heroCloudShimmer${position})`}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.4, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.7 }}
        />

        <motion.circle
          cx="270"
          cy="70"
          r="3"
          fill="#FFD700"
          filter={`url(#heroCloudShimmer${position})`}
          animate={{
            opacity: [0, 0.9, 0],
            scale: [0.5, 1.6, 0.5],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: delay + 1.4 }}
        />

        <motion.circle
          cx="360"
          cy="80"
          r="2.5"
          fill="#FFD700"
          filter={`url(#heroCloudShimmer${position})`}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.3, 0.5],
          }}
          transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut', delay: delay + 2 }}
        />

        {/* Soft edge gradient overlay */}
        <motion.ellipse
          cx="200"
          cy="120"
          rx="180"
          ry="75"
          fill={`url(#heroCloudGlow${position})`}
          style={{ mixBlendMode: 'soft-light' }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
        />
      </motion.svg>
    </motion.div>
  );
};
