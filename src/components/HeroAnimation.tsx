import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import valmirPhoto from "@/assets/valmir.jpg";

const HeroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const audioRef = useState<HTMLAudioElement>(() => new Audio('/opening-sound.mp3'))[0];

  useEffect(() => {
    // Generate random particles
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setParticles(particleArray);

    // Tocar o som
    audioRef.volume = 0.6;
    audioRef.play().catch(error => {
      console.log('Audio playback failed:', error);
    });

    // Auto-complete after animation
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
      audioRef.pause();
      audioRef.currentTime = 0;
    };
  }, [onComplete, audioRef]);

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
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-institutional-gold/30 shadow-2xl box-glow">
            <img 
              src={valmirPhoto} 
              alt="Valmir Marques Camilo" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-foreground mb-4 text-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Valmir Marques Camilo
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Presidente da ANABB
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroAnimation;
