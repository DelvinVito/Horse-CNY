import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

// Components
import { MusicButton, ParallaxBackground } from './components/ui/index.ts';
import { HeroSection, WealthSection, AbundanceSection, HealthSection } from './components/sections/index.ts';

// Hooks
import { useMusic, useResponsive, useCoinData } from './hooks/index.ts';

// Assets
import fireworksAnimation from './assets/animations/fireworks.json' with { type: 'json' };

// Constants
import { GRADIENTS } from './constants/theme.ts';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Parallax transforms
  const mountainY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const templeY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const lanternY = useTransform(scrollYProgress, [0, 1], [0, -700]);

  // Custom hooks
  const { isMusicOn, toggleMusic } = useMusic();
  const { coinCount } = useResponsive();
  const coinData = useCoinData(15);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ background: GRADIENTS.background }}
    >
      {/* Pola dekoratif background */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #FFD700 1px, transparent 1px), radial-gradient(circle at 80% 70%, #FFD700 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      {/* Music toggle button */}
      <MusicButton isMusicOn={isMusicOn} onToggle={toggleMusic} />

      {/* Parallax background layers */}
      <ParallaxBackground
        mountainY={mountainY}
        templeY={templeY}
        lanternY={lanternY}
      />

      {/* Main scrollable content */}
      <div
        ref={containerRef}
        className="relative z-10 h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <HeroSection fireworksAnimation={fireworksAnimation} />
        <WealthSection coinData={coinData} coinCount={coinCount} />
        <AbundanceSection />
        <HealthSection />
      </div>
    </div>
  );
};

export default App;
