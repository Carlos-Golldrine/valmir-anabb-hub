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

    // Auto-complete after animation
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
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
