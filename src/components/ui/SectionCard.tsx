import React from 'react';
import { motion } from 'framer-motion';

interface SectionCardProps {
  chineseTitle: string;
  pinyin: string;
  description: string;
  theme: 'gold' | 'blue' | 'green';
  children?: React.ReactNode;
}

const themeStyles = {
  gold: {
    background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.8) 0%, rgba(74, 14, 14, 0.9) 100%)',
    borderColor: '#DAA520',
    boxShadow: '0 0 40px rgba(218, 165, 32, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.3)',
    titleColor: '#FFD700',
    subtitleColor: '#FFE4B5',
    descColor: '#FFDAB9',
  },
  blue: {
    background: 'linear-gradient(135deg, rgba(0, 60, 90, 0.85) 0%, rgba(0, 40, 60, 0.9) 100%)',
    borderColor: '#87CEEB',
    boxShadow: '0 0 40px rgba(135, 206, 235, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.3)',
    titleColor: '#87CEEB',
    subtitleColor: '#E0FFFF',
    descColor: '#B0E0E6',
  },
  green: {
    background: 'linear-gradient(135deg, rgba(34, 80, 34, 0.85) 0%, rgba(0, 50, 0, 0.9) 100%)',
    borderColor: '#90EE90',
    boxShadow: '0 0 40px rgba(144, 238, 144, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.3)',
    titleColor: '#90EE90',
    subtitleColor: '#98FB98',
    descColor: '#8FBC8F',
  },
};

export const SectionCard: React.FC<SectionCardProps> = ({
  chineseTitle,
  pinyin,
  description,
  theme,
  children,
}) => {
  const styles = themeStyles[theme];

  return (
    <motion.div
      className="relative p-8 sm:p-12 rounded-2xl text-center border-2 overflow-hidden z-10"
      style={{
        background: styles.background,
        borderColor: styles.borderColor,
        boxShadow: styles.boxShadow,
      }}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-4"
        style={{ color: styles.titleColor, textShadow: `0 2px 10px ${styles.titleColor}80` }}
      >
        {chineseTitle}
      </motion.h2>
      <p className="text-2xl sm:text-3xl mb-2" style={{ color: styles.subtitleColor }}>
        {pinyin}
      </p>
      <p className="text-lg sm:text-xl" style={{ color: styles.descColor }}>
        {description}
      </p>
    </motion.div>
  );
};
