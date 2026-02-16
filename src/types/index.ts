// Types for CNY Animation components

export interface LanternProps {
  className?: string;
  delay?: number;
}

export interface CloudProps {
  className?: string;
}

export interface CoinProps {
  delay?: number;
  randomX?: number;
  randomDuration?: number;
}

export interface KoiProps {
  direction?: 1 | -1;
}

export interface BambooProps {
  className?: string;
}

export interface SectionCardProps {
  title: string;
  subtitle: string;
  description: string;
  theme: 'gold' | 'blue' | 'green';
  children?: React.ReactNode;
}

export interface CoinData {
  randomX: number;
  randomDuration: number;
}
