import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; angle: number }>>([]);

  useEffect(() => {
    // Generate particles in circular formation for spiral effect
    const particleArray = Array.from({ length: 50 }, (_, i) => {
      const angle = (i / 50) * Math.PI * 2;
      const radius = 40 + Math.random() * 10;
      return {
        id: i,
        x: 50 + Math.cos(angle) * radius,
        y: 50 + Math.sin(angle) * radius,
        delay: (i / 50) * 0.3,
        angle: angle,
      };
    });
    setParticles(particleArray);

    // Auto-complete after animation
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
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
        {particles.map((particle) => {
          // Calculate spiral path points
          const spiralRotations = 2;
          const centerX = 50;
          const centerY = 50;
          
          return (
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
                x: [
                  `${particle.x}vw`,
                  `${centerX + Math.cos(particle.angle + Math.PI * spiralRotations) * 20}vw`,
                  `${centerX}vw`
                ],
                y: [
                  `${particle.y}vh`,
                  `${centerY + Math.sin(particle.angle + Math.PI * spiralRotations) * 20}vh`,
                  `${centerY}vh`
                ],
                scale: [1, 0.5, 0.3],
                opacity: [1, 0.8, 0],
              }}
              transition={{
                duration: 1.8,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
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
