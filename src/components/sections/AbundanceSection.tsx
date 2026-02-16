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

    <div className="absolute inset-0">
      <Koi color="orange" size={150} initialX="10%" initialY="20%" pattern="circle" direction={1} speed={1.2} />
      <Koi color="red" size={180} initialX="70%" initialY="50%" pattern="figure8" direction={-1} speed={0.8} />
      <Koi color="black" size={120} initialX="30%" initialY="70%" pattern="horizontal" direction={1} speed={1} />
      <Koi color="gold" size={200} initialX="80%" initialY="30%" pattern="random" direction={-1} speed={1.5} />
      <Koi color="calico" size={160} initialX="40%" initialY="80%" pattern="circle" direction={1} speed={0.9} />
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
