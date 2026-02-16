import React from 'react';
import { motion } from 'framer-motion';

interface SparkleStarsProps {
  count?: number;
}

export const SparkleStars: React.FC<SparkleStarsProps> = ({ count = 6 }) => (
  <>
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full"
        style={{
          left: `${15 + i * 15}%`,
          top: `${10 + (i % 3) * 20}%`,
          background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{
          duration: 2 + i * 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: i * 0.2
        }}
      />
    ))}
  </>
);
