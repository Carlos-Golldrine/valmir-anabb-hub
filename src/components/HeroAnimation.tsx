import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setParticles(particleArray);

    // Cinematic sound sequence using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const masterGain = audioContext.createGain();
    masterGain.connect(audioContext.destination);
    masterGain.gain.value = 0.4;

    const now = audioContext.currentTime;

    // 1. Som ambiente etéreo inicial (sopro digital de alta frequência)
    const ambient = audioContext.createOscillator();
    const ambientGain = audioContext.createGain();
    ambient.connect(ambientGain);
    ambientGain.connect(masterGain);
    ambient.type = 'sine';
    ambient.frequency.setValueAtTime(2400, now);
    ambientGain.gain.setValueAtTime(0, now);
    ambientGain.gain.linearRampToValueAtTime(0.08, now + 0.3);
    ambientGain.gain.linearRampToValueAtTime(0.05, now + 1.0);
    ambient.start(now);
    ambient.stop(now + 1.2);

    // 2. Estalos cristalinos (partículas aparecendo)
    for (let i = 0; i < 15; i++) {
      const startTime = now + 0.2 + (i * 0.08);
      const crystal = audioContext.createOscillator();
      const crystalGain = audioContext.createGain();
      crystal.connect(crystalGain);
      crystalGain.connect(masterGain);
      crystal.type = 'sine';
      crystal.frequency.setValueAtTime(1800 + Math.random() * 800, startTime);
      crystalGain.gain.setValueAtTime(0.15, startTime);
      crystalGain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.15);
      crystal.start(startTime);
      crystal.stop(startTime + 0.15);
    }

    // 3. Som de vórtice (partículas convergindo)
    const vortex = audioContext.createOscillator();
    const vortexGain = audioContext.createGain();
    const vortexFilter = audioContext.createBiquadFilter();
    vortex.connect(vortexFilter);
    vortexFilter.connect(vortexGain);
    vortexGain.connect(masterGain);
    vortex.type = 'sawtooth';
    vortexFilter.type = 'lowpass';
    vortex.frequency.setValueAtTime(80, now + 1.0);
    vortex.frequency.exponentialRampToValueAtTime(150, now + 1.8);
    vortexFilter.frequency.setValueAtTime(300, now + 1.0);
    vortexFilter.frequency.exponentialRampToValueAtTime(800, now + 1.8);
    vortexGain.gain.setValueAtTime(0, now + 1.0);
    vortexGain.gain.linearRampToValueAtTime(0.12, now + 1.3);
    vortexGain.gain.linearRampToValueAtTime(0, now + 1.8);
    vortex.start(now + 1.0);
    vortex.stop(now + 1.8);

    // 4. Whoosh com brilho metálico (fusão do nome)
    const whoosh = audioContext.createOscillator();
    const whooshGain = audioContext.createGain();
    const whooshFilter = audioContext.createBiquadFilter();
    whoosh.connect(whooshFilter);
    whooshFilter.connect(whooshGain);
    whooshGain.connect(masterGain);
    whoosh.type = 'square';
    whooshFilter.type = 'highpass';
    whoosh.frequency.setValueAtTime(1200, now + 1.8);
    whoosh.frequency.exponentialRampToValueAtTime(300, now + 2.3);
    whooshFilter.frequency.setValueAtTime(2000, now + 1.8);
    whooshFilter.frequency.exponentialRampToValueAtTime(800, now + 2.3);
    whooshGain.gain.setValueAtTime(0.2, now + 1.8);
    whooshGain.gain.exponentialRampToValueAtTime(0.01, now + 2.3);
    whoosh.start(now + 1.8);
    whoosh.stop(now + 2.3);

    // Brilho metálico adicional
    const shimmer = audioContext.createOscillator();
    const shimmerGain = audioContext.createGain();
    shimmer.connect(shimmerGain);
    shimmerGain.connect(masterGain);
    shimmer.type = 'triangle';
    shimmer.frequency.setValueAtTime(3200, now + 2.0);
    shimmer.frequency.exponentialRampToValueAtTime(2400, now + 2.5);
    shimmerGain.gain.setValueAtTime(0.1, now + 2.0);
    shimmerGain.gain.exponentialRampToValueAtTime(0.01, now + 2.5);
    shimmer.start(now + 2.0);
    shimmer.stop(now + 2.5);

    // 5. Toque de piano cristalino (cargo e logo ANABB)
    const pianoNotes = [
      { freq: 523.25, time: 2.4 },  // C5
      { freq: 659.25, time: 2.6 },  // E5
      { freq: 783.99, time: 2.8 },  // G5
    ];

    pianoNotes.forEach(({ freq, time }) => {
      const piano = audioContext.createOscillator();
      const pianoGain = audioContext.createGain();
      piano.connect(pianoGain);
      pianoGain.connect(masterGain);
      piano.type = 'sine';
      piano.frequency.setValueAtTime(freq, now + time);
      pianoGain.gain.setValueAtTime(0.15, now + time);
      pianoGain.gain.exponentialRampToValueAtTime(0.01, now + time + 0.8);
      piano.start(now + time);
      piano.stop(now + time + 0.8);
    });

    // Auto-complete after animation
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
      audioContext.close();
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated particles background - converging to center */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1.5 h-1.5 rounded-full bg-institutional-gold"
            style={{
              boxShadow: "0 0 10px hsl(45 100% 60% / 0.8)",
            }}
            initial={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              x: "50vw",
              y: "50vh",
              scale: 0.3,
              opacity: [1, 0.8, 0],
            }}
            transition={{
              duration: 1.5,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-foreground mb-4 text-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Valmir Marques Camilo
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Presidente da ANABB
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-card/50 backdrop-blur-sm border-2 border-institutional-gold/30 flex items-center justify-center box-glow">
            <span className="text-4xl md:text-5xl font-poppins font-bold text-institutional-gold text-glow">ANABB</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroAnimation;
