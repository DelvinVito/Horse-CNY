import { useState, useRef, useEffect, useCallback } from 'react';

interface UseMusicReturn {
  isMusicOn: boolean;
  toggleMusic: () => void;
}

export const useMusic = (audioSrc: string = '/chinese-new-year.mp3'): UseMusicReturn => {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      audioRef.current?.pause();
    };
  }, [audioSrc]);

  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (isMusicOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.log('Audio play failed:', e));
      }
      setIsMusicOn((prev) => !prev);
    }
  }, [isMusicOn]);

  return { isMusicOn, toggleMusic };
};
