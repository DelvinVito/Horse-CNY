import React from 'react';
import { motion } from 'framer-motion';

interface MusicButtonProps {
  isMusicOn: boolean;
  onToggle: () => void;
}

export const MusicButton: React.FC<MusicButtonProps> = ({ isMusicOn, onToggle }) => (
  <motion.button
    type="button"
    onClick={onToggle}
    className="fixed top-4 right-4 z-50 p-3 sm:p-4 rounded-full shadow-xl text-xl sm:text-2xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2"
    style={{
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      borderColor: '#DAA520',
      color: '#8B0000'
    }}
    aria-label={isMusicOn ? 'Matikan musik' : 'Nyalakan musik'}
    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)' }}
    whileTap={{ scale: 0.95 }}
  >
    {isMusicOn ? '🔊' : '🔇'}
  </motion.button>
);
