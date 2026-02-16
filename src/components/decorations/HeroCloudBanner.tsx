import React from 'react';
import { motion } from 'framer-motion';

export const HeroCloudBanner: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none z-10">
      <motion.svg
        width="100%"
        height="280"
        viewBox="0 0 1920 280"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <defs>
          {/* Main cloud gradient */}
          <linearGradient id="bannerCloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E7" stopOpacity="1" />
            <stop offset="40%" stopColor="#FFE4C4" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#FFDAB9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFD6A8" stopOpacity="0.85" />
          </linearGradient>

          {/* Inner glow gradient */}
          <radialGradient id="bannerGlow" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          {/* Highlight gradient */}
          <linearGradient id="bannerHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FFFAF0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFE4B5" stopOpacity="0.3" />
          </linearGradient>

          {/* Soft glow filter */}
          <filter id="bannerSoftGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Shimmer filter */}
          <filter id="bannerShimmer" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* Ambient glow layer */}
        <motion.ellipse
          cx="960"
          cy="100"
          rx="900"
          ry="120"
          fill="url(#bannerGlow)"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            rx: [900, 920, 900],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Main cloud body - flowing across full width */}
        <motion.path
          d="M-50 0 
             L-50 120
             Q0 150 80 140
             Q150 180 250 160
             Q350 200 480 175
             Q580 210 720 185
             Q850 220 960 190
             Q1080 225 1200 195
             Q1320 230 1450 200
             Q1560 235 1680 205
             Q1780 240 1870 210
             Q1920 230 1970 200
             L1970 0
             Z"
          fill="url(#bannerCloudGrad)"
          filter="url(#bannerSoftGlow)"
          animate={{
            d: [
              "M-50 0 L-50 120 Q0 150 80 140 Q150 180 250 160 Q350 200 480 175 Q580 210 720 185 Q850 220 960 190 Q1080 225 1200 195 Q1320 230 1450 200 Q1560 235 1680 205 Q1780 240 1870 210 Q1920 230 1970 200 L1970 0 Z",
              "M-50 0 L-50 130 Q10 160 90 150 Q160 190 260 170 Q360 210 490 185 Q590 220 730 195 Q860 230 970 200 Q1090 235 1210 205 Q1330 240 1460 210 Q1570 245 1690 215 Q1790 250 1880 220 Q1930 240 1970 210 L1970 0 Z",
              "M-50 0 L-50 115 Q-5 145 75 135 Q145 175 245 155 Q345 195 475 170 Q575 205 715 180 Q845 215 955 185 Q1075 220 1195 190 Q1315 225 1445 195 Q1555 230 1675 200 Q1775 235 1865 205 Q1915 225 1970 195 L1970 0 Z",
              "M-50 0 L-50 120 Q0 150 80 140 Q150 180 250 160 Q350 200 480 175 Q580 210 720 185 Q850 220 960 190 Q1080 225 1200 195 Q1320 230 1450 200 Q1560 235 1680 205 Q1780 240 1870 210 Q1920 230 1970 200 L1970 0 Z",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Layered cloud puffs - distributed across width */}
        {/* Left section puffs */}
        <motion.ellipse
          cx="120"
          cy="130"
          rx="80"
          ry="50"
          fill="url(#bannerHighlight)"
          animate={{ cx: [120, 130, 120], cy: [130, 120, 130], rx: [80, 88, 80] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.ellipse
          cx="280"
          cy="150"
          rx="90"
          ry="55"
          fill="url(#bannerHighlight)"
          animate={{ cx: [280, 295, 280], cy: [150, 138, 150], rx: [90, 100, 90] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* Center-left puffs */}
        <motion.ellipse
          cx="480"
          cy="165"
          rx="100"
          ry="60"
          fill="url(#bannerHighlight)"
          animate={{ cx: [480, 495, 480], cy: [165, 152, 165], rx: [100, 110, 100] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.ellipse
          cx="680"
          cy="175"
          rx="95"
          ry="58"
          fill="url(#bannerHighlight)"
          animate={{ cx: [680, 698, 680], cy: [175, 160, 175], rx: [95, 105, 95] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />

        {/* Center puffs */}
        <motion.ellipse
          cx="880"
          cy="180"
          rx="105"
          ry="65"
          fill="url(#bannerHighlight)"
          animate={{ cx: [880, 900, 880], cy: [180, 165, 180], rx: [105, 118, 105] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.ellipse
          cx="1080"
          cy="185"
          rx="100"
          ry="62"
          fill="url(#bannerHighlight)"
          animate={{ cx: [1080, 1098, 1080], cy: [185, 170, 185], rx: [100, 112, 100] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        />

        {/* Center-right puffs */}
        <motion.ellipse
          cx="1280"
          cy="190"
          rx="95"
          ry="58"
          fill="url(#bannerHighlight)"
          animate={{ cx: [1280, 1295, 1280], cy: [190, 175, 190], rx: [95, 108, 95] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.ellipse
          cx="1480"
          cy="195"
          rx="90"
          ry="55"
          fill="url(#bannerHighlight)"
          animate={{ cx: [1480, 1498, 1480], cy: [195, 178, 195], rx: [90, 102, 90] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 3.5 }}
        />

        {/* Right section puffs */}
        <motion.ellipse
          cx="1680"
          cy="195"
          rx="85"
          ry="52"
          fill="url(#bannerHighlight)"
          animate={{ cx: [1680, 1695, 1680], cy: [195, 180, 195], rx: [85, 95, 85] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        <motion.ellipse
          cx="1850"
          cy="200"
          rx="80"
          ry="50"
          fill="url(#bannerHighlight)"
          animate={{ cx: [1850, 1862, 1850], cy: [200, 188, 200], rx: [80, 90, 80] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 4.5 }}
        />

        {/* Chinese style swirl decorations - distributed */}
        <motion.path
          d="M150 120 Q175 95 195 115 Q210 135 190 150 Q170 160 155 145"
          fill="none"
          stroke="#FFD7A8"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ opacity: [0.3, 0.7, 0.3], pathLength: [0.5, 1, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M420 145 Q450 115 475 140 Q495 165 465 180 Q435 192 425 170"
          fill="none"
          stroke="#FFD7A8"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ opacity: [0.4, 0.8, 0.4], pathLength: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <motion.path
          d="M720 160 Q755 125 785 155 Q805 185 770 202 Q735 215 725 185"
          fill="none"
          stroke="#FFD7A8"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ opacity: [0.3, 0.75, 0.3], pathLength: [0.55, 1, 0.55] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
        />
        <motion.path
          d="M1000 170 Q1040 130 1075 165 Q1100 200 1060 220 Q1020 235 1008 200"
          fill="none"
          stroke="#FFD7A8"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ opacity: [0.35, 0.8, 0.35], pathLength: [0.5, 1, 0.5] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 2.4 }}
        />
        <motion.path
          d="M1300 175 Q1335 140 1365 170 Q1385 200 1350 218 Q1315 232 1305 200"
          fill="none"
          stroke="#FFD7A8"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ opacity: [0.3, 0.7, 0.3], pathLength: [0.6, 1, 0.6] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 3.2 }}
        />
        <motion.path
          d="M1580 185 Q1615 150 1645 180 Q1665 210 1630 228 Q1595 242 1585 210"
          fill="none"
          stroke="#FFD7A8"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ opacity: [0.4, 0.75, 0.4], pathLength: [0.55, 1, 0.55] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />

        {/* Shimmer sparkles - distributed across */}
        <motion.circle
          cx="200"
          cy="100"
          r="4"
          fill="#FFD700"
          filter="url(#bannerShimmer)"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="400"
          cy="120"
          r="5"
          fill="#FFD700"
          filter="url(#bannerShimmer)"
          animate={{ opacity: [0, 0.9, 0], scale: [0.5, 1.4, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.circle
          cx="620"
          cy="140"
          r="4"
          fill="#FFD700"
          filter="url(#bannerShimmer)"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.6, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.circle
          cx="850"
          cy="150"
          r="5"
          fill="#FFD700"
          filter="url(#bannerShimmer)"
          animate={{ opacity: [0, 0.85, 0], scale: [0.5, 1.4, 0.5] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.circle
          cx="1080"
          cy="155"
          r="4"
          fill="#FFD700"
          filter="url(#bannerShimmer)"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.circle
          cx="1320"
          cy="160"
          r="5"
          fill="#FFD700"
          filter="url(#bannerShimmer)"
          animate={{ opacity: [0, 0.9, 0], scale: [0.5, 1.4, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        />
        <motion.circle
          cx="1550"
          cy="165"
          r="4"
          fill="#FFD700"
          filter="url(#bannerShimmer)"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.6, 0.5] }}
          transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.circle
          cx="1780"
          cy="170"
          r="5"
          fill="#FFD700"
          filter="url(#bannerShimmer)"
          animate={{ opacity: [0, 0.85, 0], scale: [0.5, 1.3, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 3.5 }}
        />

        {/* Soft gradient overlay for depth */}
        <motion.rect
          x="0"
          y="0"
          width="1920"
          height="280"
          fill="url(#bannerGlow)"
          style={{ mixBlendMode: 'soft-light' }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.svg>
    </div>
  );
};
