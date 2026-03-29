"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const projects = [
  {
    title: "Urban City Analysis",
    subtitle: "Predictive ML System",
    description: "A comprehensive ML system for smart city analytics featuring crime prediction, accident severity classification, and passenger demand forecasting using ensemble methods.",
    emoji: "🏙️",
    accentVar: "--accent-2",
    tagClass: "tag-cyan",
    tags: ["Python", "Random Forest", "Gradient Boosting", "Stacking", "Data Viz"],
    github: "https://github.com/dharm1123",
    demo: null,
    year: "2024",
  },
  {
    title: "Wildlife Species Recognition",
    subtitle: "Deep Learning with XAI",
    description: "State-of-the-art deep learning system for wildlife conservation that classifies 90+ wildlife species using EfficientNetB2 with Transfer Learning and Grad-CAM explainability.",
    emoji: "🦁",
    accentVar: "--accent",
    tagClass: "tag-violet",
    tags: ["TensorFlow", "EfficientNetB2", "Transfer Learning", "Grad-CAM", "TFLite"],
    github: "https://github.com/dharm1123",
    demo: null,
    year: "2024",
  },
  {
    title: "Khedut Sahayak",
    subtitle: "Multi-Agent AI Advisory",
    description: "An innovative multi-agent AI system built with LangChain and LangGraph that provides comprehensive agricultural advisory services with crop health monitoring and pest detection.",
    emoji: "🌾",
    accentVar: "--accent",
    tagClass: "tag-emerald",
    tags: ["LangChain", "LangGraph", "RAG", "Azure OpenAI", "Streamlit"],
    github: "https://github.com/dharm1123",
    demo: null,
    year: "2024",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label section-label-violet">Projects</span>
          <div className="flex items-end gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
              Things I&apos;ve <span className="gradient-text">Built</span>
            </h2>
            <div className="section-divider" />
          </div>
          <p className="mt-3 max-w-xl text-sm" style={{ color: "var(--muted-foreground)" }}>
            A selection of projects ranging from machine learning applications to generative AI systems.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + index * 0.12 }}
              className="rounded-2xl overflow-hidden preserve-3d"
            >
              <TiltCard intensity={6} className="glass-card gradient-border rounded-2xl overflow-hidden group">
                {/* Accent top strip */}
                <div
                  className="h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, var(${project.accentVar}), transparent)` }}
                />

                <div className="p-6 sm:p-8 preserve-3d">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5 transform transition-transform duration-300 group-hover:translate-z-20">
                    {/* Title row */}
                    <div className="flex items-start gap-4">
                    <div
                      className="text-3xl sm:text-4xl p-3 rounded-xl shrink-0"
                      style={{
                        background: `color-mix(in srgb, var(${project.accentVar}) 10%, transparent)`,
                        border: `1px solid color-mix(in srgb, var(${project.accentVar}) 20%, transparent)`,
                      }}
                    >
                      {project.emoji}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1" style={{ color: "var(--foreground)" }}>
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: `var(${project.accentVar})` }}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Year */}
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded shrink-0 self-start"
                    style={{ color: "var(--muted-foreground)", border: "1px solid var(--border)" }}
                  >
                    {project.year}
                  </span>
                </div>

                <p className="mb-6 leading-relaxed text-sm sm:text-base" style={{ color: "var(--muted-foreground)" }}>
                  {project.description}
                </p>

                {/* Tags + links */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className={project.tagClass}>{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm transition-colors"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      <GithubIcon /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm transition-colors"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    )}
                  </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/dharm1123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors group"
            style={{ color: "var(--muted-foreground)" }}
          >
            <GithubIcon />
            View all projects on GitHub
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
