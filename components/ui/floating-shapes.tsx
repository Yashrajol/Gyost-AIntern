"use client";

import { motion } from 'framer-motion';

export function FloatingShapes() {
  const shapes = [
    { id: 1, size: 60, x: '10%', y: '20%', delay: 0 },
    { id: 2, size: 40, x: '80%', y: '10%', delay: 1 },
    { id: 3, size: 80, x: '70%', y: '60%', delay: 2 },
    { id: 4, size: 30, x: '20%', y: '70%', delay: 0.5 },
    { id: 5, size: 50, x: '90%', y: '80%', delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-gradient-to-r from-cyan-glow/20 to-purple-electric/20 backdrop-blur-sm"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}