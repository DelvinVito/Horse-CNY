// Theme constants for Chinese New Year

export const COLORS = {
  // Primary Red Theme
  red: {
    darkest: '#1a0a0a',
    darker: '#4a0e0e',
    dark: '#8B0000',
    main: '#CC2222',
    light: '#FF4444',
  },
  // Gold/Yellow Theme
  gold: {
    dark: '#B8860B',
    main: '#DAA520',
    light: '#FFD700',
    lighter: '#FFE55C',
    lightest: '#FFFACD',
  },
  // Blue Theme (for Koi section)
  blue: {
    dark: '#003C5A',
    main: '#005080',
    light: '#87CEEB',
    lighter: '#B0E0E6',
    lightest: '#E0FFFF',
  },
  // Green Theme (for Health section)
  green: {
    darkest: '#006400',
    dark: '#228B22',
    main: '#32CD32',
    light: '#90EE90',
    lighter: '#98FB98',
    lightest: '#8FBC8F',
  },
  // Neutral
  white: '#FFFFFF',
  black: '#000000',
  cream: '#FFE4B5',
  peach: '#FFDAB9',
} as const;

export const GRADIENTS = {
  background: 'linear-gradient(180deg, #1a0a0a 0%, #4a0e0e 30%, #8B0000 60%, #CC2222 100%)',
  goldButton: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
  goldText: 'linear-gradient(180deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
  lanternBody: (id: string) => `url(#lanternGrad${id})`,
  coinBody: (id: string) => `url(#coinGrad${id})`,
} as const;

export const SHADOWS = {
  glow: {
    gold: '0 0 20px rgba(255, 215, 0, 0.6)',
    blue: '0 0 20px rgba(135, 206, 235, 0.6)',
    green: '0 0 20px rgba(144, 238, 144, 0.6)',
  },
  card: {
    gold: '0 0 40px rgba(218, 165, 32, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.3)',
    blue: '0 0 40px rgba(135, 206, 235, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.3)',
    green: '0 0 40px rgba(144, 238, 144, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.3)',
  },
} as const;

export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  verySlow: 2,
} as const;
