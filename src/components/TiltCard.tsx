"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // Maximum rotation in degrees (default: 10)
}

export default function TiltCard({ children, className = "", intensity = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track mouse coordinates (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth the raw mouse values
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform coordinates into rotation angles
  // If mouse is at top (y=-0.5), we rotate positive X to tilt it towards us
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  // If mouse is at right (x=0.5), we rotate positive Y to tilt right side away
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);

  // Handle cursor entering
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card boundaries
    const width = rect.width;
    const height = rect.height;
    
    // Mouse relative to center of card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Normalize to range [-0.5, 0.5]
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  // Reset to flat when mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={() => {}} // Accessibility
      onBlur={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
      }}
      className={`perspective-1000 preserve-3d will-change-transform ${className}`}
    >
      {/* 
        This nested div actually carries the content. 
        It ensures that children can use translateZ without fighting the parent's rotate 
      */}
      <div className="preserve-3d w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
