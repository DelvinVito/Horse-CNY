import React from 'react';
import { Koi } from '../decorations/index.ts';
import { SectionCard } from '../ui/index.ts';

export const AbundanceSection: React.FC = () => (
  <section
    className="relative h-screen snap-start flex items-center justify-center overflow-hidden"
    style={{
      background:
        'linear-gradient(180deg, rgba(0, 50, 80, 0.4) 0%, rgba(0, 80, 120, 0.3) 50%, rgba(0, 50, 80, 0.4) 100%)',
    }}
  >
    {/* Water ripple effect */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)',
      }}
    />

    // Di section Abundance
    <div className="absolute inset-0 overflow-hidden">
      <Koi color="orange" size={140} initialX="5%" initialY="20%" direction={1} speed={1.2} />
      <Koi color="red" size={160} initialX="70%" initialY="50%" direction={-1} speed={0.9} />
      <Koi color="black" size={130} initialX="30%" initialY="70%" direction={1} speed={1.5} />
      <Koi color="gold" size={200} initialX="80%" initialY="30%" direction={-1} speed={0.7} />
      <Koi color="calico" size={150} initialX="40%" initialY="80%" direction={1} speed={1.1} />
      <Koi color="white" size={120} initialX="60%" initialY="10%" direction={-1} speed={1.3} />
    </div>

    <SectionCard
      chineseTitle="年年有余"
      pinyin="Nián Nián Yǒu Yú"
      description="Kelimpahan Setiap Tahun"
      theme="blue"
    >
      {/* Wave decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #87CEEB, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #87CEEB, transparent)' }}
      />
    </SectionCard>
  </section>
);
