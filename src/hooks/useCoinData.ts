import { useState } from 'react';
import type { CoinData } from '../types/index.ts';

export const useCoinData = (count: number = 15): CoinData[] => {
  const [coinData] = useState<CoinData[]>(() =>
    Array.from({ length: count }, () => ({
      randomX: Math.random() * 80 + 10,
      randomDuration: 4 + Math.random() * 2,
    }))
  );

  return coinData;
};
