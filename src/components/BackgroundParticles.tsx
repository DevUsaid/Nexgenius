"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  moveX: number;
  duration: number;
  delay: number;
  color: string;
}

export default function BackgroundParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      moveX: Math.random() * 60 - 30,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      color: i % 3 === 0 ? '#38BDF8' : i % 2 === 0 ? '#3B82F6' : '#7C3AED'
    }));
    
    const timeout = setTimeout(() => {
      setParticles(newParticles);
    }, 0);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, particle.moveX, 0],
            scale: [0.8, 1.8, 0.8],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
