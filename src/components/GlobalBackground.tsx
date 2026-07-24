"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouseGlowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // 1. Mouse Tracking Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Update mouse glow blob position directly to avoid React state re-renders (performance)
      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 2. HTML5 Canvas Neural Network Engine
  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize by making canvas opaque if possible, but here we need transparency.
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Canvas Resize Handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.4; // Very slow drift
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges smoothly
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(57, 255, 20, 0.5)'; // Subtle neon green nodes
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      // Calculate particle density based on screen size (prevent mobile lag)
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 18000);
      const cappedCount = Math.min(particleCount, 70); // Max 70 nodes for solid 60fps
      
      for (let i = 0; i < cappedCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      // Clear canvas with transparent rect
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Check distance to other particles to draw neural network lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDistance = 180;
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Opacity fades as distance increases
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(57, 255, 20, ${opacity * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Mouse interaction: draw lines to mouse if close
        const mx = particles[i].x - mouseRef.current.x;
        const my = particles[i].y - mouseRef.current.y;
        const mouseDistance = Math.sqrt(mx * mx + my * my);
        
        if (mouseDistance < 250) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            const opacity = 1 - (mouseDistance / 250);
            ctx.strokeStyle = `rgba(57, 255, 20, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  // SVG Base64 string for cinematic noise (highly optimized)
  const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-50] overflow-hidden bg-[#050505]">
      
      {/* Cinematic Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-[5]"
        style={{ backgroundImage: noiseSvg }}
      ></div>

      {/* Interactive Mouse Glow */}
      {!prefersReducedMotion && (
        <div 
          ref={mouseGlowRef}
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] transition-opacity duration-1000 z-[1] opacity-40"
          style={{ willChange: 'transform' }}
        ></div>
      )}

      {/* CSS Aurora Blobs */}
      {!prefersReducedMotion && (
        <>
          {/* Blob 1: Emerald/Primary */}
          <motion.div
            animate={{
              x: ["0%", "15%", "-5%", "0%"],
              y: ["0%", "-15%", "5%", "0%"],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-primary/10 rounded-full blur-[140px] mix-blend-screen z-[0]"
          />
          
          {/* Blob 2: Teal/Accent */}
          <motion.div
            animate={{
              x: ["0%", "-20%", "15%", "0%"],
              y: ["0%", "20%", "-10%", "0%"],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#00C853]/10 rounded-full blur-[150px] mix-blend-screen z-[0]"
          />

          {/* Blob 3: Deep Green Center */}
          <motion.div
            animate={{
              x: ["-10%", "5%", "-15%", "-10%"],
              y: ["5%", "-10%", "5%", "5%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-[#00E676]/5 rounded-full blur-[120px] mix-blend-screen z-[0]"
          />

          {/* Blob 4: Hero Right Bot Radial Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 0.95, 1],
              opacity: [0.25, 0.35, 0.2, 0.25],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[10%] right-[0%] w-[45vw] h-[45vw] max-w-[750px] max-h-[750px] bg-[#39FF14]/20 rounded-full blur-[140px] mix-blend-screen z-[0]"
          />
        </>
      )}

      {/* HTML5 Canvas Neural Network Engine */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-[2] w-full h-full"
      />
      
      {/* Subtle Digital Grid (Static Fallback/Texture) */}
      <div className="absolute inset-0 z-[3] bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      
    </div>
  );
}
