import React from 'react';
import { Bamboo } from '../decorations/index.ts';
import { SectionCard } from '../ui/index.ts';

export const HealthSection: React.FC = () => (
  <section
    className="relative h-screen snap-start flex items-center justify-center overflow-hidden"
    style={{
      background: 'linear-gradient(180deg, rgba(0, 50, 0, 0.3) 0%, rgba(34, 80, 34, 0.2) 100%)',
    }}
  >
    {/* Bamboo decorations */}
    <div className="absolute left-2 sm:left-8 bottom-0">
      <Bamboo className="w-16 sm:w-20" />
    </div>
    <div className="absolute left-12 sm:left-24 bottom-0 opacity-70">
      <Bamboo className="w-12 sm:w-16" />
    </div>
    <div className="absolute right-2 sm:right-8 bottom-0">
      <Bamboo className="w-16 sm:w-20" />
    </div>
    <div className="absolute right-12 sm:right-24 bottom-0 opacity-70">
      <Bamboo className="w-12 sm:w-16" />
    </div>

    <SectionCard
      chineseTitle="身体健康"
      pinyin="Shēn Tǐ Jiàn Kāng"
      description="Kesehatan dan Umur Panjang"
      theme="green"
    >
      {/* Leaf decoration corners */}
      <div className="absolute top-3 left-3 text-2xl">🌿</div>
      <div className="absolute top-3 right-3 text-2xl">🌿</div>
      <div className="absolute bottom-3 left-3 text-2xl">🍃</div>
      <div className="absolute bottom-3 right-3 text-2xl">🍃</div>
    </SectionCard>
  </section>
);
