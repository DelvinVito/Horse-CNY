import React from 'react';
import { Coin } from '../decorations/index.ts';
import { SectionCard } from '../ui/index.ts';
import type { CoinData } from '../../types/index.ts';

interface WealthSectionProps {
  coinData: CoinData[];
  coinCount: number;
}

export const WealthSection: React.FC<WealthSectionProps> = ({ coinData, coinCount }) => (
  <section className="relative h-screen snap-start flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      {coinData.slice(0, coinCount).map((data, i) => (
        <Coin
          key={i}
          delay={i * 0.4}
          randomX={data.randomX}
          randomDuration={data.randomDuration}
        />
      ))}
    </div>
    <SectionCard
      chineseTitle="新年快乐"
      pinyin="Xīn Nián Kuài Lè"
      description="Selamat Tahun Baru Imlek"
      theme="gold"
    >
      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-yellow-500" />
      <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-yellow-500" />
      <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-yellow-500" />
      <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-yellow-500" />
    </SectionCard>
  </section>
);
