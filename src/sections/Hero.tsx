"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown, Mail, Sparkles } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TITLES = [
  "AI & ML Engineer",
  "Data Science Graduate",
  "Machine Learning Enthusiast",
  "Generative AI Explorer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  // Parallax mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 50, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Background shifts slightly inversely to mouse
  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], [15, -15]);
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);

  // Foreground (avatar/text) shifts slightly towards mouse
  const fgX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const fgY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize to [-0.5, 0.5]
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const scrollToAbout = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section 
      className="relative min-h-[calc(100vh-88px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none animate-float"
        style={{ background: "var(--orb-violet)", x: bgX, y: bgY }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-float"
        style={{ background: "var(--orb-cyan)", animationDelay: "2.5s", x: bgX, y: bgY }}
      />

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center preserve-3d"
        style={{ x: fgX, y: fgY }}
      >
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm font-medium"
          style={{
            background: "var(--avail-bg)",
            border: "1px solid var(--avail-border)",
            color: "var(--avail-text)",
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Available for opportunities
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 120 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full opacity-40 blur-md animate-pulse-glow"
              style={{ background: `linear-gradient(135deg, var(--accent), var(--accent-2))` }}
            />
            <div className="absolute -inset-5 rounded-full border border-dashed animate-spin-slow"
              style={{ borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)" }}
            />
            <div
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "2px solid color-mix(in srgb, var(--accent) 40%, transparent)",
              }}
            >
              <span className="text-5xl sm:text-6xl select-none">👨‍💻</span>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
          style={{ color: "var(--foreground)" }}
        >
          Dharm{" "}
          <span className="gradient-text">Dudhagara</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl sm:text-2xl mb-6 h-8 flex items-center justify-center font-mono"
          style={{ color: "var(--muted-foreground)" }}
        >
          <span style={{ color: "var(--accent)" }}>&gt; </span>
          <span className="ml-1" style={{ color: "var(--foreground)" }}>{displayed}</span>
          <span className="ml-0.5 inline-block w-0.5 h-6 animate-pulse" style={{ background: "var(--accent)" }} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          MSc Data Science graduate passionate about building intelligent systems.
          Specializing in{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>Machine Learning</span>,{" "}
          <span style={{ color: "var(--accent-2)", fontWeight: 500 }}>Deep Learning</span>, and{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>Generative AI</span>.
          Crafting multi-agent LLM solutions from Gujarat, India 📍
        </motion.p>


        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <a
            href="mailto:dudhagaradharm53@gmail.com"
            className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
          <a
            href="https://github.com/dharm1123"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/dharmdudhagara"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        onClick={scrollToAbout}
        className="relative z-10 flex flex-col items-center gap-2 transition-colors group"
        style={{ color: "var(--muted-foreground)" }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full transition-all"
          style={{ border: "1px solid var(--card-border)" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
