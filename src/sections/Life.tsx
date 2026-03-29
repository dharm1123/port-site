"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const interests = [
  {
    title: "Open-World Gaming",
    description: "Love exploration and freedom-based gameplay. It's my way to unwind.",
    emoji: "🎮",
  },
  {
    title: "Nature Videography",
    description: "Shooting videos of natural scenery whenever I travel to new places.",
    emoji: "📸",
  },
  {
    title: "Long Bike Rides",
    description: "Perfect for relaxing and clearing my mind after long coding sessions.",
    emoji: "🏍️",
  },
  {
    title: "Blog Reading",
    description: "Tech blogs and anything that helps me learn and explore.",
    emoji: "📚",
  },
  {
    title: "Movies & Documentaries",
    description: "Adventure, sci-fi, and documentaries that expand my imagination.",
    emoji: "🎬",
  },
  {
    title: "Dark Chocolate & Coffee",
    description: "My absolute favorites. Nothing beats dark chocolate coffee while coding.",
    emoji: "☕",
  },
];

const funFacts = [
  "My long-term goal is to build AI solutions for agriculture to help farmers 🌾",
  "I spend most of my time in front of my PC, and I genuinely enjoy every minute of it 💻",
  "While coding: energetic focus music. Normal time: Gujarati music 🎵",
  "I love open-world games because I enjoy the freedom to explore 🗺️",
  "Always curious about how things work behind the scenes 🔍",
  "Traveling to new places is when I shoot my best nature videos 🌄",
];

export default function Life() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="life" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label section-label-violet">Beyond The Code</span>
          <div className="flex items-end gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
              Life <span className="gradient-text">Beyond Code</span>
            </h2>
            <div className="section-divider" />
          </div>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-[var(--muted-foreground)] mb-12 max-w-2xl"
        >
          I spend a lot of time in front of my PC, but that's because I genuinely
          love building, learning, and exploring technology. Here's what I do when
          I step away — or sometimes while I'm still at my desk.
        </motion.p>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="group p-6 rounded-lg transition-all glass-card"
              style={{ cursor: "default" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--life-card-hover-border)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {interest.emoji}
                </span>
                <div>
                  <h3 className="font-medium mb-1">{interest.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{interest.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card rounded-xl p-6 sm:p-8"
        >
          <h3 className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-6">
            Things About Me
          </h3>
          <ul className="space-y-3">
            {funFacts.map((fact, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="flex items-start gap-3 text-[var(--muted-foreground)]"
              >
                <span className="select-none">→</span>
                <span>{fact}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl sm:text-2xl font-medium italic mb-4">
            "Small progress every day is better than no progress."
          </p>
          <cite className="text-sm text-[var(--muted-foreground)] not-italic">
            — My philosophy
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
